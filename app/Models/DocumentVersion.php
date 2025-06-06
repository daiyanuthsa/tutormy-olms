<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DocumentVersion extends Model
{
    //
    use SoftDeletes;
    protected $table = "document_versions";
    protected $fillable = [
        'document_id',
        'version_number',
        'title',
        'content',
        'language_code',
        'effective_date',
        'is_published',
        'is_active',
        'published_by_user_id',
        'created_by_user_id',
    ];

    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
            'is_active' => 'boolean',
            'effective_date' => 'datetime',
        ];
    }

    public function document()
    {
        return $this->belongsTo(Document::class, 'document_id');
    }

    public function publishBy()
    {
        return $this->belongsTo(User::class, 'published_by_user_id');
    }
    public function createBy()
    {
        return $this->belongsTo(User::class, 'created_by_user_id');
    }


}
