<?php

namespace App\Http\Controllers;

use App\Models\Pricing;
use App\Models\Testimonial;
use App\Repositories\CourseRepository;
use App\Services\CourseService;
use App\Services\PricingService;
use App\Services\TransactionService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class FrontController extends Controller
{
    //
    protected $pricingService;
    protected $transactionService;
    protected $paymentService;
    protected $courseRepository;

    public function __construct(
        PricingService $pricingService,
        TransactionService $transactionService, // Replace with the correct type if available, e.g., TransactionService $transactionService
        \App\Services\PaymentService $paymentService,
        CourseRepository $courseRepository // Assuming you have a CourseService for handling courses
    )
    {
        $this->pricingService = $pricingService;
        $this->transactionService = $transactionService;
        $this->paymentService = $paymentService;
        $this->courseRepository = $courseRepository;
    }
    public function index()
    {
        $pricing = $this->pricingService->getAllpricing(3);
        $testimonials = Testimonial::all();
        $courses = $this->courseRepository->getCourseThumbnail(3);
        return Inertia::render('Welcome', compact('pricing', 'testimonials','courses'));
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

    public function pricing(Request $request)
    {
        $pricings = $this->pricingService->getAllpricing(3);
       
        return Inertia::render('Transaction/Pricing', compact('pricings'));
    }

    public function paymentStore()
    {
        $response = null;

        try {
            $pricingId = session()->get('pricing_id');
            Log::Info('Pricing ID from session: ' . $pricingId);
            if (!$pricingId) {
                $response = response()->json(['error' => 'Pricing ID not found in session'], 400);
            } else {
                $paymentLink = $this->paymentService->createPayment($pricingId);
                Log::Info('Payment link created successfully: ' . (isset($paymentLink['url']) ? $paymentLink['url'] : 'N/A'));
                if (!$paymentLink || !isset($paymentLink['url'])) {
                    $response = response()->json(['error' => 'Payment link creation failed'], 500);
                } else {
                    $response = response()->json(['url' => $paymentLink['url']], 200);
                }
            }
        } catch (\Exception $e) {
            $response = response()->json(['error' => 'Failed to create payment link'], 500);
        }

        return $response;
    }
}
