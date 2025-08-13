<?php

namespace App\Observers;

use App\Models\SectionContent;
use DateInterval;
use Exception;
use Google_Client;
use Google_Service_YouTube;
use Illuminate\Support\Facades\Cache;
use Log;

class SectionContentObserver
{

    /**
     * Handle the Video "saving" event.
     * Ini akan berjalan setiap kali record baru dibuat (creating) atau diupdate (updating).
     */
    public function saving(SectionContent $sectionContent): void
    {
        // Hanya jalankan jika URL YouTube baru atau berubah
        if ($sectionContent->isDirty('content')) {
            $videoId = $this->extractYouTubeId($sectionContent->content);
            Log::info('Extracted YouTube ID: ' . $videoId);
            if ($videoId) {
                try {
                    // Panggil method untuk mengambil durasi dari API
                    $durationInSeconds = $this->fetchYouTubeVideoDuration($videoId);
                    // Set nilai durasi pada model sebelum disimpan
                    $sectionContent->duration = $durationInSeconds;
                } catch (Exception $e) {
                    // Jika gagal, catat error dan set durasi ke null
                    Log::error('Gagal mengambil durasi YouTube: ' . $e->getMessage());
                    $sectionContent->duration = null;
                }
            } else {
                $sectionContent->duration = null; // Set null jika URL tidak valid
            }
        }
    }
    /**
     * Handle the SectionContent "saved" event.
     */
    public function saved(SectionContent $sectionContent)
    {
        Cache::forget('course_thumbnail_all');
        // Bisa juga hapus per-limit jika kamu simpan versi limit
    }

    /**
     * Handle the SectionContent "deleted" event.
     */
    public function deleted(SectionContent $sectionContent)
    {
        Cache::forget('course_thumbnail_all');
    }
    /**
     * Handle the SectionContent "created" event.
     */
    public function created(SectionContent $sectionContent): void
    {
        //
    }

    /**
     * Handle the SectionContent "updated" event.
     */
    public function updated(SectionContent $sectionContent): void
    {
        //
    }

    /**
     * Handle the SectionContent "restored" event.
     */
    public function restored(SectionContent $sectionContent): void
    {
        //
    }

    /**
     * Handle the SectionContent "force deleted" event.
     */
    public function forceDeleted(SectionContent $sectionContent): void
    {
        //
    }
    /**
     * Mengekstrak ID video dari berbagai format URL YouTube.
     */
    private function extractYouTubeId(string $url): ?string
    {
        $pattern = '/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/';
        preg_match($pattern, $url, $matches);
        return $matches[1] ?? null;
    }

    /**
     * Mengambil durasi video dari YouTube API dan mengubahnya ke detik.
     */
    private function fetchYouTubeVideoDuration(string $videoId): int
    {
        $client = new Google_Client();
        // Ambil API key dari file config/services.php
        $client->setDeveloperKey(config('services.youtube.api_key'));

        $youtube = new Google_Service_YouTube($client);

        $response = $youtube->videos->listVideos('contentDetails', [
            'id' => $videoId
        ]);

        if (empty($response->getItems())) {
            throw new Exception("Video dengan ID '$videoId' tidak ditemukan.");
        }

        // Ambil durasi dalam format ISO 8601 (contoh: "PT1M33S")
        $duration = $response->getItems()[0]->getContentDetails()->getDuration();

        // Konversi format ISO 8601 ke total detik
        $interval = new DateInterval($duration);
        return ($interval->h * 3600) + ($interval->i * 60) + ($interval->s);
    }
}
