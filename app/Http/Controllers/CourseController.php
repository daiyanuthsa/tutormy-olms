<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Repositories\CourseRepositoryInterface;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    protected $courseRepository;

    public function __construct(CourseRepositoryInterface $courseRepository)
    {
        $this->courseRepository = $courseRepository;
    }

    public function index()
    {
        $courses = $this->courseRepository->getAllByCategory();
        // dd($courses);
        return inertia('Course/Course', ['courses' => $courses]);
    }

    public function show(Course $course)
    {
        $benefits = $course->benefits()->get();
        if (!$course) {
            abort(404);
        }
        return inertia('Course/CourseDetails', ['course' => $course, 'benefits' => $benefits]);
    }
}
