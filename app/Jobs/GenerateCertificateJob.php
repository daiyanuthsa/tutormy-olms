<?php

namespace App\Jobs;

use App\Mail\CertificateMail;
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
                Log::info('[GenerateCertificateJob] Mulai proses sertifikat', ['certificate_id' => $certificate->id ?? null]);

                // generate PDF / sertifikat
                $filePath = $this->certificateService->generateCertificate($certificate);
                Log::info('[GenerateCertificateJob] Sertifikat berhasil digenerate', ['certificate_id' => $certificate->id ?? null, 'file_path' => $filePath]);

                // update database
                $certificate->update([
                    'path' => $filePath,
                    'status' => 'done',
                    'sent_at' => now(),
                ]);
                Log::info('[GenerateCertificateJob] Status sertifikat diupdate', ['certificate_id' => $certificate->id ?? null]);

                // kirim email
                $email = $certificate->courseStudent->user->email ?? null;
                Log::info('[GenerateCertificateJob] Mengirim email sertifikat', ['certificate_id' => $certificate->id ?? null, 'email' => $email]);
                Mail::to($email)->send(new CertificateMail($certificate));
                Log::info('[GenerateCertificateJob] Email sertifikat terkirim', ['certificate_id' => $certificate->id ?? null, 'email' => $email]);

            } catch (\Exception $e) {
                $certificate->update(['status' => 'failed']);
                Log::error("Gagal membuat sertifikat: " . $e->getMessage(), ['certificate_id' => $certificate->id ?? null]);
            }
        }
    }
}
