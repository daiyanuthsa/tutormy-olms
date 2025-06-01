<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\CourseBenefit;
use App\Models\User;

class CourseBenefitPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->checkPermissionTo('view-any CourseBenefit');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, CourseBenefit $coursebenefit): bool
    {
        return $user->checkPermissionTo('view CourseBenefit');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->checkPermissionTo('create CourseBenefit');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, CourseBenefit $coursebenefit): bool
    {
        return $user->checkPermissionTo('update CourseBenefit');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, CourseBenefit $coursebenefit): bool
    {
        return $user->checkPermissionTo('delete CourseBenefit');
    }

    /**
     * Determine whether the user can delete any models.
     */
    public function deleteAny(User $user): bool
    {
        return $user->checkPermissionTo('delete-any CourseBenefit');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, CourseBenefit $coursebenefit): bool
    {
        return $user->checkPermissionTo('restore CourseBenefit');
    }

    /**
     * Determine whether the user can restore any models.
     */
    public function restoreAny(User $user): bool
    {
        return $user->checkPermissionTo('restore-any CourseBenefit');
    }

    /**
     * Determine whether the user can replicate the model.
     */
    public function replicate(User $user, CourseBenefit $coursebenefit): bool
    {
        return $user->checkPermissionTo('replicate CourseBenefit');
    }

    /**
     * Determine whether the user can reorder the models.
     */
    public function reorder(User $user): bool
    {
        return $user->checkPermissionTo('reorder CourseBenefit');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, CourseBenefit $coursebenefit): bool
    {
        return $user->checkPermissionTo('force-delete CourseBenefit');
    }

    /**
     * Determine whether the user can permanently delete any models.
     */
    public function forceDeleteAny(User $user): bool
    {
        return $user->checkPermissionTo('force-delete-any CourseBenefit');
    }
}
