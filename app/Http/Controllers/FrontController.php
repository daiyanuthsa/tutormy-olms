<?php

namespace App\Http\Controllers;

use App\Models\Pricing;
use App\Models\Testimonial;
use App\Services\PricingService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontController extends Controller
{
    //
    protected $pricingService;

    public function __construct(
        PricingService $pricingService,
    )
    {
        $this->pricingService = $pricingService;
    }
    public function index()
    {
        $pricing = $this->pricingService->getAllpricing(3);
        $testimonials = Testimonial::all();
        return Inertia::render('Welcome', compact('pricing', 'testimonials'));
    }

    public function checkout(Pricing $pricing){

        return $pricing;
    }
}
