<?php

namespace App\Filament\Resources\CourseCertificateResource\Pages;

use App\Filament\Resources\CourseCertificateResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCourseCertificate extends EditRecord
{
    protected static string $resource = CourseCertificateResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
