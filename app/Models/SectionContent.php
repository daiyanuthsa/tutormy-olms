<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SectionContent extends Model
{
    //
    protected $table = "section_contents";
    protected $fillable = [
        'name',
        'content',
        'free_access',
        'position',
        'course_section_id',
    ];

    protected function casts(): array
    {
        return [
            'free_access' => 'boolean',
        ];
    }
    public function section()
    {
        return $this->belongsTo(CourseSection::class, 'course_section_id');
    }

}
