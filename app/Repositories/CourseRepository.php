<?php


namespace App\Repositories;

use App\Models\Course;
use Illuminate\Support\Collection;

class CourseRepository implements CourseRepositoryInterface
{
    public function getAllByCategory()
    {
        // TODO: Implement logic to get all courses by category
        return Course::with('category')
            ->latest()
            ->get();
    }

    public function getByKeyword($keyword)
    {
        // TODO: Implement logic to get courses by keyword
        return Course::where('name', 'like', "%{$keyword}%")
            ->orWhere('about', 'like', "%{$keyword}%")
            ->latest()
            ->get();
    }

    /**
     * Mengambil struktur lengkap sebuah kursus, termasuk semua seksi dan semua konten di dalamnya.
     * Data diurutkan berdasarkan kolom 'position'.
     *
     * @param int $id ID dari kursus yang akan diambil.
     */
    public function getFullCourseContent(int $id): ?Course
    {
        // Menggunakan eager loading untuk menghindari N+1 query problem.
        // Query berdasarkan primary key (id) untuk performa lebih cepat.
        return Course::where('id', $id) // Diubah dari 'slug' menjadi 'id'
            ->with([
                'category',
                'benefits',
                'sections' => function ($query) {
                    $query->orderBy('position', 'asc');
                },
                'sections.contents' => function ($query) {
                    // 'position' ada di tabel section_contents sesuai skema Anda
                    $query->orderBy('position', 'asc');
                }
            ])
            ->first();
    }

    /**
     * Mengambil struktur kursus untuk tampilan publik.
     * Isi konten yang tidak gratis akan di-set menjadi null.
     *
     * @param int $id ID dari kursus yang akan diambil.
     */
    public function getCourseForPublicView(int $id): ?Course
    {
        // 1. Ambil seluruh data kursus terlebih dahulu menggunakan fungsi yang sudah ada.
        $course = $this->getFullCourseContent($id);

        // Jika kursus tidak ditemukan, kembalikan null.
        if (!$course) {
            return null;
        }

        // 2. Lakukan transformasi pada data yang sudah di-load.
        // Kita tidak bisa melakukan ini di level query karena kita tetap ingin menampilkan
        // judul konten yang tidak gratis, hanya menyembunyikan isinya.
        $course->sections->each(function ($section) {
            $section->contents->each(function ($content) {
                // Periksa kolom 'free_acsess' (sesuai penamaan di skema Anda)
                if (!$content->free_acsess) {
                    // Jika tidak gratis, kosongkan field 'content'.
                    $content->content = null;
                }
            });
        });

        return $course;
    }
}