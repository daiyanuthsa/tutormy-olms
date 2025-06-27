<?php

namespace App\Services;
use App\Models\Pricing;
use App\Repositories\PricingRepository;
use Auth;

class PaymentService
{
    protected $pricingRepository;
    protected $dokuService;
    public function __construct(
        PricingRepository $pricingRepository,
        DokuService $dokuService)
    {
        $this->pricingRepository = $pricingRepository;
        $this->dokuService = $dokuService;
    }

    /**
     * Prepare the payment details for checkout.
     *
     * @param Pricing $pricing
     * @return array
     */
    public function createPayment($pricingId): ?string
    {
        $user = Auth::user();

        // Retrieve the pricing package by product ID

        $pricing = $this->pricingRepository->getPricingById($pricingId);

        $tax = 0.12;
        $totalTax = $pricing->price * $tax;
        $grandTotal = $pricing->price + $totalTax;


        $params = [
            'order' => [
                'amount' => (int) $grandTotal,
                "invoice_number" => 'TM-' . time() . '-' . $user->id,
                'currency' => 'IDR',
                'callback_url' => '',
                'callback_callback_url_cancel' => '',
                'callback_url_result' => route('payment.success'),
                'language' => 'ID',
                'auto_redirect' => true,
                "disable_retry_payment" => true,
                "recover_abandoned_cart" => true,
                "expired_recovered_cart" => 2,
                "line_items" => [
                    [
                        "id" => $pricing->id,
                        "name" => $pricing->name,
                        "quantity" => 1,
                        "price" => (int) $pricing->price,
                    ],
                    [
                        'id' => 'tax',
                        'price' => (int) $totalTax,
                        'quantity' => 1,
                        'name' => 'PPN 12%',
                    ],
                ]
            ],
            'payment'=> [
                'payment_due_date'=>60, // 60 minutes
                'payment_method_types'=>[
                    'VIRTUAL_ACCOUNT_BNI',
                    'VIRTUAL_ACCOUNT_BRI',
                    'VIRTUAL_ACCOUNT_MANDIRI',
                    'QRIS',
                ]
            ],
            'customer'=>[
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => '089998501293218', // Placeholder phone number
            ],
        ];
        return $this->dokuService->createPaymentLink($params);
        // $result = $this->dokuService->createPaymentLink($params);

        // // Ambil url dari response DOKU
        // return $result['response']['payment']['url'] ?? null;
    }
}
?>