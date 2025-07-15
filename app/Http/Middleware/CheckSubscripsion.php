<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckSubscripsion
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();

        if (!$user || !$user->hasActiveSubscription()) {
            // Redirect to a page or show an error if the user is not subscribed
            return redirect()->route('pricing')->with('error', 'You must be subscribed to access this content.');
        }

        return $next($request);
    }
}
