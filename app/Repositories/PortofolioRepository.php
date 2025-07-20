<?php

namespace App\Repositories;

use App\Models\Portofolio;

// You might want to import your model here, e.g.:
// use App\Models\Portofolio;

class PortofolioRepository implements PortofolioRepositoryInterface
{
    public function getbyUserId($userId)
    {
        // Assuming you have a Portofolio model
        return Portofolio::where('user_id', $userId)->get();
    }
    public function create(array $data)
    {
        // Assuming you have a Portofolio model
        return Portofolio::create($data);
    }
    public function update($id, array $data)
    {
        // Assuming you have a Portofolio model
        $portofolio = Portofolio::find($id);
        if ($portofolio) {
            $portofolio->update($data);
            return $portofolio;
        }
        return null;
    }
}