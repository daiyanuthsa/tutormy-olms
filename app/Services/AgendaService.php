<?php
namespace App\Services;
use App\Models\Agenda;


use App\Repositories\AgendaRepository;
use App\Repositories\AgendaRepositoryInterface;

class AgendaService
{
    private $agendaRepository;
    public function __construct(AgendaRepository $agendaRepository)
    {
        $this->agendaRepository = $agendaRepository;
    }
    public function getAllAgenda()
    {
        $upcomingAgendas = $this->agendaRepository->getUpcomingAgenda();
        $pastAgendas = $this->agendaRepository->getPastAgenda();
        return [
            'upcoming_agendas' => $upcomingAgendas, // Collection atau Paginator
            'past_agendas' => $pastAgendas,     // Collection atau Paginator
        ];
    }
    public function getPastAgendaDetail(Agenda $agenda){
        $agenda = $this->agendaRepository->findAgendaById($agenda);
        if (empty($agenda->recording_url)) {
            return null;
        }
        return $agenda;
    }

    public function getUpcomingAgendaDetail(Agenda $agenda)
    {
        $agenda = $this->agendaRepository->findAgendaById($agenda);
        return [
            'name' => $agenda->name,
            'thumbnail' => $agenda->thumbnail,
            'description' => $agenda->description,
            'event_datetime' => $agenda->event_datetime,
            'registration_link' => $agenda->registration_link,
            'registration_deadline' => $agenda->registration_deadline,
            'participant_quota' => $agenda->participant_quota,
        ];
    }
}
?>