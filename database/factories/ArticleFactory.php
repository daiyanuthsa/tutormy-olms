<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence;

        return [
            'name' => $title,
            'slug' => Str::slug($title), // unik
            'user_id' => 1,                      // buat user baru
            'category_id' => Category::factory(),              // buat kategori baru
            'content' => $this->faker->paragraphs(5, true),
            'thumbnail' => 'post/thumbnail/01JY4DSHPBSP5WPB36AFZ36Z95.jpg',
            'is_published' => true,       // 80% published
        ];
    }
}
