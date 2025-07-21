<?php

namespace App\Repositories;

interface PortofolioRepositoryInterface
{
    // Define your interface methods here
    public function getbyUserId($userId);
    public function updateOrCreate(array $attributes, array $values);

}