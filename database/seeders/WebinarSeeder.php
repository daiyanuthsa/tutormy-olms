<?php

namespace Database\Seeders;

use App\Models\Agenda;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WebinarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Agenda::insert([
            [
                'name' => 'Webinar Laravel Dasar',
                'slug' => \Str::slug('Webinar Laravel Dasar'),
                'description' => 'Belajar dasar-dasar Laravel untuk pemula.',
                'event_datetime' => '2024-06-01 10:00:00',
                'duration_minutes' => 120,
                'location' => 'Online',
                'registration_link' => 'https://example.com/daftar-laravel',
                'registration_deadline' => '2024-05-30 23:59:59',
                'participant_quota' => 100,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Webinar PHP Modern',
                'slug' => \Str::slug('Webinar PHP Modern'),
                'description' => 'Mengenal fitur-fitur terbaru di PHP.',
                'event_datetime' => '2024-07-05 13:00:00',
                'duration_minutes' => 90,
                'location' => 'Jakarta',
                'registration_link' => 'https://example.com/daftar-php',
                'registration_deadline' => '2024-07-04 23:59:59',
                'participant_quota' => 80,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
