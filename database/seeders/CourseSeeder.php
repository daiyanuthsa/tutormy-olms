<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Course::create([
            'name' => 'Laravel for Beginners',
            'about' => 'Learn the basics of Laravel, a powerful PHP framework.',
            'slug'=> 'laravel-for-beginners',
            'thumbnail'=> 'https://images.unsplash.com/photo-1743419672503-3e363bcd3634?&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'is_popular' => true,
            'category_id' => 1,
        ]);
        Course::create([
            'name' => 'Advanced Laravel Techniques',
            'about' => 'Dive deeper into Laravel with advanced techniques and best practices.',
            'slug'=> 'advanced-laravel-techniques',
            'thumbnail'=> 'https://images.unsplash.com/photo-1743419672503-3e363bcd3634?&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'is_popular' => false,
            'category_id' => 1,
        ]);

        Course::create([
            'name' => 'Introduction to PHP',
            'about' => 'Get started with PHP, the language behind many web applications.',
            'slug'=> 'introduction-to-php',
            'thumbnail'=> 'https://images.unsplash.com/photo-1743419672503-3e363bcd3634?&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'is_popular' => true,
            'category_id' => 2,
        ]);
        
    }
}
