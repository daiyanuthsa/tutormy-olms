<?php

namespace App\Repositories;

use App\Models\Agenda;
use Illuminate\Database\Eloquent\Collection;

interface AgendaRepositoryInterface
{
    // Define your interface methods here
    public function findAgendaById(Agenda $agenda);

    public function getUpcomingAgenda():Collection;

    public function getPastAgenda(): Collection;
    
}