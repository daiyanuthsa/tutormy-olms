<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Log;
use Symfony\Component\HttpFoundation\Response;

class VerifyDokuSignature
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Boleh dilewati kalau bukan endpoint Doku
        if ($request->path() !== 'booking/payment/doku/notification') {
            return $next($request);
        }

        $clientId = $request->header('Client-Id');
        $requestId = $request->header('Request-Id');
        $requestTimestamp = $request->header('request-timestamp');
        $signatureHeader = $request->header('Signature');

        if (!$clientId || !$requestId || !$requestTimestamp || !$signatureHeader) {
            return response()->json(['error' => 'Missing DOKU Signature Headers'], 400);
        }

        // Tentukan path API DOKU yang memanggil endpoint ini
        $requestTarget = '/booking/payment/doku/notification'; // HARDCODE karena ini untuk notifikasi

        // Ambil body request mentah
        $bodyRaw = $request->getContent();

        // Hitung digest jika POST
        $digest = '';
        if (strtoupper($request->getMethod()) === 'POST') {
            $digest = base64_encode(hash('sha256', $bodyRaw, true));
        }

        // Gabungkan komponen-komponen signature
        $signatureComponents = [
            'Client-Id:' . trim($clientId),
            'Request-Id:' . trim($requestId),
            'Request-Timestamp:' . trim($requestTimestamp),
            'Request-Target:' . trim($requestTarget),
        ];
        if ($digest) {
            $signatureComponents[] = 'Digest:' . trim($digest);
        }


        $signatureRaw = implode("\n", $signatureComponents);

        // Hitung Signature lokal
        $secretKey = config('doku.secret_key'); // Simpan secret key di .env
        $hmac = base64_encode(hash_hmac('sha256', $signatureRaw, $secretKey, true));
        $expectedSignature = "HMACSHA256={$hmac}";

        // Bandingkan dengan Signature dari header
        if ($signatureHeader !== $expectedSignature) {
            return response()->json([
                'error' => 'Invalid DOKU Signature',
                'expected' => $expectedSignature,
                'given' => $signatureHeader,
            ], 403);
        }

        return $next($request);
    }
}
