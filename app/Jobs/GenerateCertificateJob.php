<?php

namespace App\Jobs;

use App\Repositories\CertificateRepository;
use App\Services\CertificateService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Log;
use Mail;

class GenerateCertificateJob implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    protected $certificateRepository;
    protected $certificateService;
    public function __construct(CertificateRepository $certificateRepository, CertificateService $certificateService)
    {
        $this->certificateService = $certificateService;
        $this->certificateRepository = $certificateRepository;
    
    }


    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $certificates = $this->certificateRepository->getPending();

        foreach ($certificates as $certificate) {
            try {
                // generate PDF / sertifikat
                $filePath = $this->certificateService->generateCertificate($certificate);

                // update database
                $certificate->update([
                    'file_path' => $filePath,
                    'status' => 'done',
                    'sent_at' => now(),
                ]);

                // kirim email
                Mail::to($certificate->user->email)->send(new CertificateMail($certificate));

            } catch (\Exception $e) {
                $certificate->update(['status' => 'failed']);
                Log::error("Gagal membuat sertifikat: " . $e->getMessage());
            }
        }
    }
}
