<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\Agenda;
use App\Models\User;

class AgendaPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->checkPermissionTo('view-any Agenda');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Agenda $agenda): bool
    {
        return $user->checkPermissionTo('view Agenda');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->checkPermissionTo('create Agenda');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Agenda $agenda): bool
    {
        return $user->checkPermissionTo('update Agenda');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Agenda $agenda): bool
    {
        return $user->checkPermissionTo('delete Agenda');
    }

    /**
     * Determine whether the user can delete any models.
     */
    public function deleteAny(User $user): bool
    {
        return $user->checkPermissionTo('delete-any Agenda');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Agenda $agenda): bool
    {
        return $user->checkPermissionTo('restore Agenda');
    }

    /**
     * Determine whether the user can restore any models.
     */
    public function restoreAny(User $user): bool
    {
        return $user->checkPermissionTo('restore-any Agenda');
    }

    /**
     * Determine whether the user can replicate the model.
     */
    public function replicate(User $user, Agenda $agenda): bool
    {
        return $user->checkPermissionTo('replicate Agenda');
    }

    /**
     * Determine whether the user can reorder the models.
     */
    public function reorder(User $user): bool
    {
        return $user->checkPermissionTo('reorder Agenda');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Agenda $agenda): bool
    {
        return $user->checkPermissionTo('force-delete Agenda');
    }

    /**
     * Determine whether the user can permanently delete any models.
     */
    public function forceDeleteAny(User $user): bool
    {
        return $user->checkPermissionTo('force-delete-any Agenda');
    }
}
