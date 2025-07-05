<?php 
namespace App\Services;

use App\Models\Pricing;
use App\Repositories\TransactionRepositoryInterface;
use Auth;

class TransactionService
{
    protected $transactionRepository;

    public function __construct(TransactionRepositoryInterface $transactionRepository)
    {
        $this->transactionRepository = $transactionRepository;
    }

    public function prepareCheckout(Pricing $pricing)
    {
        $user = Auth::user();
        $alreadySubscribed = $pricing->isSubscribedByUser($user->id);

        $tax = 0.12;
        $total_tax_amount = $pricing->price * $tax;
        $total_sub_amount = $pricing->price;
        $total_grand_amount = $total_sub_amount + $total_tax_amount;

        $started_at = now();
        $ended_at = now()->addMonths($pricing->duration);

        session()->put("pricing_id", $pricing->id);

        return compact(
            'pricing',
            'user',
            'alreadySubscribed',
            'total_sub_amount',
            'total_tax_amount',
            'total_grand_amount',
            'started_at',
            'ended_at'
        );
    }

    public function createTransaction($payload, Pricing $pricing)
    {
        $transactionData = [
            'user_id' => $payload['customer']['id'],
            'pricing_id' => $pricing->id,
            'sub_total_amount' => $pricing->price,
            'total_tax_amount' => $pricing->price * 0.12,
            'grand_total_amount' => $payload['order']['amount'],
            'payment_type' => 'Doku',
            'uniq_code' => 11111, // Assuming uniq_code is not provided in the payload
            'is_paid' => false,
            'status' => 'PENDING',
            'booking_trx_id' => $payload['order']['invoice_number'],
            'started_at' => null,
            'ended_at' => null,
        ];
        return $this->transactionRepository->createTransaction($transactionData);
    }

   
}
?>