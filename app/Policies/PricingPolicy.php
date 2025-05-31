<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\Pricing;
use App\Models\User;

class PricingPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->checkPermissionTo('view-any Pricing');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Pricing $pricing): bool
    {
        return $user->checkPermissionTo('view Pricing');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->checkPermissionTo('create Pricing');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Pricing $pricing): bool
    {
        return $user->checkPermissionTo('update Pricing');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Pricing $pricing): bool
    {
        return $user->checkPermissionTo('delete Pricing');
    }

    /**
     * Determine whether the user can delete any models.
     */
    public function deleteAny(User $user): bool
    {
        return $user->checkPermissionTo('delete-any Pricing');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Pricing $pricing): bool
    {
        return $user->checkPermissionTo('restore Pricing');
    }

    /**
     * Determine whether the user can restore any models.
     */
    public function restoreAny(User $user): bool
    {
        return $user->checkPermissionTo('restore-any Pricing');
    }

    /**
     * Determine whether the user can replicate the model.
     */
    public function replicate(User $user, Pricing $pricing): bool
    {
        return $user->checkPermissionTo('replicate Pricing');
    }

    /**
     * Determine whether the user can reorder the models.
     */
    public function reorder(User $user): bool
    {
        return $user->checkPermissionTo('reorder Pricing');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Pricing $pricing): bool
    {
        return $user->checkPermissionTo('force-delete Pricing');
    }

    /**
     * Determine whether the user can permanently delete any models.
     */
    public function forceDeleteAny(User $user): bool
    {
        return $user->checkPermissionTo('force-delete-any Pricing');
    }
}
