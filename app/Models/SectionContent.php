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
        'duration',
        'free_access',
        'position',
        'course_section_id',
        'duration',
    ];

    protected function casts(): array
    {
        return [
            'free_access' => 'boolean',
            'duration' => 'integer',
        ];
    }
    public function section()
    {
        return $this->belongsTo(CourseSection::class, 'course_section_id');
    }

}
