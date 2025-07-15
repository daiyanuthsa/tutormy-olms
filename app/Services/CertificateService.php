<?php
namespace App\Services;

use App\Models\Course;
use App\Models\CourseStudent;
use App\Models\User;
use App\Repositories\CertificateRepository;
use Inertia\Inertia;


class CertificateService
{
    // This service can contain methods related to certificate generation, validation, etc.
    // For example, you might have a method to generate a PDF certificate or validate certificate data.
    private $certificateRepository;
    public function __construct(CertificateRepository $certificateRepository)
    {
        $this->certificateRepository = $certificateRepository;
    }
    public function createPendingCertificate(User $user, Course $course, string $name)
    {
        $courseStudent= CourseStudent::where("user_id", $user->id)
        ->where("course_id", $course->id)
        ->first();

        if (!$courseStudent) {
            throw new \Exception("Course student not found for user and course.");
        }

        return $this->certificateRepository->create([
            'user_id' => $user->id,
            'course_student_id' => $courseStudent->id,
            'name_on_certificate' => $name,
            'status' => 'pending',
        ]); 
    }


    /**
     * Mengecek apakah sertifikat sudah ada untuk user dan course tertentu.
     * Jika sudah ada, return path/file sertifikat. Jika belum, return null.
     */
    public function checkOrRedirectCertificate(User $user, Course $course)
    {
        $courseStudent = CourseStudent::where('user_id', $user->id)
            ->where('course_id', $course->id)
            ->first();
            
        if (!$courseStudent) {
            return redirect()->route('course.details', ['course' => $course->slug]);
        }
        $certificate = $this->certificateRepository->getCertificate($courseStudent->id);
        
        if ($certificate) {
            return redirect()->away(asset('storage/' . $certificate->path));
        }
        // Jika belum ada, return null (bisa juga redirect ke pembuatan sertifikat di controller)
        return Inertia::render('Course/Sertifikat', [
            'course' => $course
        ]);
    }

    public function generateCertificate($data)
    {
        // Logic to generate a certificate based on the provided data
        // This could involve creating a PDF file and returning its path or URL
    }
}