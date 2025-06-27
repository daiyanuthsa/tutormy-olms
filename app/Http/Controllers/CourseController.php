<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Repositories\CourseRepositoryInterface;
use App\Services\CourseService;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    protected $courseRepository;
    protected $courseService;

    public function __construct(
        CourseRepositoryInterface $courseRepository,
        CourseService $courseService
    ) {
        $this->courseService = $courseService;
        $this->courseRepository = $courseRepository;
        // Inject the course repository
        // This allows us to use the repository methods in this controller
        // This is a good practice for separating concerns and making the code more testable{

    }

    public function index()
    {
        $courses = $this->courseRepository->getAllByCategory();
        // dd($courses);
        return inertia('Course/Course', ['courses' => $courses]);
    }

    public function show(Course $course)
    {
        // $course->load(['category', 'benefits']);
        $course = $this->courseRepository->getCourseForPublicView($course->id);
        if (!Auth()->check()) {
            $course->group_url = null;
        }
        if (!$course) {
            abort(404);
        }
        return inertia('Course/CourseDetails', compact('course'));
    }
    public function join(Course $course)
    {

        $studentName = $this->courseService->enrollUser($course);

        return Inertia::render('Course/CourseJoin', [
            'course' => $course,
            'studentName' => $studentName['user_name'],
            'sectionId' => $studentName['section_id'],
            'contentId' => $studentName['section_content_id'],
        ]);
    }
    public function search(Request $request)
    {
        $keyword = $request->input('keyword');
        if (!$keyword) {
            return redirect()->route('course.index')->withErrors(['error' => 'Keyword is required']);
        }

        $courses = $this->courseRepository->getByKeyword($keyword);

        return Inertia::render('Course/CourseSearch', [
            'courses' => $courses,
            'keyword' => $keyword,
        ]);
    }

    public function learning(Course $course, $sectionId, $contentId)
    {
        $user = Auth::user();
        // Get the course student record for the authenticated user
        $courseStudent = $course->courseStudents()->where('user_id', $user->id)->first();

        if (!$courseStudent) {
            return redirect()->route('course.index')->withErrors(['error' => 'You are not enrolled in this course']);
        }

        // Update the course section and content IDs
        $courseStudent->update([
            'course_section_id' => $sectionId,
            'section_content_id' => $contentId,
        ]);

        return Inertia::render('Course/Learning', [
            'course' => $course,
            'sectionId' => $sectionId,
            'contentId' => $contentId,
        ]);
    }

}
