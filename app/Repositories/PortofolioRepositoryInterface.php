<?php

namespace App\Repositories;

interface PortofolioRepositoryInterface
{
    // Define your interface methods here
    public function getbyUserId($userId);

    public function create(array $data);
    public function update($id, array $data);
    // public function delete($id);
}