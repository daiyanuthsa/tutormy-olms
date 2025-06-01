<?php

namespace App\Services;

use App\Repositories\PricingRepositoryInterface;

class PricingService
{
    protected $pricingRepository;

    public function __construct(PricingRepositoryInterface $pricingRepository)
    {
        $this->pricingRepository = $pricingRepository;
    }

    public function getAllpricing($limit = null)
    {
        $allPricing = $this->pricingRepository->getAllPricing();

        // Ambil sejumlah data teratas jika $limit diisi
        if ($limit !== null) {
            return $allPricing->take($limit);
        }

        return $allPricing;
    }

    
}

?>