<?php

namespace App\Repositories;

use App\Models\CourseCertificate;

// You might want to import your model here, e.g.:
// use App\Models\Certificate;

class CertificateRepository implements CertificateRepositoryInterface
{

    public function create(array $data)
    {
        return CourseCertificate::create($data);
    }

}