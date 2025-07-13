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
        'send_at',
        'status',
        'name_on_certificate',
    ];

    protected function casts(): array
    {
        return [
            'send_at' => 'datetime',
        ];
    }

    public function courseStudent()
    {
        return $this->belongsTo(CourseStudent::class, 'course_student_id');
    }
}

