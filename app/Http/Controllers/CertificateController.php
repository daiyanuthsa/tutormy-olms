<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificateController extends Controller
{
    //
    public function show(Course $course){
        return Inertia::render('Course/Sertifikat', [
            'course' => $course
        ]);
    }
    public function store(Request $request, Course $course){
        // Logic to store the certificate data
        // This could involve generating a PDF or saving certificate details in the database
        // For now, we will just return a success message
        
    }
}
