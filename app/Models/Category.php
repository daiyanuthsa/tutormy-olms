<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Str;

class Category extends Model
{
    use SoftDeletes;
    //
    protected $fillable = [
        'name',
        'slug',
    ];
    
    /**
     * Get the route key for the model.
     */
    protected function name(): Attribute
    {
        return Attribute::make(
            set: fn(string $value) => [
                'name' => $value,
                'slug' => Str::slug($value),
            ],
        );
    }

    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}
