<?php

namespace App\Observers;

use App\Models\Course;
use Illuminate\Support\Facades\Cache;

class CourseObserver
{
    //
    // Contoh di observer CourseObserver.php
    public function saved(Course $course)
    {
        Cache::forget('course_thumbnail_all');
        // Bisa juga hapus per-limit jika kamu simpan versi limit
    }

    public function deleted(Course $course)
    {
        Cache::forget('course_thumbnail_all');
    }

}
