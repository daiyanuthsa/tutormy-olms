<?php

namespace App\Repositories;

use App\Models\Pricing;

interface PricingRepositoryInterface
{
    // Define your interface methods here
    public function getAllPricing();

    public function getPricingById(int $id): Pricing;
}