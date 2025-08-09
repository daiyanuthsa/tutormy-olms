<?php

namespace App\Observers;

use App\Models\CourseSection;
use Illuminate\Support\Facades\Cache;

class CourseSectionObserver
{
    /**
     * Handle the CourseSection "created" event.
     */
    public function created(CourseSection $courseSection): void
    {
        //
    }

    /**
     * Handle the CourseSection "updated" event.
     */
    public function updated(CourseSection $courseSection): void
    {
        //
    }

    /**
     * Handle the CourseSection "saved" event.
     */
    public function saved(CourseSection $courseSection)
    {
        Cache::forget('course_thumbnail_all');
        // Bisa juga hapus per-limit jika kamu simpan versi limit
    }

    /**
     * Handle the CourseSection "deleted" event.
     */
    public function deleted(CourseSection $courseSection)
    {
        Cache::forget('course_thumbnail_all');
    }

    /**
     * Handle the CourseSection "restored" event.
     */
    public function restored(CourseSection $courseSection): void
    {
        //
    }

    /**
     * Handle the CourseSection "force deleted" event.
     */
    public function forceDeleted(CourseSection $courseSection): void
    {
        //
    }
}
