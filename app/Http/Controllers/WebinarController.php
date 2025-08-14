<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Repositories\AgendaRepository;
use App\Services\AgendaService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebinarController extends Controller
{
    //
    protected $agendaService;
    protected $agendaRepository;
    public function __construct(AgendaService $agendaService, AgendaRepository $agendaRepository)
    {
        $this->agendaService = $agendaService;
        $this->agendaRepository = $agendaRepository;
    }
    public function index()
    {
        $webinars = $this->agendaService->getAllAgenda();
        $categories = $this->agendaRepository->getAgendaCategory();
        
        return Inertia::render('Webinar/Index', compact('webinars', 'categories'));
    }
    public function search(Request $request)
    {
        $keyword = $request->input('keyword');

        $webinars = $this->agendaRepository->getByKeyword($keyword);

        return Inertia::render('Webinar/SearchResults', compact('webinars', 'keyword'));
    }

    public function showPastAgenda(Agenda $agenda)
    {
        $webinarDetail = $this->agendaService->getPastAgendaDetail($agenda);
    ;
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
