<?php

namespace Database\Seeders;

use Artisan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Memberi tahu konsol apa yang sedang terjadi, ini praktik yang baik
        $this->command->info('Starting permissions synchronization from policies...');

        // Memanggil command artisan
        Artisan::call('permissions:sync', [
            '--policies' => true
        ]);

        // Memberi tahu konsol bahwa proses sudah selesai
        $this->command->info('Permissions synchronized successfully.');

        // Anda bisa melanjutkan dengan membuat role dan menetapkan permission di sini
        // Contoh:
        // $adminRole = Role::create(['name' => 'admin']);
        // $adminRole->givePermissionTo(Permission::all());
        // Ambil role mentor yang sudah ada
        $mentorRole = Role::where('name', 'mentor')->first();

        if ($mentorRole) {
            // Ambil semua permission yang terkait dengan course dan coursementor
            $permissions = Permission::where(function($query) {
                $query->where('name', 'like', '%Course%')
                      ->orWhere('name', 'like', '%CourseMentor%');
            })->get();

            // Assign permissions ke role mentor
            $mentorRole->givePermissionTo($permissions);

            $this->command->info('Course and courseMentor permissions assigned to mentor role.');
        } else {
            $this->command->error('Mentor role not found.');
        }
    }
}
