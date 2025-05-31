<?php

namespace App\Http\Controllers;

use App\Models\Pricing;
use App\Models\Testimonial;
use App\Services\PricingService;
use App\Services\TransactionService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontController extends Controller
{
    //
    protected $pricingService;
    protected $transactionService;

    public function __construct(
        PricingService $pricingService,
        TransactionService $transactionService // Replace with the correct type if available, e.g., TransactionService $transactionService
    )
    {
        $this->pricingService = $pricingService;
        $this->transactionService = $transactionService;
    }
    public function index()
    {
        $pricing = $this->pricingService->getAllpricing(3);
        $testimonials = Testimonial::all();
        return Inertia::render('Welcome', compact('pricing', 'testimonials'));
    }

    public function checkout(Pricing $pricing){

        $checkout=$this->transactionService->prepareCheckout($pricing);
        if ($checkout['alreadySubscribed']) {
            return redirect()->route('course.index')->with('error', 'You already subscribed to this package');
        }
       
        return Inertia::render('Transaction/Checkout', compact(
            'pricing',
            'checkout'
        ));
    }
}
