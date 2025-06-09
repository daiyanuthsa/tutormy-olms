<?php

namespace App\Filament\Resources\CourseResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SectionsRelationManager extends RelationManager
{
    protected static string $relationship = 'sections';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                // Repeater untuk mengelola SectionContent yang ada DI DALAM seksi ini
                Forms\Components\Repeater::make('contents')
                    ->relationship()
                    ->label('Konten di dalam Seksi Ini')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Judul Konten')
                            ->required(),
                        Forms\Components\TextInput::make('content')
                            ->label('Isi Konten')
                            ->required(),
                        Forms\Components\Toggle::make('free_access') // Pastikan nama kolom 'free_access' benar
                            ->label('Akses Gratis')
                            ->default(false),
                    ])
                    ->orderColumn('position')
                    ->columns(2)
                    ->reorderable(true)
                    ->addActionLabel('Tambah Konten')
                    ->collapsible()
                    ->cloneable()
                    ->columnSpanFull(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                Tables\Columns\TextColumn::make('name')->label('Nama Bagian'),
                Tables\Columns\TextColumn::make('contents_count')->counts('contents')->label('Jumlah Konten'),
                Tables\Columns\TextColumn::make('position')->label('Urutan'),
            ])->reorderable('position')
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                
            ])
;
    }
}
