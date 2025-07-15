<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Sertifikat</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            padding: 60px;
            background: #f8f9fa;
        }
        .certificate-box {
            border: 5px solid #343a40;
            padding: 40px;
            background: #fff;
            display: inline-block;
        }
        .certificate-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 30px;
        }
        .certificate-content {
            font-size: 1.2rem;
            margin-bottom: 40px;
        }
        .certificate-name {
            font-size: 2rem;
            font-weight: bold;
            margin: 20px 0;
        }
        .certificate-footer {
            margin-top: 40px;
            font-size: 1rem;
        }
    </style>
</head>
<body>
    <div class="certificate-box">
        <div class="certificate-title">SERTIFIKAT</div>
        <div class="certificate-content">
            Diberikan kepada:
            <div class="certificate-name">
                {{ $name ?? 'Nama Peserta' }}
            </div>
            Atas partisipasinya dalam kegiatan <b>Generate PDF Testing</b>
        </div>
        <div class="certificate-footer">
            {{ date('d F Y') }}<br>
            <i>Tutormy</i>
        </div>
    </div>
</body>
</html>