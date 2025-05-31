<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Str;

class Agenda extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'name',
        'slug',
        'thumbnail',
        'description',
        'start_date',
        'content',
        'is_active',
    ];

    protected $casts = [
        'start_date' => 'datetime',
        'is_active' => 'boolean',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
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
}
