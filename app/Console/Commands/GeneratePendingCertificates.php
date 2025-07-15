<?php

namespace App\Console\Commands;

use App;
use Illuminate\Console\Command;
use App\Jobs\GenerateCertificateJob;

class GeneratePendingCertificates extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:certificates';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate certificates for users with pending requests';

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Menjalankan generate sertifikat...');

        // Jalankan job GenerateCertificateJob
        App::make(GenerateCertificateJob::class)->handle();

        $this->info('Selesai memproses sertifikat.');
    }
}
