<?php

namespace Database\Seeders;

use App\Models\User;
use Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin =User::create([
            'name' => 'Admin User',
            'email' => 'admin@tutormy.com',
            'password' => Hash::make('password123'), // Password harus di-hash!
            'email_verified_at' => now(), // Opsional: Menandai email sudah diverifikasi
            // tambahkan field lain jika ada di tabel users Anda
        ]);
        $admin->assignRole('admin');

        $student = User::create([
            'name' => 'studnet',
            'email' => 'student@tutormy.com',
            'password' => Hash::make('password123'), // Password harus di-hash!
            'email_verified_at' => now(), // Opsional: Menandai email sudah diverifikasi
            // tambahkan field lain jika ada di tabel users Anda
        ]);
        $student->assignRole('student');
    }
}
