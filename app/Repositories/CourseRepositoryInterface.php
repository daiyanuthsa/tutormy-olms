<?php

namespace App\Repositories;

interface CourseRepositoryInterface
{
    public function getAllByCategory();
    public function getByKeyword($keyword);
}