<?php

namespace App\Repositories;

interface CertificateRepositoryInterface
{
    // Define your interface methods here
    // public function getAll();
    // public function findById($id);
    public function create(array $data);
    public function getPending();
    // public function update($id, array $data);
    // public function delete($id);
}