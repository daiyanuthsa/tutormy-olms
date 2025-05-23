<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseCertificate extends Model
{
    //
    protected $table = "course_certificates";
    protected $fillable = [
        'course_student_id',
        'path',
    ];
    public function Coursestudent()
    {
        return $this->belongsTo(CourseStudent::class, 'course_student_id');
    }
}

