<?php

namespace App\Http\Controllers\Socialite;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

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

        $user = User::updatedOrCreate(
            [
                
                'provider_id' => $socialUser->id,
                'provider_name' => $provider,
            ],
            [
                'email' => $socialUser->email,
                'name' => $socialUser->getName(),
                'provider_token' => $socialUser->token,
                'provider_refresh_token' => $socialUser->refreshToken ?? null,
            ]
        );
        // Log the user in
        Auth::login($user, true);

        // Redirect to the intended route or home
        return redirect()->intended('/')->with('success', 'You have successfully logged in using ' . ucfirst($provider) . '.');
    }
}
