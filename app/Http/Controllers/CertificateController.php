<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Services\CertificateService;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class CertificateController extends Controller
{
    //
    protected $certificateService;
    public function __construct(CertificateService $certificateService)
    {
        $this->certificateService = $certificateService;
        // You can add middleware or other initializations here if needed
    }
    public function show(Course $course)
    {
        $user = Auth::user();

        return $this->certificateService->checkOrRedirectCertificate($user, $course);
    }
    public function store(Request $request, Course $course)
    {
        $validated = $request->validate([
            'name_on_certificate' => 'required|string|max:255',
        ]);
        Log::info('Certificate request validation passed: ' . $validated['name_on_certificate']);
        $this->certificateService->createPendingCertificate(
            auth()->user(),
            $course,
            $validated['name_on_certificate']
        );
        Log::info('Certificate request created for user: ' . $course->id . ' with name: ' . $validated['name_on_certificate']);

        return Inertia::location(route('dashboard'));
    }
}
