<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Log;


class CertificateMail extends Mailable
{
    use Queueable, SerializesModels;

    public $certificate;

    /**
     * Create a new message instance.
     */
    public function __construct($certificate)
    {
        Log::info('[CertificateMail] Konstruktor dipanggil', ['certificate_id' => $certificate->id ?? null, 'path' => $certificate->path ?? null]);
        $this->certificate = $certificate;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        Log::info('[CertificateMail] envelope() dipanggil');
        return new Envelope(
            subject: 'Certificate Mail',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        Log::info('[CertificateMail] content() dipanggil', ['certificate_id' => $this->certificate->id ?? null]);
        return new Content(
            view: 'certificates.emails', // Ganti dengan nama view yang benar
            with: [
                'certificate' => $this->certificate,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        Log::info('[CertificateMail] attachments() dipanggil', ['path' => $this->certificate->path ?? null]);
        $fullPath = public_path('storage/' . $this->certificate->path);
        if (!empty($this->certificate->path) && file_exists($fullPath)) {
            Log::info('[CertificateMail] Attachment ditemukan dan akan dilampirkan', ['full_path' => $fullPath]);
            return [
                Attachment::fromPath($fullPath)
                    ->as('certificate.pdf')
                    ->withMime('application/pdf'),
            ];
        }
        Log::warning('[CertificateMail] Attachment tidak ditemukan atau path kosong', ['checked_path' => $fullPath]);
        return [];
    }
}
