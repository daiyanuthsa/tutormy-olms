<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\CourseSection;
use App\Models\User;

class CourseSectionPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->checkPermissionTo('view-any CourseSection');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, CourseSection $coursesection): bool
    {
        return $user->checkPermissionTo('view CourseSection');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->checkPermissionTo('create CourseSection');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, CourseSection $coursesection): bool
    {
        return $user->checkPermissionTo('update CourseSection');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, CourseSection $coursesection): bool
    {
        return $user->checkPermissionTo('delete CourseSection');
    }

    /**
     * Determine whether the user can delete any models.
     */
    public function deleteAny(User $user): bool
    {
        return $user->checkPermissionTo('delete-any CourseSection');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, CourseSection $coursesection): bool
    {
        return $user->checkPermissionTo('restore CourseSection');
    }

    /**
     * Determine whether the user can restore any models.
     */
    public function restoreAny(User $user): bool
    {
        return $user->checkPermissionTo('restore-any CourseSection');
    }

    /**
     * Determine whether the user can replicate the model.
     */
    public function replicate(User $user, CourseSection $coursesection): bool
    {
        return $user->checkPermissionTo('replicate CourseSection');
    }

    /**
     * Determine whether the user can reorder the models.
     */
    public function reorder(User $user): bool
    {
        return $user->checkPermissionTo('reorder CourseSection');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, CourseSection $coursesection): bool
    {
        return $user->checkPermissionTo('force-delete CourseSection');
    }

    /**
     * Determine whether the user can permanently delete any models.
     */
    public function forceDeleteAny(User $user): bool
    {
        return $user->checkPermissionTo('force-delete-any CourseSection');
    }
}
