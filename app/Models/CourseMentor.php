<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseMentor extends Model
{
    
    protected $table = "course_mentors";
    protected $fillable = [
        'course_id',
        'mentor_id',
        'is_active',
        'about',
    ];
    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }
}
