<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Testimonial extends Model
{
    //
    use SoftDeletes, HasFactory;

    protected $table = "testimonials";
    protected $fillable = [
        'name',
        'ocupation',
        'rating',
        'image_url',
        'content',
    ];
}
