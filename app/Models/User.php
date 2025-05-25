<?php

namespace App\Models;


use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements FilamentUser, MustVerifyEmail
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'photo',
        'phone',
        'date_birth',
        'status',
        'instagram',
        'linkedin',
        'discovery_source',
        'about',
        'expectation',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'date_birth'=> 'date',
        ];
    }
    public function canAccessPanel(Panel $panel): bool
    {
        if ($panel->getId() === 'admin') {
            return !$this->hasRole('student');
        }

        return true;
    }
    public function portofolio()
    {
        return $this->hasOne(Portofolio::class);
    }
    public function hasPortofolio($user_id){
        return $this->portofolio()->where('user_id', $user_id)->exists();
    }
    public function courses()
    {
        return $this->hasMany(CourseStudent::class);
    }
    public function students()
    {
        return $this->hasMany(CourseStudent::class, 'student_id');
    }
    public function admin()
    {
        return $this->whereHas('roles', function ($query) {
            $query->where('name', 'admin');
        });
    }
}
