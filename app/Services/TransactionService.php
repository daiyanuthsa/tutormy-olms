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
}
?>