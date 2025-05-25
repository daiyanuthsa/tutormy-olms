<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\Portofolio;
use App\Models\User;

class PortofolioPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->checkPermissionTo('view-any Portofolio');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Portofolio $portofolio): bool
    {
        return $user->checkPermissionTo('view Portofolio');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->checkPermissionTo('create Portofolio');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Portofolio $portofolio): bool
    {
        return $user->checkPermissionTo('update Portofolio');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Portofolio $portofolio): bool
    {
        return $user->checkPermissionTo('delete Portofolio');
    }

    /**
     * Determine whether the user can delete any models.
     */
    public function deleteAny(User $user): bool
    {
        return $user->checkPermissionTo('delete-any Portofolio');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Portofolio $portofolio): bool
    {
        return $user->checkPermissionTo('restore Portofolio');
    }

    /**
     * Determine whether the user can restore any models.
     */
    public function restoreAny(User $user): bool
    {
        return $user->checkPermissionTo('restore-any Portofolio');
    }

    /**
     * Determine whether the user can replicate the model.
     */
    public function replicate(User $user, Portofolio $portofolio): bool
    {
        return $user->checkPermissionTo('replicate Portofolio');
    }

    /**
     * Determine whether the user can reorder the models.
     */
    public function reorder(User $user): bool
    {
        return $user->checkPermissionTo('reorder Portofolio');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Portofolio $portofolio): bool
    {
        return $user->checkPermissionTo('force-delete Portofolio');
    }

    /**
     * Determine whether the user can permanently delete any models.
     */
    public function forceDeleteAny(User $user): bool
    {
        return $user->checkPermissionTo('force-delete-any Portofolio');
    }
}
