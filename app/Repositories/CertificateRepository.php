<?php

namespace App\Repositories;

use App\Models\CourseCertificate;

// You might want to import your model here, e.g.:
// use App\Models\Certificate;

class CertificateRepository implements CertificateRepositoryInterface
{

    public function create(array $data)
    {
        // Cek apakah course_student_id sudah ada
        if (isset($data['course_student_id'])) {
            $exists = CourseCertificate::where('course_student_id', $data['course_student_id'])->exists();
            if ($exists) {
                // Bisa lempar exception, return null, atau custom response
                // Di sini kita lempar exception
                throw new \Exception('Certificate for this course_student_id already exists.');
            }
        }
        return CourseCertificate::create($data);
    }

    public function getPending()
    {
        return CourseCertificate::where('status', 'pending')->get();
    }
    public function getCertificate($courseStudentId): CourseCertificate|null
    {
        return CourseCertificate::where('course_student_id', $courseStudentId)->first();
    }


}