<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Socialite\ProviderCallbackController;
use App\Http\Controllers\Socialite\ProviderRedirectController;
use App\Http\Controllers\TipsController;
use App\Http\Controllers\WebinarController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [FrontController::class, 'index'])->name('home');

Route::get('/auth/{provider}/redirect', ProviderRedirectController::class)->name('auth.redirect');
Route::get('/auth/{provider}/callback', ProviderCallbackController::class)->name('auth.callback');

Route::get('/tips', [TipsController::class, 'index'])->name('tips.index');
Route::get('/tips/search', [TipsController::class, 'searchTips'])->name('tips.search');
Route::get('/tips/{slug}', [TipsController::class, 'tipsDetails'])->name('tips.details');

Route::get('/courses', [CourseController::class, 'index'])->name('course.index');
Route::get('/courses/search', [CourseController::class, 'search'])->name('course.search');
Route::get('/courses/{course:slug}', [CourseController::class, 'show'])->name('course.details');

Route::get('/webinar', [WebinarController::class,'index'])->name('webinar.index');
Route::get('/webinar/register/{agenda:slug}', [WebinarController::class,'showUpcomingAgenda'])->name('webinar.upcoming');

Route::get('/documents/{document:slug}', [DocumentController::class, 'show'])->name('document.show');

Route::get('/profile',[ProfileController::class, 'show'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/complete-profile', [ProfileController::class, 'showCompleteProfileForm'])->name('profile.complete');
    Route::post('/complete-profile', [ProfileController::class, 'completeProfile'])->name('profile.complete.post');

    Route::middleware(['profile.completed'])->group(function () {
        Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

        Route::get('/courses/join/{course:slug}', [CourseController::class, 'join'])
            ->name('course.join');

        Route::get('/checkout/{pricing}', [FrontController::class, 'checkout'])->name('front.checkout');

        // middleware issubscribed user
        Route::get('/webinar/{agenda:slug}', [WebinarController::class, 'showPastAgenda'])->name('webinar.past');
    });
});


Route::get('/test', function () {
    return Inertia::render('Auth/VerifyEmail', ['status' => session('status')]);
});
require __DIR__ . '/auth.php';
