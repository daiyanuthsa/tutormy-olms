<?php

namespace App\Repositories;

use Illuminate\Support\Collection;



interface CourseRepositoryInterface
{
    public function getAllByCategory();
    public function getByKeyword($keyword);

    public function getFullCourseContent(int $courseId) ;

    public function getCourseForPublicView(int $courseId);
    
}