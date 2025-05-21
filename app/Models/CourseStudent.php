<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CourseStudent extends Model
{
    //
    use SoftDeletes;
    protected $table = "course_students";
    protected $fillable = [
        'course_id',
        'user_id',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'is_active'=> 'boolean',
        ];
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function course()
    {
        return $this->belongsTo(Course::class);
    }
    public function sertificate()
    {
        return $this->hasOne(CourseCertificate::class, 'course_student_id', 'id');
    }
}
