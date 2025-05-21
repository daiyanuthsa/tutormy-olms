<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    //
    protected $fillable = [
        'title',
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
    
}
