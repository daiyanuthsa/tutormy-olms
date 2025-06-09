<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\DocumentVersion;
use App\Models\User;

class DocumentVersionPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->checkPermissionTo('view-any DocumentVersion');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, DocumentVersion $documentversion): bool
    {
        return $user->checkPermissionTo('view DocumentVersion');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->checkPermissionTo('create DocumentVersion');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, DocumentVersion $documentversion): bool
    {
        return $user->checkPermissionTo('update DocumentVersion');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, DocumentVersion $documentversion): bool
    {
        return $user->checkPermissionTo('delete DocumentVersion');
    }

    /**
     * Determine whether the user can delete any models.
     */
    public function deleteAny(User $user): bool
    {
        return $user->checkPermissionTo('delete-any DocumentVersion');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, DocumentVersion $documentversion): bool
    {
        return $user->checkPermissionTo('restore DocumentVersion');
    }

    /**
     * Determine whether the user can restore any models.
     */
    public function restoreAny(User $user): bool
    {
        return $user->checkPermissionTo('restore-any DocumentVersion');
    }

    /**
     * Determine whether the user can replicate the model.
     */
    public function replicate(User $user, DocumentVersion $documentversion): bool
    {
        return $user->checkPermissionTo('replicate DocumentVersion');
    }

    /**
     * Determine whether the user can reorder the models.
     */
    public function reorder(User $user): bool
    {
        return $user->checkPermissionTo('reorder DocumentVersion');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, DocumentVersion $documentversion): bool
    {
        return $user->checkPermissionTo('force-delete DocumentVersion');
    }

    /**
     * Determine whether the user can permanently delete any models.
     */
    public function forceDeleteAny(User $user): bool
    {
        return $user->checkPermissionTo('force-delete-any DocumentVersion');
    }
}
