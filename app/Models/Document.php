<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Str;

class Document extends Model
{
    //
    protected $fillable = [
        'slug',
        'name',
        'description',
    ];
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
