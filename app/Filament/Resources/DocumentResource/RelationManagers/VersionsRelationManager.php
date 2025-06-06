<?php

namespace App\Filament\Resources\DocumentResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use App\Models\Document;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class VersionsRelationManager extends RelationManager
{
    protected static string $relationship = 'versions';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('version_number')
                    ->required()
                    ->rules('required')
                    ->hint(function (RelationManager $livewire) {
                        /** @var Document $document */
                        $document = $livewire->ownerRecord;
                        $latestVersion = $document->activeVersion()->first();

                        return $latestVersion?->version_number
                            ? 'Latest version: ' . $latestVersion->version_number
                            : 'No previous version found.';
                    })
                    ->maxLength(255),
                Forms\Components\RichEditor::make('content')
                    ->default(function (RelationManager $livewire) {
                        /** @var Document $document */
                        $document = $livewire->ownerRecord;
                        $latestVersion = $document->activeVersion()->first();

                        return $latestVersion?->content;
                    })
                    ->required()
                    ->columnSpanFull(),
                Forms\Components\DatePicker::make('effective_date')
                ->label('Tanggal Efektif')
                    ->required(),
                Forms\Components\Select::make('language_code')
                    ->label('Bahasa')
                    ->options([
                        'id' => 'Indonesia',
                        'en' => 'English',
                    ])
                    ->required(),
                Forms\Components\Toggle::make('is_published')
                    ->label('Sudah Publikasi?'),
                Forms\Components\Toggle::make('is_active')
                    ->label('Jadikan Versi Aktif?'),
                Forms\Components\Select::make('published_by_user_id')
                    ->relationship('publishBy', 'name')
                    ->label('Published By')
                    ->disabled(),
                Forms\Components\Select::make('created_by_user_id')
                    ->relationship('createBy', 'name')
                    ->label('Created By')
                    ->disabled()
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('version_number')
            ->columns([
                Tables\Columns\TextColumn::make('version_number'),
                Tables\Columns\TextColumn::make(''),
                Tables\Columns\TextColumn::make('effective_date')->date()->sortable(),
                Tables\Columns\ToggleColumn::make('is_published')->label('Published'),
                Tables\Columns\ToggleColumn::make('is_active')->label('Active'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
