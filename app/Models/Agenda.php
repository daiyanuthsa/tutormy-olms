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
        'event_datetime',
        'duration_minutes',
        'registration_link',
        'registration_deadline',
        'participant_quota',
        'recording_url',
        'is_active',
    ];

    protected $casts = [
        'event_datetime' => 'datetime',
        'registration_deadline'=> 'datetime',
        'duration_minutes' => 'integer',
        'participant_quota' => 'integer',
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
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}