<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    //
    protected $fillable = [
        'booking_trx_id',
        'user_id',
        'pricing_id',
        'status',
        'sub_total_amount',
        'total_tax_amount',
        'grand_total_amount',
        'uniq_code',
        'is_paid',
        'proof',
        'started_at',
        'ended_at',
    ];

    protected function casts(): array
    {
        return [
            'is_paid' => 'boolean',
            
        ];
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function pricing(){
        return $this->belongsTo(Pricing::class);
    }
}
