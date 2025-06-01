<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Category;
use App\Models\Testimonial;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            PricingSeeder::class,
        ]);

        // Buat 5 kategori
        Category::factory(5)->create();

        // Ambil semua id kategori yang sudah dibuat
        $categoryIds = Category::pluck('id')->toArray();

        // Buat 20 artikel, setiap artikel dapat category_id acak dari kategori yang ada
        Article::factory(20)->make()->each(function ($article) use ($categoryIds) {
            $article->category_id = fake()->randomElement($categoryIds);
            $article->save();
        });

        Testimonial::factory(10)->create();
        $this->call([
            CourseSeeder::class,

        ]);

    }
}
