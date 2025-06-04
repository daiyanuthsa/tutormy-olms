<?php

namespace App\Repositories;

// You might want to import your model here, e.g.:
use App\Models\Agenda;
use Illuminate\Database\Eloquent\Collection;

class AgendaRepository implements AgendaRepositoryInterface
{
    /**
     * Find an agenda by its ID.
     *
     * @param Agenda $agenda
     * @return Agenda|null
     */
    public function findAgendaById(Agenda $agenda)
    {
        // Implement your logic here
        return Agenda::where('id', $agenda->id)
            ->where('is_active', true)
            ->first();
    }

    
	public function getPastAgenda(): Collection
    {
        // This method should return a collection of past agendas
        return Agenda::where('event_datetime', '<', now())
            ->where('is_active', true)
            ->orderBy('event_datetime','desc')
            ->get();
    }


	public function getUpcomingAgenda(): Collection
	{
		// Implement your logic here
        return Agenda::where('event_datetime', '>=', now())
            ->where('is_active', true)
            ->orderBy('event_datetime','asc')
            ->get();
	}
}