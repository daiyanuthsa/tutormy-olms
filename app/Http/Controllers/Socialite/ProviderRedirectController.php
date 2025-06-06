<?php

namespace App\Http\Controllers\Socialite;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class ProviderRedirectController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(string $provider )
    {
        // Validate the provider
        if (!in_array($provider, ['google', 'github'])) {
            return redirect()->route('login')->withErrors(['error' => 'Invalid authentication provider.']);
        }
        // Redirect to the provider's authentication page
        try {
            return Socialite::driver($provider)->redirect();
        } catch (\Exception $e) {
            // Handle any exceptions that may occur during the redirect
            return redirect()->route('login')->withErrors(['error' => 'Failed to redirect to the authentication provider.']);
        }
    }
}
