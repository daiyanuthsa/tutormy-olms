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
        'course_section_id',
        'section_content_id',
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
    /**
     * Mengambil data progres belajar user pada course tertentu.
     * Mengembalikan nilai course_section_id dan section_content_id.
     *
     * @param int $userId
     * @param int $courseId
     * @return array|null
     */
    public static function getProgressAttributes($userId, $courseId)
    {
        $courseStudent = self::where('user_id', $userId)
            ->where('course_id', $courseId)
            ->first();

        if ($courseStudent) {
            return [
                'course_section_id' => $courseStudent->course_section_id,
                'section_content_id' => $courseStudent->section_content_id,
            ];
        }

        return null;
    }
}
