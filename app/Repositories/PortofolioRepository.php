<?php

namespace App\Repositories;

use App\Models\Portofolio;

// You might want to import your model here, e.g.:
// use App\Models\Portofolio;

class PortofolioRepository implements PortofolioRepositoryInterface
{
    /**
     * Menemukan satu portofolio berdasarkan user_id.
     * Dibutuhkan untuk menghapus thumbnail lama sebelum mengunggah yang baru.
     *
     * @param int $userId
     * @return \App\Models\Portofolio|null
     */
    public function getbyUserId($userId)
    {
        // Assuming you have a Portofolio model
        return Portofolio::where('user_id', $userId)->first();
    }

    /**
     * Mencari atau memperbarui portofolio berdasarkan atribut yang diberikan.
     *
     * @param array $attributes Kondisi untuk mencari (misal: ['user_id' => 1])
     * @param array $values Data untuk diupdate atau dibuat (misal: ['name' => 'Project Baru'])
     * @return \App\Models\Portofolio
     */
    public function updateOrCreate(array $attributes, array $values)
    {
        // Method ini meneruskan panggilan langsung ke method static updateOrCreate di model Eloquent.
        return Portofolio::updateOrCreate($attributes, $values);
    }
}