<?php

namespace App\Observers;

use App\Models\Transaction;

class TransactionObserver
{
    /**
     * Handle the Transaction "created" event.
     */
    // public function creating(Transaction $transaction): void
    // {
    //     $prefix = 'TUTORMY';
    //     $datePart = now()->format('Ymd'); // Format: YYYYMMDD, contoh: 20240531
    //     $baseIdForToday = $prefix . $datePart; // Contoh: OBITOBWA20240531

    //     $newTrxId = '';
    //     $maxAttempts = 10; // Batas percobaan untuk menghindari loop tak terbatas
    //     $attempt = 0;

    //     do {
    //         $attempt++;
    //         if ($attempt > $maxAttempts) {
    //             // Ini adalah failsafe jika ada masalah serius dalam logika atau konkurensi tinggi
    //             throw new \Exception("Gagal membuat booking_trx_id unik setelah {$maxAttempts} percobaan untuk basis {$baseIdForToday}.");
    //         }

    //         // 1. Cari transaksi terakhir hari ini dengan prefix yang sama untuk menentukan nomor urut berikutnya
    //         $latestTransactionToday = Transaction::where('booking_trx_id', 'LIKE', $baseIdForToday . '%')
    //             ->orderBy('booking_trx_id', 'desc') // Urutkan descending untuk mendapatkan yang terbaru/terbesar
    //             ->first();

    //         $sequence = 1; // Default nomor urut jika belum ada transaksi hari ini
    //         if ($latestTransactionToday) {
    //             // Ekstrak nomor urut dari booking_trx_id terakhir
    //             // Contoh: OBITOBWA202405310001 -> ambil "0001"
    //             $lastSequenceStr = substr($latestTransactionToday->booking_trx_id, strlen($baseIdForToday));
    //             if (is_numeric($lastSequenceStr)) {
    //                 $sequence = (int) $lastSequenceStr + 1;
    //             }
    //             // Jika $lastSequenceStr tidak numerik (misal data korup), akan kembali ke sequence = 1,
    //             // dan loop do-while akan memastikan keunikan.
    //         }

    //         // 2. Format nomor urut menjadi 4 digit dengan padding nol di depan (misal: 0001, 0012, 0123, 1234)
    //         $formattedSequence = str_pad($sequence, 4, '0', STR_PAD_LEFT);

    //         // 3. Gabungkan menjadi ID baru
    //         $newTrxId = $baseIdForToday . $formattedSequence;

    //         // 4. Pastikan ID yang baru benar-benar unik di database.
    //         // Loop akan berlanjut jika ID sudah ada (kemungkinan sangat kecil jika logika sequence benar).
    //     } while (Transaction::where('booking_trx_id', $newTrxId)->exists());

    //     $transaction->booking_trx_id=$newTrxId;
    // }

    /**
     * Handle the Transaction "updated" event.
     */
    public function updated(Transaction $transaction): void
    {
        //
    }

    /**
     * Handle the Transaction "deleted" event.
     */
    public function deleted(Transaction $transaction): void
    {
        //
    }

    /**
     * Handle the Transaction "restored" event.
     */
    public function restored(Transaction $transaction): void
    {
        //
    }

    /**
     * Handle the Transaction "force deleted" event.
     */
    public function forceDeleted(Transaction $transaction): void
    {
        //
    }
}
