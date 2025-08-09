<?php

namespace App\Providers;

use App\Models\Course;
use App\Models\CourseSection;
use App\Models\DocumentVersion;
use App\Models\SectionContent;
use App\Models\Transaction;
use App\Models\User;
use App\Observers\CourseObserver;
use App\Observers\CourseSectionObserver;
use App\Observers\DocumentVersionObserver;
use App\Observers\SectionContentObserver;
use App\Observers\TransactionObserver;
use App\Repositories\AgendaRepository;
use App\Repositories\AgendaRepositoryInterface;
use App\Repositories\ArticleRepository;
use App\Repositories\ArticleRepositoryInterface;
use App\Repositories\CourseRepository;
use App\Repositories\CourseRepositoryInterface;
use App\Repositories\PricingRepository;
use App\Repositories\PricingRepositoryInterface;
use App\Repositories\TransactionRepository;
use App\Repositories\TransactionRepositoryInterface;
use App\Services\DokuService;
use Gate;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Laravel\Telescope\TelescopeServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(ArticleRepositoryInterface::class, ArticleRepository::class);
        $this->app->singleton(CourseRepositoryInterface::class, CourseRepository::class);
        $this->app->singleton(PricingRepositoryInterface::class, PricingRepository::class);
        $this->app->singleton(TransactionRepositoryInterface::class, TransactionRepository::class);
        $this->app->singleton(AgendaRepositoryInterface::class, AgendaRepository::class);
       // $this->app->bind(DokuService::class, DokuService::class);
        if ($this->app->environment('local') && class_exists(TelescopeServiceProvider::class)) {
            $this->app->register(TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        Transaction::observe(TransactionObserver::class);
        DocumentVersion::observe(DocumentVersionObserver::class);
        Course::observe(CourseObserver::class);
        CourseSection::observe(CourseSectionObserver::class);
        SectionContent::observe(SectionContentObserver::class);
        Gate::before(function (User $user, string $ability) {
            return $user->isSuperAdmin() ? true : null;
        });
    }
}
