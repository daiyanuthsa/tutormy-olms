<?php


namespace App\Repositories;

use App\Models\Course;

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
            ->orWhere('description', 'like', "%{$keyword}%")
            ->latest()
            ->get();
    }
}