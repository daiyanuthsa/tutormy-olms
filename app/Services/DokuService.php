<?php


namespace App\Services;
use App\Models\User;
use Config;
use Log;

class DokuService
{
    protected $clientId;
    protected $secretKey;
    protected $apiUrl;

    public function __construct()
    {
        // Initialize any required properties or dependencies here
        $this->clientId = config('doku.merchant_id');
        $this->secretKey = config('doku.secret_key');
        $this->apiUrl = config('doku.api_url');

    }

    protected function generateDokuSignature(array $params): array
    {
        // Ambil parameter dari array
        $requestId = $params['requestId'] ?? uniqid();  // Optional
        $timestamp = $params['timestamp'] ?? gmdate("Y-m-d\TH:i:s\Z"); // Optional
        $body = $params ?? null;           // Optional (null untuk GET request)

        // Generate Digest jika ada body (POST/PUT)
        $digest = '';
        if (!is_null($body)) {
            $jsonBody = json_encode($body);
            $digest = base64_encode(hash('sha256', $jsonBody, true));
        }

        // Susun komponen signature
        $signatureComponents = [
            "Client-Id:$this->clientId",
            "Request-Id:$requestId",
            "Request-Timestamp:$timestamp",
            "Request-Target:/checkout/v1/payment",
        ];

        if ($digest !== '') {
            $signatureComponents[] = "Digest:$digest";
        }

        $signatureString = implode("\n", $signatureComponents);

        // Generate HMAC SHA256 signature
        $hmacSignature = base64_encode(hash_hmac('sha256', $signatureString, $this->secretKey, true));
        $finalSignature = "HMACSHA256=" . $hmacSignature;

        // Kembalikan header dan body JSON (jika ada)
        return [
            'headers' => [
                "Content-Type: application/json",
                "Client-Id: $this->clientId",
                "Request-Id: $requestId",
                "Request-Timestamp: $timestamp",
                "Signature: $finalSignature",
            ],
            'body' => $jsonBody ?? null
        ];
    }


    public function createPaymentLink($param)
    {
        $signatureData = $this->generateDokuSignature($param);
        log::info('DOKU Signature Data:', [
            'headers' => $signatureData['headers'],

        ]);
        log::info('DOKU Signature Body:', [
            'body' => $signatureData['body'],
        ]);

        // Kirim menggunakan cURL
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->apiUrl);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $signatureData['body']); // Kirim JSON string
        curl_setopt($ch, CURLOPT_HTTPHEADER, $signatureData['headers']);

        $response = curl_exec($ch);
        log::info('DOKU Response:', [
            'response' => $ch
        ]);
        log::info('DOKU Response:', [
            'response' => $response
        ]);
        if (curl_errno($ch)) {
            throw new \Exception('cURL error: ' . curl_error($ch));
        }

        curl_close($ch);


        // return json_decode($response, true);
        $result = json_decode($response, true);

        // Extract url jika ada
        $url = $result['response']['payment']['url'] ?? null;
        return $url;
    }

    public function handleNotification($request)
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
        // Extract invoice number and status from payload
        // TODO: Customize this based on your actual payload structure
        $invoice = $payload['order']['invoice_number'];
        $status = $payload['transaction']['status'] ?? 'UNKNOWN';

        // Call internal services
        $transaction = $this->transactionService->findByInvoice($invoice);

        if (!$transaction) {
            return [
                'message' => 'Transaction not found',
                'status' => 404
            ];
        }

        // Update payment status
        $this->paymentService->updatePaymentStatus($invoice, $status);

        return [
            'message' => 'Notification processed successfully',
            'status' => 200
        ];
    }
}
?>