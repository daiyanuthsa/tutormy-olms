<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\CourseCertificate;
use App\Models\User;

class CourseCertificatePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->checkPermissionTo('view-any CourseCertificate');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, CourseCertificate $coursecertificate): bool
    {
        return $user->checkPermissionTo('view CourseCertificate');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->checkPermissionTo('create CourseCertificate');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, CourseCertificate $coursecertificate): bool
    {
        return $user->checkPermissionTo('update CourseCertificate');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, CourseCertificate $coursecertificate): bool
    {
        return $user->checkPermissionTo('delete CourseCertificate');
    }

    /**
     * Determine whether the user can delete any models.
     */
    public function deleteAny(User $user): bool
    {
        return $user->checkPermissionTo('delete-any CourseCertificate');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, CourseCertificate $coursecertificate): bool
    {
        return $user->checkPermissionTo('restore CourseCertificate');
    }

    /**
     * Determine whether the user can restore any models.
     */
    public function restoreAny(User $user): bool
    {
        return $user->checkPermissionTo('restore-any CourseCertificate');
    }

    /**
     * Determine whether the user can replicate the model.
     */
    public function replicate(User $user, CourseCertificate $coursecertificate): bool
    {
        return $user->checkPermissionTo('replicate CourseCertificate');
    }

    /**
     * Determine whether the user can reorder the models.
     */
    public function reorder(User $user): bool
    {
        return $user->checkPermissionTo('reorder CourseCertificate');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, CourseCertificate $coursecertificate): bool
    {
        return $user->checkPermissionTo('force-delete CourseCertificate');
    }

    /**
     * Determine whether the user can permanently delete any models.
     */
    public function forceDeleteAny(User $user): bool
    {
        return $user->checkPermissionTo('force-delete-any CourseCertificate');
    }
}
