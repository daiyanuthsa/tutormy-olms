<?php

namespace App\Observers;

use App\Models\DocumentVersion;
use Auth;

class DocumentVersionObserver
{
    /**
     * Handle the DocumentVersion "creating" event.
     */
    public function creating(DocumentVersion $documentVersion): void
    {
        // Set created_by_user_id jika belum diisi
        if (empty($documentVersion->created_by_user_id) && Auth::check()) {
            $documentVersion->created_by_user_id = Auth::id();
        }
    }
    /**
     * Handle the DocumentVersion "created" event.
     */
    public function created(DocumentVersion $documentVersion): void
    {
        //
        
    }

    /**
     * Handle the DocumentVersion "updating" event.
     */
    public function updating(DocumentVersion $documentVersion): void
    {
        // Jika is_published berubah menjadi true, set published_by_user_id
        if ($documentVersion->isDirty('is_published') && $documentVersion->is_published && Auth::check()) {
            $documentVersion->published_by_user_id = Auth::id();
        }
    }

    /**
     * Handle the DocumentVersion "updated" event.
     */
    public function updated(DocumentVersion $documentVersion): void
    {
         // Jika versi ini dipublish, unpublish versi lain dengan kombinasi yang sama
         if ($documentVersion->is_published) {
            DocumentVersion::where('document_id', $documentVersion->document_id)
                ->where('language_code', $documentVersion->language_code)
                ->where('id', '!=', $documentVersion->id)
                ->where('is_published', true)
                ->update(['is_published' => false]);
        }
    }
    

    /**
     * Handle the DocumentVersion "deleted" event.
     */
    public function deleted(DocumentVersion $documentVersion): void
    {
        //
    }

    /**
     * Handle the DocumentVersion "restored" event.
     */
    public function restored(DocumentVersion $documentVersion): void
    {
        //
    }

    /**
     * Handle the DocumentVersion "force deleted" event.
     */
    public function forceDeleted(DocumentVersion $documentVersion): void
    {
        //
    }
}
