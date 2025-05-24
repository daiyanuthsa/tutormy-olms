<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TipsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/tips', [TipsController::class, 'index'])->name('tips.index');
Route::get('/tips/search', [TipsController::class, 'searchTips'])->name('tips.search');
Route::get('/tips/{article}', [TipsController::class, 'tipsDetails'])->name('tips.details');
Route::get('/courses', [CourseController::class, 'index'])->name('course.index');
Route::get('/courses/{course:slug}', [CourseController::class, 'show'])->name('course.details');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/test', function () {
    return Inertia::render('Auth/VerifyEmail', ['status' => session('status')]);
});
require __DIR__ . '/auth.php';
