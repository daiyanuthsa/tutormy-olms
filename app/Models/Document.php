<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
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
    public function versions(): HasMany
    {
        return $this->hasMany(DocumentVersion::class, 'document_id');
    }
    public function activeVersion(): HasOne
    {
        return $this->hasOne(DocumentVersion::class, 'document_id')
        ->where('is_active', true)
        ->where('is_published', true)
        ->orderBy('effective_date', 'desc')
        ->limit(1);
    }
    
}
