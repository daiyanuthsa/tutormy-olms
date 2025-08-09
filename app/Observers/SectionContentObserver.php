<?php

namespace App\Observers;

use App\Models\SectionContent;
use Illuminate\Support\Facades\Cache;

class SectionContentObserver
{

    /**
     * Handle the SectionContent "saved" event.
     */
    public function saved(SectionContent $sectionContent)
    {
        Cache::forget('course_thumbnail_all');
        // Bisa juga hapus per-limit jika kamu simpan versi limit
    }

    /**
     * Handle the SectionContent "deleted" event.
     */
    public function deleted(SectionContent $sectionContent)
    {
        Cache::forget('course_thumbnail_all');
    }
    /**
     * Handle the SectionContent "created" event.
     */
    public function created(SectionContent $sectionContent): void
    {
        //
    }

    /**
     * Handle the SectionContent "updated" event.
     */
    public function updated(SectionContent $sectionContent): void
    {
        //
    }

    /**
     * Handle the SectionContent "restored" event.
     */
    public function restored(SectionContent $sectionContent): void
    {
        //
    }

    /**
     * Handle the SectionContent "force deleted" event.
     */
    public function forceDeleted(SectionContent $sectionContent): void
    {
        //
    }
}
