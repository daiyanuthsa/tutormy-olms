<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Str;

class Course extends Model
{
    //
    use SoftDeletes;
    protected $fillable = [
        'name',
        'slug',
        'about',
        'group_url',
        'thumbnail',
        'category_id',
        'is_popular',
    ];

    protected function casts(): array
    {
        return [
            'is_popular' => 'boolean',
        ];
    }
    protected function name(): Attribute
    {
        return Attribute::make(
            set: fn(string $value) => [
                'name' => $value,
                'slug' => Str::slug($value),
            ],
        );
    }
    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }
    public function benefits()
    {
        return $this->hasMany(CourseBenefit::class);
    }
    public function sections()
    {
        return $this->hasMany(CourseSection::class, 'course_id');
    }
    public function courseStudents() : HasMany
    {
        return $this->hasMany(CourseStudent::class, 'course_id');
    }
}
