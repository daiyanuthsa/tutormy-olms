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
        $course1 = Course::create([
            'name' => 'Laravel for Beginners',
            'about' => 'Learn the basics of Laravel, a powerful PHP framework.',
            'slug'=> 'laravel-for-beginners',
            'group_url'=> 'https://tutormy.id/group/laravel-for-beginners',
            'thumbnail'=> 'https://images.unsplash.com/photo-1743419672503-3e363bcd3634?&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'is_popular' => true,
            'category_id' => 1,
        ]);
        $section1 = $course1->sections()->create([
            'name' => 'Getting Started',
            'position' => 1,
        ]);
        $section1->contents()->createMany([
            [
                'name' => 'Introduction',
                'content' => 'Welcome to Laravel!',
                'free_access' => true,
                'position' => 1,
            ],
            [
                'name' => 'Installation',
                'content' => 'How to install Laravel.',
                'free_access' => false,
                'position' => 2,
            ],
        ]);
        $section2 = $course1->sections()->create([
            'name' => 'Routing and Controllers',
            'position' => 2,
        ]);
        $section2->contents()->createMany([
            [
                'name' => 'Routing Basics',
                'content' => 'Learn about routing in Laravel.',
                'free_access' => false,
                'position' => 1,
            ],
            [
                'name' => 'Controllers',
                'content' => 'How to create and use controllers.',
                'free_access' => false,
                'position' => 2,
            ],
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
