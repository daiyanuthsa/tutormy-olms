<?php

namespace App\Repositories;


use App\Repositories\PricingRepositoryInterface;
use Illuminate\Support\Collection;
use App\Models\Pricing;

class PricingRepository implements PricingRepositoryInterface
{
	/**
	 * {@inheritDoc}
	 */
    public function getAllPricing(): Collection
    {
        return Pricing::all();
    }


    public function getPricingById(int $id): Pricing
	{
		return Pricing::findOrFail($id);
	}
	public function getPricingByName($name): Pricing
	{
		if (!$name) {
			throw new \InvalidArgumentException('Name is required');
		}
		return Pricing::whereRaw('LOWER(name) = ?', [strtolower($name)])->firstOrFail();
	}
}