<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CourseBenefit extends Model
{
    //
    use SoftDeletes;
    protected $table = "course_benefits";
    protected $fillable = [
        'course_id',
        'name',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
