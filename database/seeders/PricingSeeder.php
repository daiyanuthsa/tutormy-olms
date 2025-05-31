<?php

namespace Database\Seeders;

use App\Models\Pricing;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PricingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Pricing::create([
            'name' => 'Basic Plan',
            'description'=> 'This is a basic plan for users to subscribe to.',
            'price' => 10000,
            'duration' => 1, // Duration in Moths
            'normal_price' => 10000, // Normal price for comparison
        ]);
        Pricing::create([
            'name' => 'Profesional Plan',
            'description' => 'This is a basic plan for users to subscribe to.',
            'price' => 20000,
            'duration' => 3, // Duration in Moths
            'normal_price' => 30000, // Normal price for comparison
        ]);
        Pricing::create([
            'name' => 'Basic Plan',
            'description' => 'This is a basic plan for users to subscribe to.',
            'price' => 90000,
            'duration' => 12, // Duration in Moths
            'normal_price' => 120000, // Normal price for comparison
        ]);
    }
}
