<?php

namespace App\Services;
use App\Models\Pricing;
use App\Models\Transaction;
use App\Repositories\PricingRepository;
use App\Repositories\TransactionRepository;
use Auth;
use Log;

class PaymentService
{
    protected $pricingRepository;
    protected $dokuService;
    protected $transactionRepository;
    protected $transactionService;

    public function __construct(
        PricingRepository $pricingRepository,
        DokuService $dokuService,
        TransactionService $transactionService,
        TransactionRepository $transactionRepository
    )
    {
        $this->pricingRepository = $pricingRepository;
        $this->dokuService = $dokuService;
        $this->transactionService = $transactionService;
        $this->transactionRepository = $transactionRepository;
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
                'callback_callback_url_cancel' => route('pricing'),
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
                    "VIRTUAL_ACCOUNT_BCA",
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


        
        try {
            $this->transactionService->createTransaction($params, $pricing);
        } catch (\Exception $e) {
            \Log::error('Failed to create transaction', [
            'error' => $e->getMessage(),
            'params' => $params,
            'pricing_id' => $pricingId,
            ]);
            return null;
        }
        return $this->dokuService->createPaymentLink($params);
    }

    public function handleNotification($request ): array
    {
        $headers = $request->headers->all();
        $bodyRaw = $request->getContent();
        $payload = json_decode($bodyRaw, true);

        Log::info('DOKU Notification Received:', [
            'headers' => $headers,
            'body' => $payload
        ]);

        if (!isset($payload['order']['invoice_number'])) {
            return [
                'message' => 'Invalid payload: missing invoice_number',
                'status' => 400
            ];
        }

        $invoice = $payload['order']['invoice_number'];
        $status = $payload['transaction']['status'] ?? 'UNKNOWN';

        $transaction = $this->transactionRepository->findByBookingId($invoice);

        if (!$transaction) {
            return [
                'message' => 'Transaction not found',
                'status' => 404
            ];
        }

        // Update payment status
        $this->updatePaymentStatus($transaction, $status);

        return [
            $transaction,
            $invoice,
            $status,
        ];
    }
    public function updatePaymentStatus(Transaction $transaction, string $status): void
    {
        // Update the transaction status based on the Doku notification
        $transaction->status = $status;
        $transaction->is_paid = ($status === 'SUCCESS');
        $transaction->save();

        // If the transaction is paid, update the started_at and ended_at dates
        if ($transaction->is_paid) {
            $transaction->started_at = now();
            $transaction->ended_at = now()->addMonths($transaction->pricing->duration);
            $transaction->save();
        }
         Log::info('Payment status updated', [
            'transaction_id' => $transaction->id,
            'status' => $status,
            'is_paid' => $transaction->is_paid,
            'started_at' => $transaction->started_at,
            'ended_at' => $transaction->ended_at
        ]);
    }
    
}
?>