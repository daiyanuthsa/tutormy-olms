<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Response;

class EnsureProfileIsComplete
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        $profileEditRoute = 'profile.complete';
        $fieldsToComplete = ['discovery_source'];

        // Hindari redirect loop
        if (in_array(Route::currentRouteName(), [$profileEditRoute, 'logout'])) {
            return $next($request);
        }

        // Cek jika ada field yang kosong
        foreach ($fieldsToComplete as $field) {
            if (!$user || empty($user->{$field})) {
                return redirect()->route($profileEditRoute)
                    ->with('warning', 'Harap lengkapi informasi profil Anda untuk melanjutkan.');
            }
        }

        return $next($request);
    }
}
