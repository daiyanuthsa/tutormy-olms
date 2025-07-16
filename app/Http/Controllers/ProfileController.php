<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function show(){
        $profiledata = Auth::user()->only(['id', 'name', 'email', 'status', 'about']); // ganti field sesuai kebutuhan
        return Inertia::render('Dashboard', compact('profiledata'));
    }
    public function edit(Request $request): Response
    {
        return Inertia::render('ProfileUser/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function showCompleteProfileForm(): Response
    {
        
        return Inertia::render('Profile/CompleteProfile', [
            'status' => session('status'),
        ]);
    }
    public function completeProfile(Request $request)
    {
        $user = $request->user();
        $validated = $request->validate([
            'status' => ['required', 'string', 'max:255'],
            'gender' => ['required', 'string', 'in:F,M'],
            'date_birth' => ['required', 'date'],
            'expectation' => ['required', 'string', 'max:1000'],
            'discovery_source' => ['required', 'string', 'max:255'],
        ]);

        $user->fill($validated);
        $user->save();

        return Redirect::route('home')->with('status', 'Profile updated successfully.');
    }

    public function updateProfilePicture(Request $request)
    {

        $request->validate([
            'profile_photo' => ['required', 'image', 'max:2048'],
        ]);
        $user = Auth::user();

        // Hapus foto lama jika ada
        if ($user->photo && Storage::disk('public')->exists($user->photo)) {
            Storage::disk('public')->delete($user->photo);
        }
    
        // Simpan foto baru
        $path = $request->file('profile_photo')->store('user/profile_photos', 'public');
       
        // Update user
        $user->photo = $path;
        $user->save();

        return Redirect::route('profile.edit')->with('status', 'Profile picture updated successfully.');
    }
}
