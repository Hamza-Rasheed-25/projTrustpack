<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class roleMiddleware
{
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        // if (!Auth::check() || !in_array(Auth::user()->role, $roles)) {
        //     return response()->view('unauthorized', [], 403);
        // }
        // return $next($request);


        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $userRole = Auth::user()->role;

        // ✅ Allow admin to access any route
        if ($userRole === 'admin' || in_array($userRole, $roles)) {
            return $next($request);
        }

        return response()->view('unauthorized', [], 403);
    }
}
