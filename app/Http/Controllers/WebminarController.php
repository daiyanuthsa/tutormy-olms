<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Services\AgendaService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebminarController extends Controller
{
    //
    protected $agendaService;
    public function __construct(AgendaService $agendaService)
    {
        $this->agendaService = $agendaService;
    }
    public function index()
    {
        $webminars = $this->agendaService->getAllAgenda();

        return Inertia::render('Webminar/Index', compact('webminars'));
    }

    public function showPastAgenda(Agenda $agenda)
    {
        $webminarDetail = $this->agendaService->getPastAgendaDetail($agenda);
        if (empty($webminarDetail)) {
            return redirect()->route('agenda.index')->with('error', 'Agenda tidak memiliki rekaman');
        }
        return Inertia::render('Webminar/Recording', compact('webminarDetail'));
    }
    public function showUpcomingAgenda(Agenda $agenda)
    {
        $webminarDetail = $this->agendaService->getUpcomingAgendaDetail($agenda);
        return Inertia::render('Webminar/Upcoming', compact('webminarDetail'));
    }

}
