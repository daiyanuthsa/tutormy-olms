<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portofolio extends Model
{
    //
    protected $table = "portofolios";
    protected $fillable = [
        'user_id',
        'name',
        'thumbnail',
        'link',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
