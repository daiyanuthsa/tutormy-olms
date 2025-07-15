<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Sertifikat Kelas Anda</title>
    <style>
        body {
            font-family: sans-serif;
            background-color: #f6f6f6;
            color: #333;
            padding: 20px;
        }

        .container {
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .button {
            display: inline-block;
            background-color: #1d72b8;
            color: #ffffff;
            font-weight: bold;
            padding: 10px 20px;
            margin-top: 20px;
            text-decoration: none;
            border-radius: 6px;
        }
        .button:hover {
            background-color: #0168a9;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>Halo {{ $certificate->courseStudent->user->name ?? 'Peserta' }},</h2>

        <p>Selamat! Anda telah menyelesaikan kelas
            <strong>{{ $certificate->courseStudent->course->name ?? 'kelas' }}</strong>.</p>

        <p>Kami telah menyiapkan sertifikat digital Anda. Silakan klik tombol di bawah ini untuk melihat atau mengunduh
            sertifikat Anda:</p>

        @php
            $url = asset('storage/' . $certificate->path);
        @endphp

        <a href="{{ $url }}" class="button" target="_blank">Lihat Sertifikat</a>

        <p style="margin-top: 30px;">Terima kasih telah mengikuti kelas ini.</p>
        <p>Salam hangat, <br> Tim Kelas Online</p>
    </div>
</body>

</html>
