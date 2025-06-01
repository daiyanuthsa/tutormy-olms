<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Testimonial>
 */
class TestimonialFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'ocupation'=> $this->faker->jobTitle(),
            'rating' => $this->faker->numberBetween(1, 5),
            'image_url' => $this->faker->imageUrl(640, 480, 'people', true),
            'content'   => $this->faker->paragraph(1),
        ];
    }
}
