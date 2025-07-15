<?php

namespace App\Filament\Resources\CourseCertificateResource\Pages;

use App\Filament\Resources\CourseCertificateResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCourseCertificates extends ListRecords
{
    protected static string $resource = CourseCertificateResource::class;

    protected function getHeaderActions(): array
    {
        return [
            // Actions\CreateAction::make(),
        ];
    }
}
