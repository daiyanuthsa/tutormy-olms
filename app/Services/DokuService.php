<?php 


namespace App\Services;
use App\Models\User;
use Config;

class DokuService
{
    protected $clientId;
    protected $secretKey;
    protected $apiUrl;

    protected function __construct()
    {
        // Initialize any required properties or dependencies here
        $this->clientId = config('doku.merchant_id');
        $this->secretKey = config('doku.secret_key');
        $this->apiUrl = config('doku.api_url');

    }

    protected function generateDokuSignature(array $params): array
    {
        // Ambil parameter dari array
        $requestId      = $params['requestId'] ?? uniqid();  // Optional
        $timestamp      = $params['timestamp'] ?? gmdate("Y-m-d\TH:i:s\Z"); // Optional
        $body           = $params['body'] ?? null;           // Optional (null untuk GET request)

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
        "Request-Target:$this->apiUrl",
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

        // Kirim menggunakan cURL
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->apiUrl );
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $signatureData['body']);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $signatureData['headers']);

        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            throw new \Exception('cURL error: ' . curl_error($ch));
        }

        curl_close($ch);

        return json_decode($response, true);
    }
}
?>