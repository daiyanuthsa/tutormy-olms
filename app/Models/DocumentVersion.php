<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DocumentVersion extends Model
{
    //

    protected $table = "document_versions";
    protected $fillable = [
        'document_id',
        'version_number',
        'title',
        'created_by',
        'created_at',
    ];
}
