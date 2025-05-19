<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pricing extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'name',
        'duration',
        'price',
        'normal_price',
        
    ];
    protected $casts = [
        'features' => 'array',
    ];
    /**
     * Get the route key for the model.
     */
}
