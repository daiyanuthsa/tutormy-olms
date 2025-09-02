# 📚 TutorMy - Laravel Online Course Platform

TutorMy adalah platform pembelajaran online berbasis Laravel yang memungkinkan pengguna untuk mengakses course, mengikuti video pembelajaran, serta mendapatkan sertifikat secara otomatis setelah menyelesaikan materi.

---

## 🚀 Fitur

-   🔐 Autentikasi (login & register)
-   🔐 Google Auth
-   👤 Manajemen User, Mentor & Role
-   🎓 Manajemen Course, Section & Konten Video
-   💳 Transaksi dengan sistem pembayaran (DOKU)
-   🧾 Sertifikat Digital Otomatis
-   📊 Dashboard Admin, Mentor, dan Siswa
-   📁 Upload Materi & Video

---

## 🖼️ Sowcase

<img width="1600" height="900" alt="6 - Tutormy" src="https://github.com/user-attachments/assets/1b0068d5-ff46-4a77-a448-f5f6f48b3aac" />

<img width="1600" height="900" alt="7 - Tutormy" src="https://github.com/user-attachments/assets/8d782b07-f903-4f81-a26b-edfc276558e3" />


---

## 🛠️ Teknologi yang Digunakan

-   Laravel 12+
-   PHP 8.2+
-   MySQL / MariaDB
-   Inertia 2+
-   ReactJS
-   Tailwind CSS 
-   Filament (admin panel) 3+
-   Laravel Breeze
-   App Service: Storage
-   Service & Repository Pattern

---

## ⚙️ Cara Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/daiyanuthsa/tutormy-olms.git
cd tutormy-olms
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
├── Models/              # Model Eloquent, representasi tabel database
├── Http/Controllers/    # Menerima request dan memberikan response
├── Services/            # Menangani logika bisnis aplikasi
├── Repositories/        # Abstraksi query dan interaksi dengan database
database/
├── migrations/          # Struktur tabel database
├── seeders/             # Data awal atau dummy data untuk database
public/
├── storage/             # Symbolic link untuk akses file publik dari storage
resources/
├── js/                  # Komponen dan view dalam ReactJS
routes
├── web.php              # Rute untuk aplikasi web (stateful, sessions)

```
