<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseSection extends Model
{
    //
    protected $table = "course_sections";
    protected $fillable = [
        'name',
        'position',
        'course_id',
    ];
    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function contents()
    {
        return $this->hasMany(SectionContent::class, 'course_section_id');
    }
}
