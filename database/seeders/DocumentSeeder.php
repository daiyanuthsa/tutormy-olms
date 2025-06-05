<?php

namespace Database\Seeders;

use Carbon\Carbon;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Str;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // Hapus data lama jika ada (opsional, hati-hati di production)
        // DB::table('document_versions')->delete();
        // DB::table('documents')->delete();

        // Asumsi ada user dengan ID 1 untuk created_by_user_id dan published_by_user_id
        // Sesuaikan jika user ID Anda berbeda atau jika Anda ingin membuatnya lebih dinamis
        $userId = 1; 
        // Cek apakah user dengan ID 1 ada, jika tidak, buat user dummy atau lempar error.
        // Untuk seeder sederhana, kita asumsikan ada.
        // if (!DB::table('users')->where('id', $userId)->exists()) {
        //     // Opsi 1: Buat user dummy jika tidak ada
        //     $userId = DB::table('users')->insertGetId([
        //         'name' => 'Admin Seeder',
        //         'email' => 'admin_seeder@example.com',
        //         'password' => bcrypt('password'), // Ganti dengan password yang aman
        //         'created_at' => now(),
        //         'updated_at' => now(),
        //     ]);
        //     // Opsi 2: atau throw new \Exception("User with ID 1 not found. Please create one or adjust the seeder.");
        // }


        // 1. Privacy Policy
        $privacyPolicyId = DB::table('documents')->insertGetId([
            'name' => 'Privacy Policy',
            'slug' => 'privacy-policy',
            'description' => 'This document outlines how we collect, use, and protect your personal information.',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('document_versions')->insert([
            [
                'document_id' => $privacyPolicyId,
                'version_number' => 'PP-v1.0-' . Str::random(5), // Menambahkan random string untuk keunikan
                'title' => 'Privacy Policy - Effective January 2024',
                'content' => '<p>Welcome to our Privacy Policy (Version 1.0). This version details our initial data handling practices...</p><h3>Information We Collect</h3><p>...</p>',
                'language_code' => 'id',
                'effective_date' => Carbon::create(2024, 1, 15),
                'is_published' => true,
                'is_active' => false, // Versi lama, tidak aktif
                'published_by_user_id' => $userId,
                'created_by_user_id' => $userId,
                'created_at' => Carbon::create(2024, 1, 10),
                'updated_at' => Carbon::create(2024, 1, 10),
                'deleted_at' => null,
            ],
            [
                'document_id' => $privacyPolicyId,
                'version_number' => 'PP-v1.1-' . Str::random(5), // Menambahkan random string untuk keunikan
                'title' => 'Privacy Policy - Effective June 2024',
                'content' => '<p>This is an updated Privacy Policy (Version 1.1), reflecting changes in data processing and user rights...</p><h3>Key Updates</h3><p>...</p>',
                'language_code' => 'id',
                'effective_date' => Carbon::create(2024, 6, 1),
                'is_published' => true,
                'is_active' => true, // Versi aktif saat ini
                'published_by_user_id' => $userId,
                'created_by_user_id' => $userId,
                'created_at' => Carbon::create(2024, 5, 20),
                'updated_at' => Carbon::create(2024, 5, 25),
                'deleted_at' => null,
            ],
        ]);

        // 2. Terms of Service
        $termsOfServiceId = DB::table('documents')->insertGetId([
            'name' => 'Terms of Service',
            'slug' => 'terms-of-service',
            'description' => 'These are the terms and conditions for using our service.',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('document_versions')->insert([
            [
                'document_id' => $termsOfServiceId,
                'version_number' => 'ToS-v1.0-' . Str::random(5), // Menambahkan random string untuk keunikan
                'title' => 'Terms of Service - March 2024',
                'content' => '<h1>Terms of Service (v1.0)</h1><p>By using our service, you agree to these terms...</p>',
                'language_code' => 'id',
                'effective_date' => Carbon::create(2024, 3, 1),
                'is_published' => true,
                'is_active' => true, // Versi aktif saat ini
                'published_by_user_id' => $userId,
                'created_by_user_id' => $userId,
                'created_at' => Carbon::create(2024, 2, 20),
                'updated_at' => Carbon::create(2024, 2, 20),
                'deleted_at' => null,
            ],
            [
                'document_id' => $termsOfServiceId,
                'version_number' => 'ToS-v0.9-draft-' . Str::random(5), // Menambahkan random string untuk keunikan
                'title' => 'Terms of Service - Draft January 2024',
                'content' => '<h1>Draft Terms of Service (v0.9)</h1><p>This is a draft version and not yet effective...</p>',
                'language_code' => 'id',
                'effective_date' => null, // Draft, belum ada tanggal efektif
                'is_published' => false, // Draft, belum dipublikasikan
                'is_active' => false,
                'published_by_user_id' => null, // Draft, belum dipublikasikan oleh siapa pun
                'created_by_user_id' => $userId,
                'created_at' => Carbon::create(2024, 1, 15),
                'updated_at' => Carbon::create(2024, 1, 15),
                'deleted_at' => null,
            ]
        ]);

        // 3. Cookie Policy (Contoh lain dengan satu versi saja)
        $cookiePolicyId = DB::table('documents')->insertGetId([
            'name' => 'Cookie Policy',
            'slug' => 'cookie-policy',
            'description' => 'Information about how we use cookies on our website.',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('document_versions')->insert([
            [
                'document_id' => $cookiePolicyId,
                'version_number' => 'CP-v1.0-' . Str::random(5), // Menambahkan random string untuk keunikan
                'title' => 'Cookie Policy - January 2024',
                'content' => '<h2>Cookie Policy (v1.0)</h2><p>We use cookies to enhance your browsing experience...</p>',
                'language_code' => 'en', // Contoh dengan bahasa Inggris
                'effective_date' => Carbon::create(2024, 1, 20),
                'is_published' => true,
                'is_active' => true,
                'published_by_user_id' => $userId,
                'created_by_user_id' => $userId,
                'created_at' => Carbon::create(2024, 1, 18),
                'updated_at' => Carbon::create(2024, 1, 18),
                'deleted_at' => null,
            ],
        ]);

        $this->command->info('Legal documents and versions seeded successfully!');
    
    }
}
