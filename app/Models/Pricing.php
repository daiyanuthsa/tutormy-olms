<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pricing extends Model
{
    //
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
