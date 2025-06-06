<?php

namespace App\Http\Controllers\Socialite;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

class ProviderCallbackController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(string $provider)
    {
        // Validate the provider
        if (!in_array($provider, ['google', 'github'])) {
            return redirect()->route('login')->withErrors(['error' => 'Invalid authentication provider.']);
        }

        $socialUser = Socialite::driver($provider)->user();

        if (empty($socialUser->email)) {
            return redirect()->route('login')->withErrors(['error' => 'No email address returned from provider.']);
        }

        // Cek user berdasarkan email
        $user = User::where('email', $socialUser->email)->first();

        if ($user) {
            // Update provider info jika belum ada
            $user->update([
                'provider_id' => $socialUser->id,
                'provider' => $provider,
                'provider_token' => $socialUser->token,
            ]);
        } else {
            // Buat user baru
            $user = User::create([
                'email' => $socialUser->email,
                'name' => $socialUser->getName(),
                'provider_id' => $socialUser->id,
                'provider' => $provider,
                'provider_token' => $socialUser->token,
                'password' => bcrypt(Str::random(9)),
                'email_verified_at'=> now(), // Set email as verified
            ]);
        }
        // Log the user in
        Auth::login($user, true);

        // Redirect to the intended route or home
        return redirect()->intended('/')->with('success', 'You have successfully logged in using ' . ucfirst($provider) . '.');
    }
}
