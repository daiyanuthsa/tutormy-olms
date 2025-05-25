<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\CourseStudent;
use App\Models\User;

class CourseStudentPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->checkPermissionTo('view-any CourseStudent');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, CourseStudent $coursestudent): bool
    {
        return $user->checkPermissionTo('view CourseStudent');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->checkPermissionTo('create CourseStudent');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, CourseStudent $coursestudent): bool
    {
        return $user->checkPermissionTo('update CourseStudent');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, CourseStudent $coursestudent): bool
    {
        return $user->checkPermissionTo('delete CourseStudent');
    }

    /**
     * Determine whether the user can delete any models.
     */
    public function deleteAny(User $user): bool
    {
        return $user->checkPermissionTo('delete-any CourseStudent');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, CourseStudent $coursestudent): bool
    {
        return $user->checkPermissionTo('restore CourseStudent');
    }

    /**
     * Determine whether the user can restore any models.
     */
    public function restoreAny(User $user): bool
    {
        return $user->checkPermissionTo('restore-any CourseStudent');
    }

    /**
     * Determine whether the user can replicate the model.
     */
    public function replicate(User $user, CourseStudent $coursestudent): bool
    {
        return $user->checkPermissionTo('replicate CourseStudent');
    }

    /**
     * Determine whether the user can reorder the models.
     */
    public function reorder(User $user): bool
    {
        return $user->checkPermissionTo('reorder CourseStudent');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, CourseStudent $coursestudent): bool
    {
        return $user->checkPermissionTo('force-delete CourseStudent');
    }

    /**
     * Determine whether the user can permanently delete any models.
     */
    public function forceDeleteAny(User $user): bool
    {
        return $user->checkPermissionTo('force-delete-any CourseStudent');
    }
}
