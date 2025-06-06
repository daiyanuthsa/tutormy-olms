<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function show(Document $document)
    {
        $document->load('activeVersion');
        return Inertia::render('Document/Show', compact('document'));
    }
}
