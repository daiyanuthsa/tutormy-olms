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
        }
        return [
            'user_name' => $user->name,
            'section_id' => $firstSection->id,
            'section_content_id' => $firstSectionContentId,
        ];
    }
}