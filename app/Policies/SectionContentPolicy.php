<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\SectionContent;
use App\Models\User;

class SectionContentPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->checkPermissionTo('view-any SectionContent');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, SectionContent $sectioncontent): bool
    {
        return $user->checkPermissionTo('view SectionContent');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->checkPermissionTo('create SectionContent');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, SectionContent $sectioncontent): bool
    {
        return $user->checkPermissionTo('update SectionContent');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, SectionContent $sectioncontent): bool
    {
        return $user->checkPermissionTo('delete SectionContent');
    }

    /**
     * Determine whether the user can delete any models.
     */
    public function deleteAny(User $user): bool
    {
        return $user->checkPermissionTo('delete-any SectionContent');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, SectionContent $sectioncontent): bool
    {
        return $user->checkPermissionTo('restore SectionContent');
    }

    /**
     * Determine whether the user can restore any models.
     */
    public function restoreAny(User $user): bool
    {
        return $user->checkPermissionTo('restore-any SectionContent');
    }

    /**
     * Determine whether the user can replicate the model.
     */
    public function replicate(User $user, SectionContent $sectioncontent): bool
    {
        return $user->checkPermissionTo('replicate SectionContent');
    }

    /**
     * Determine whether the user can reorder the models.
     */
    public function reorder(User $user): bool
    {
        return $user->checkPermissionTo('reorder SectionContent');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, SectionContent $sectioncontent): bool
    {
        return $user->checkPermissionTo('force-delete SectionContent');
    }

    /**
     * Determine whether the user can permanently delete any models.
     */
    public function forceDeleteAny(User $user): bool
    {
        return $user->checkPermissionTo('force-delete-any SectionContent');
    }
}
