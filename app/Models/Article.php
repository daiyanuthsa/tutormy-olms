<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Str;

class Article extends Model
{
    //
    protected $fillable = [
        'name',
        'slug',
        'content',
        'thumbnail',
        'user_id',
        'category_id',
        'is_published',
    ];
    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
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

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
