<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CourseMentor extends Model
{
    
    protected $table = "course_mentors";
    protected $fillable = [
        'course_id',
        'user_id',
        'is_active',
        'about',
    ];
    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }
    public function courses(): HasMany
    {
        return $this->hasMany(Course::class, 'id', 'course_id');
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
        
}
