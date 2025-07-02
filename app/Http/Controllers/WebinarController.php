<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Services\AgendaService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebinarController extends Controller
{
    //
    protected $agendaService;
    public function __construct(AgendaService $agendaService)
    {
        $this->agendaService = $agendaService;
    }
    public function index()
    {
        $webinars = $this->agendaService->getAllAgenda();

        return Inertia::render('Webinar/Indaex', compact('webinars'));
    }

    public function showPastAgenda(Agenda $agenda)
    {
        $webinarDetail = $this->agendaService->getPastAgendaDetail($agenda);
        if (empty($webinarDetail)) {
            return redirect()->route('webinar.index')->with('error', 'Agenda tidak memiliki rekaman');
        }
        return Inertia::render('Webinar/Recording', compact('webinarDetail'));
    }
    public function showUpcomingAgenda(Agenda $agenda)
    {
        $webinarDetail = $this->agendaService->getUpcomingAgendaDetail($agenda);
        return Inertia::render('Webinar/Upcoming', compact('webinarDetail'));
    }

}
