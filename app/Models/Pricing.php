<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
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
    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }
    public function isSubscribedByUser($userId)
    {
        return $this->transactions()
            ->where('user_id', $userId)
            ->where('is_paid', true) // Only consider paid subscriptions
            ->where('ended_at', '>=', now()) // Check if the subscription is still active
            ->exists();
    }
}
