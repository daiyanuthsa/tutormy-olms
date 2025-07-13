<?php

use App\Http\Controllers\CertificateController;
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

Route::match(
    ['get', 'post'],
    '/booking/payment/doku/notification',
    [FrontController::class, 'paymentDokuNotification']
)->middleware('verify.doku')
    ->name('front.payment_midtrans_notification');

Route::get('/', [FrontController::class, 'index'])->name('home');
Route::get('/pricing', [FrontController::class, 'pricing'])->name('pricing');

Route::get('/auth/{provider}/redirect', ProviderRedirectController::class)->name('auth.redirect');
Route::get('/auth/{provider}/callback', ProviderCallbackController::class)->name('auth.callback');

Route::get('/tips', [TipsController::class, 'index'])->name('tips.index');
Route::get('/tips/search', [TipsController::class, 'searchTips'])->name('tips.search');
Route::get('/tips/{article:slug}', [TipsController::class, 'tipsDetails'])->name('tips.details');

Route::get('/courses', [CourseController::class, 'index'])->name('course.index');
Route::get('/courses/search', [CourseController::class, 'search'])->name('course.search');
Route::get('/courses/{course:slug}', [CourseController::class, 'show'])->name('course.details');

Route::get('/webinar', [WebinarController::class, 'index'])->name('webinar.index');
Route::get('/webinar/register/{agenda:slug}', [WebinarController::class, 'showUpcomingAgenda'])->name('webinar.upcoming');
Route::get('/webinar/{agenda:slug}', [WebinarController::class, 'showPastAgenda'])->name('webinar.past');

Route::get('/documents/{document:slug}', [DocumentController::class, 'show'])->name('document.show');

Route::get('/profile', [ProfileController::class, 'show'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/complete-profile', [ProfileController::class, 'showCompleteProfileForm'])->name('profile.complete');
    Route::post('/complete-profile', [ProfileController::class, 'completeProfile'])->name('profile.complete.post');

    Route::middleware(['profile.completed'])->group(function () {
        Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        // middleware isSubscribed user
        Route::middleware(['isSubscribed'])->group(function () {
            Route::get('/courses/join/{course:slug}', [CourseController::class, 'join'])
                ->name('course.join');
            // web-design-hack/1/12
            Route::get('/courses/learning/{course:slug}/{courseSection}/{sectionContent}', [CourseController::class, 'learning'])
                ->name('courses.learning');

            Route::get('/courses/finished/{course:slug}', [CourseController::class, 'finished'])
                ->name('courses.learning');

            Route::get('/courses/certificate/{course:slug}', [CertificateController::class, 'show'])
                ->name('courses.certificate.show');
             });
        Route::get('/checkout/{pricing}', [FrontController::class, 'checkout'])->name('front.checkout');
    });
    Route::post('/booking/payment/doku', [FrontController::class, 'paymentStore'])->name('payment.store');
    Route::get('/payment-success', function () {
        return Inertia::render('Transaction/PaymentSuccess/Success');
    })->name('payment.success');
});


Route::get('/test', function () {
    return Inertia::render('Auth/VerifyEmail', ['status' => session('status')]);
});
require __DIR__ . '/auth.php';


Route::get('/profile-public', function () {
    return Inertia::render('ProfileUser/PublicProfile', [
        'user' => auth()->user(),
    ]);
})->name('profile.public');

Route::get('/riwayat-pembelian', function () {
    return Inertia::render('RiwayatPembelian/Index');
})->name('riwayat-pembelian');

Route::get('/course-sertifikat', function () {
    return Inertia::render('Course/Sertifikat');
})->name('course-sertifikat');
