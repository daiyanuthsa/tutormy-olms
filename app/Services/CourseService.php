<?php
namespace App\Services;
use App\Models\Course;
use App\Models\User;
use App\Repositories\CourseRepository;
use Illuminate\Support\Facades\Auth;

class CourseService
{
    protected $courseRepository;

    public function __construct(CourseRepository $courseRepository)
    {
        $this->courseRepository = $courseRepository;
    }

    public function enrollUser(Course $course)
    {
        $user = auth()->user();

        // Ambil section pertama dari course
        $firstSection = $course->sections()->orderBy('position')->first();

        // Ambil section content pertama dari section tersebut
        $firstSectionContentId = null;
        if ($firstSection) {
            $firstSectionContent = $firstSection->contents()->orderBy('position')->first();
            if ($firstSectionContent) {
                $firstSectionContentId = $firstSectionContent->id;
            }
        }

        // Cek jika user sudah terdaftar
        if (!$course->courseStudents()->where('user_id', $user->id)->exists()) {
            $course->courseStudents()->create([
                'user_id' => $user->id,
                'is_active' => true,
                'course_section_id' => $firstSection ? $firstSection->id : null,
                'section_content_id' => $firstSectionContentId,
            ]);
        } else {
            // Jika sudah terdaftar, ambil data course student user
            $courseStudent = $course->courseStudents()->where('user_id', $user->id)->first();
            // dd($courseStudent);
            $courseSectionId = $courseStudent->course_section_id;
            $firstSectionContentId = $courseStudent->section_content_id;
            return redirect("/courses/learning/{$course->slug}/{$courseSectionId}/{$firstSectionContentId}");
        }
        return [
            'user_name' => $user->name,
            'section_id' => $firstSection->id,
            'section_content_id' => $firstSectionContentId,
        ];
    }
    public function isfinished(Course $course)
    {
        $user = auth()->user();
        $courseStudent = $course->courseStudents()->where('user_id', $user->id)->first();

        if (!$courseStudent) {
            return response()->json(['message' => 'User not enrolled in course'], 404);
        }

        // Ambil section terakhir dari course
        $lastSection = $course->sections()->orderByDesc('position')->first();

        // Ambil content terakhir dari section terakhir
        $lastSectionContentId = null;
        if ($lastSection) {
            $lastSectionContent = $lastSection->contents()->orderByDesc('position')->first();
            if ($lastSectionContent) {
            $lastSectionContentId = $lastSectionContent->id;
            }
        }

        // Cek apakah course_section_id dan section_content_id pada courseStudent adalah yang terakhir
        $isFinished = (
            $courseStudent->course_section_id == ($lastSection ? $lastSection->id : null) &&
            $courseStudent->section_content_id == $lastSectionContentId
        );

        return (['is_finished' => $isFinished]);
    }
}