# 📚 TutorMy - Laravel Online Course Platform

TutorMy adalah platform pembelajaran online berbasis Laravel yang memungkinkan pengguna untuk mengakses course, mengikuti video pembelajaran, serta mendapatkan sertifikat secara otomatis setelah menyelesaikan materi.

---

## 🚀 Fitur

-   🔐 Autentikasi (login & register)
-   👤 Manajemen User, Mentor & Role
-   🎓 Manajemen Course, Section & Konten Video
-   💳 Transaksi dengan sistem pembayaran
-   🧾 Sertifikat Digital Otomatis
-   📊 Dashboard Admin, Mentor, dan Siswa
-   📁 Upload Materi & Video
-   📱 API Ready (opsional)

---

## 🛠️ Teknologi yang Digunakan

-   Laravel 11+
-   PHP 8.2+
-   MySQL / MariaDB
-   Tailwind CSS / Bootstrap (opsional)
-   Filament (admin panel)
-   Laravel Sanctum / Passport (jika ada API)
-   App Service: Storage, Queue (opsional Redis)

---

## ⚙️ Cara Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/username/tutormy.git
cd tutormy
```

### 2. Install Dependency

```bash
composer install
npm install && npm run dev
```

### 3. Copy File .env

```bash
cp .env.example .env
```

### 4. Konfigurasi .env

### 5. Generate App Key

```bash
php artisan key:generate
```

### 6. Migrasi dan Seeder Database

```bash
php artisan migrate --seed
```

### 7. Buat Symbolic Link ke Storage

```bash
php artisan storage:link
```

## Folder Structure
```bash
app/
├── Models/                # Model Eloquent
├── Http/Controllers/      # Controller logic
├── Services/
├── Repositories/
database/
├── migrations/            # Struktur tabel
├── seeders/               # Dummy data
public/
├── storage/               # Symbolic link untuk akses file
resources/
├── js/                    # View in ReactJS
routes
├── web.php                # Web routes
├── api.php                # API routes

```
