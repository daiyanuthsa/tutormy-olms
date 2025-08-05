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

Route::get('/documents/{document:slug}', [DocumentController::class, 'show'])->name('document.show');

Route::get('/profile', [ProfileController::class, 'show'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/complete-profile', [ProfileController::class, 'showCompleteProfileForm'])->name('profile.complete');
    Route::post('/complete-profile', [ProfileController::class, 'completeProfile'])->name('profile.complete.post');

    Route::middleware(['profile.completed'])->group(function () {
        Route::prefix('profile')->group(function () {
            Route::get('/edit', [ProfileController::class, 'edit'])->name('profile.edit');
            Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
            Route::post('/picture', [ProfileController::class, 'updateProfilePicture'])->name('profile.photo.update');
            Route::delete('/', [ProfileController::class, 'destroy'])->name('profile.destroy');
            Route::post('/portofolio/update', [ProfileController::class, 'updatePortofolio'])->name('portofolio.update');
        });
        Route::get('/riwayat-pembelian', [FrontController::class, 'showTransactionHistory'])->name('riwayat-pembelian');
        Route::get('/checkout/{pricing}', [FrontController::class, 'checkout'])->name('front.checkout');
        // middleware isSubscribed user
        Route::middleware(['isSubscribed'])->group(function () {
            Route::prefix('courses')->group(function () {
                Route::get('/', [CourseController::class, 'index'])->name('course.index');
                Route::get('/search', [CourseController::class, 'search'])->name('course.search');
                Route::get('/{course:slug}', [CourseController::class, 'show'])->name('course.details');
                Route::get('/join/{course:slug}', [CourseController::class, 'join'])
                    ->name('course.join');
                // web-design-hack/1/12
                Route::get('/learning/{course:slug}/{courseSection}/{sectionContent}', [CourseController::class, 'learning'])
                    ->name('courses.learning');

                Route::get('/finished/{course:slug}', [CourseController::class, 'finished'])
                    ->name('courses.finished');

                Route::get('/certificate/{course:slug}', [CertificateController::class, 'show'])
                    ->name('courses.certificate.show');
                Route::post('/certificate/{course:slug}', [CertificateController::class, 'store'])
                    ->name('courses.certificate.store');
            });
            
            Route::prefix('webinar')->group(function () {
                Route::get('/', [WebinarController::class, 'index'])->name('webinar.index');
                Route::get('/search', [WebinarController::class, 'search'])->name('webinar.search');
                Route::get('/register/{agenda:slug}', [WebinarController::class, 'showUpcomingAgenda'])->name('webinar.upcoming');
                Route::get('/{agenda:slug}', [WebinarController::class, 'showPastAgenda'])->name('webinar.past');
            });

            // Route::prefix('tips')->group(function () {
            //     Route::get('/', [TipsController::class, 'index'])->name('tips.index');
            //     Route::get('/search', [TipsController::class, 'searchTips'])->name('tips.search');
            //     Route::get('/{article:slug}', [TipsController::class, 'tipsDetails'])->name('tips.details');
            // });
        });
    });
    Route::post('/booking/payment/doku', [FrontController::class, 'paymentStore'])->name('payment.store');
    Route::get('/payment-success', function () {
        return Inertia::render('Transaction/PaymentSuccess/Success');
    })->name('payment.success');
});
Route::get('/test-certificate', [CertificateController::class, 'generate'])
    ->name('test.certificate.generate');

require __DIR__ . '/auth.php';


Route::get('/profile-public', function () {
    return Inertia::render('ProfileUser/PublicProfile', [
        'user' => auth()->user(),
    ]);
})->name('profile.public');
