<?php


namespace App\Repositories;

use App\Models\Course;
use App\Models\CourseStudent;
use App\Models\SectionContent;
use Carbon\Carbon;
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
    public function getCourseThumbnail(int $limit = null): Collection
    {
        return Course::with(['sections.contents'])
            ->select('id', 'name', 'thumbnail', 'slug')
            ->when($limit, fn($query) => $query->limit($limit))
            ->get()
            ->map(function ($course) {
                // Hitung total konten dari semua section
                $contentCount = $course->sections->pluck('contents')->flatten()->count();

                return [
                    'name' => $course->name,
                    'thumbnail' => $course->thumbnail,
                    'section_content_count' => $contentCount,
                    'slug' => $course->slug,
                    'id' => $course->id,
                ];
            });
    }

    public function getUserCourseProgress($userId)
    {
        return CourseStudent::with([
            'course',
            'certificate',
            'course.sections.contents',
        ])
            ->where('user_id', $userId)
            ->get()
            ->map(function ($courseStudent) {
                $totalContents = $courseStudent->course->sections->flatMap->contents->count();
                $currentPosition = $this->getCurrentProgress($courseStudent);

                $progress = $totalContents > 0 ? round(($currentPosition / $totalContents) * 100) : 0;

                // Determine status & button
                $certificate = $courseStudent->certificate;
                $isFinished = $progress >= 100;

                $status = match (true) {
                    !$certificate => 'ongoing',
                    filled($certificate->path) => 'completed',
                    default => 'ongoing',
                };                

                return [
                    'course_id' => $courseStudent->course_id,
                    'title' => $courseStudent->course->name,
                    'lessons' => $totalContents,
                    'image' => $courseStudent->course->thumbnail,
                    'progress' => $progress,
                    'status' => $status,
                    'is_finished' => $isFinished,
                    'next_course_path' => route('courses.learning', [
                        'course' => $courseStudent->course->slug,
                        'courseSection' => $courseStudent->course_section_id,
                        'sectionContent' => $courseStudent->section_content_id,
                    ]),
                    'certificate_path' => $certificate?->path,
                ];
            });
            
    }

    protected function getCurrentProgress($courseStudent)
    {
        $courseId = $courseStudent->course_id;
        $currentContentId = $courseStudent->section_content_id;

        // Ambil semua konten dari course ini secara berurutan (berdasarkan section dan urutan content)
        $allContents = SectionContent::whereHas('section', function ($query) use ($courseId) {
            $query->where('course_id', $courseId);
        })
            ->with('section')
            // ->orderBy('section.position') // pastikan section punya kolom order
            ->orderBy('position')         // pastikan section_content juga punya kolom order
            ->get();
        // Hitung total konten
        $total = $allContents->count();

        // Cari posisi konten yang terakhir diselesaikan user
        $currentIndex = $allContents->pluck('id')->search($currentContentId);

        // Jika tidak ditemukan (belum ada progres), set ke 0
        $completed = $currentIndex !== false ? $currentIndex + 1 : 0;

        return $completed;
    }
}