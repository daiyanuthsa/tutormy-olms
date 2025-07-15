<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CourseCertificateResource\Pages;
use App\Filament\Resources\CourseCertificateResource\RelationManagers;
use App\Models\CourseCertificate;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CourseCertificateResource extends Resource
{
    protected static ?string $model = CourseCertificate::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Manajemen Kelas';
    protected static ?string $navigationLabel = 'Sertifikat';
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('path')
                    ->maxLength(255),
                Forms\Components\DateTimePicker::make('send_at'),
                Forms\Components\TextInput::make('status')
                    ->required()
                    ->maxLength(255)
                    ->default('pending'),
                Forms\Components\TextInput::make('name_on_certificate')
                    ->maxLength(255),
                Forms\Components\TextInput::make('course_student_id')
                    ->required()
                    ->numeric(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn($state) => match ($state) {
                        'failed' => 'danger',
                        'done' => 'success',
                        'pending' => 'warning',
                        default => 'secondary',
                    })
                    ->searchable(),
                Tables\Columns\TextColumn::make('name_on_certificate')
                    ->searchable(),
                Tables\Columns\TextColumn::make('courseStudent.user.name')
                    ->label('Nama Pengguna')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('courseStudent.course.name')
                    ->label('Nama Kursus')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\Action::make('resend')
                    ->label('Resend')
                    ->icon('heroicon-o-arrow-path')
                    ->visible(fn($record) => $record->status !== 'pending')
                    ->action(function ($record) {
                        $record->status = 'pending';
                        $record->save();
                    }),
                Tables\Actions\Action::make('open_file')
                    ->label('Open File')
                    ->icon('heroicon-o-arrow-top-right-on-square')
                    ->url(fn($record) => $record->path ? url('storage/' . $record->path) : null)
                    ->openUrlInNewTab()
                    ->visible(fn($record) => !empty($record->path)),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCourseCertificates::route('/'),
            'create' => Pages\CreateCourseCertificate::route('/create'),
            'edit' => Pages\EditCourseCertificate::route('/{record}/edit'),
        ];
    }
}
