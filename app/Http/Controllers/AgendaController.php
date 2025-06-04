<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Services\AgendaService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgendaController extends Controller
{
    //
    protected $agendaService;
    public function __construct(AgendaService $agendaService)
    {
        $this->agendaService = $agendaService;
    }
    public function index()
    {
        $agendas = $this->agendaService->getAllAgenda();

        return Inertia::render('Webminar/Index', compact('agendas'));
    }

    public function showPastAgenda(Agenda $agenda)
    {
        $agendaDetail = $this->agendaService->getPastAgendaDetail($agenda);
        if (empty($agendaDetail)) {
            return redirect()->route('agenda.index')->with('error', 'Agenda tidak memiliki rekaman');
        }
        return Inertia::render('Webminar/Recording', compact('agendaDetail'));
    }
    public function showUpcomingAgenda(Agenda $agenda)
    {
        $agendaDetail = $this->agendaService->getUpcomingAgendaDetail($agenda);
        return Inertia::render('Webminar/Upcoming', compact('agendaDetail'));
    }

}
