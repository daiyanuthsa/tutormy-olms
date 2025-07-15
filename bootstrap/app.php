<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->trustProxies(
            at: '*'
        );
        $middleware->validateCsrfTokens(
            except: [
                '/booking/payment/doku/notification',
            ]
        );
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,

        ]);
        $middleware->alias([
            'profile.completed' => \App\Http\Middleware\EnsureProfileIsComplete::class,
            'verify.doku' => \App\Http\Middleware\VerifyDokuSignature::class,
            'isSubscribed' => \App\Http\Middleware\CheckSubscripsion::class,
        ]);

        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->render(function (HttpExceptionInterface $e, Request $request) {
            if ($request->expectsJson() || !$request->isMethod('GET')) {
                return null; // pakai default render
            }

            $status = $e->getStatusCode();

            if (in_array($status, [403, 404, 500])) {
                return \Inertia\Inertia::render('EmpatKosongEmpat', [
                    'status' => $status,
                ])->toResponse($request)->setStatusCode($status);
            }

            return null; // biarkan Laravel handle error lainnya
        });
    })
    ->withCommands([
        \App\Console\Commands\MakeRepositoryCommand::class,
    ])
    ->create();
