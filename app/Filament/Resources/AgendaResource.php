<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AgendaResource\Pages;
use App\Filament\Resources\AgendaResource\RelationManagers;
use App\Models\Agenda;
use Filament\Forms;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AgendaResource extends Resource
{
    protected static ?string $model = Agenda::class;

    protected static ?string $navigationIcon = 'heroicon-o-calendar';
    protected static ?string $navigationGroup = 'Manajemen Konten';
    protected static ?string $navigationLabel= 'Webminar';
    protected static ?string $modelLabel = 'Webminar';
    protected static ?string $pluralModelLabel = 'Webminar';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Fieldset::make('Webminar')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                        ->label('Nama Webminar')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\DateTimePicker::make('event_datetime')
                            ->required()
                            ->label('Tanggal dan Waktu Webminar'),
                        Forms\Components\Textarea::make('description')
                        ->label('Deskripsi Webminar')
                            ->columnSpanFull(),
                        Forms\Components\FileUpload::make('thumbnail')
                            ->image()
                            ->maxSize(1024)
                            ->imageEditor()
                            ->directory('agendas/thumbnails')
                            ->imageEditorAspectRatios([
                                null,
                                '16:9',
                                '4:3',
                                '1:1',
                            ])
                            ->imageResizeMode('cover')
                            ->imageCropAspectRatio('16:9')
                            ->visibility('public'),
                        

                        Forms\Components\Toggle::make('is_active')
                            ->default(true)
                            ->hint('Aktifkan agenda ini untuk ditampilkan di halaman webminar.')
                            ->required(),
                    ]),
                Fieldset::make('Pendaftaran')
                    ->schema([
                        Forms\Components\TextInput::make('registration_link')
                        ->label('Tautan Pendaftaran')
                            ->maxLength(255)
                            ->columnSpanFull(),
                        Forms\Components\DateTimePicker::make('registration_deadline')
                            ->label('Batas Waktu Pendaftaran')
                            ,
                        Forms\Components\TextInput::make('participant_quota')
                        ->hint('Kosongkan jika tidak membatasi jumlah peserta.')
                        ->label('Kuota Peserta')
                            ->numeric(),
                    ]),
                Fieldset::make('Rekaman')
                    ->schema([
                        Forms\Components\TextInput::make('duration_minutes')
                            ->numeric()
                            ->suffix('menit')
                            ->label('Durasi Rekaman'),

                        Forms\Components\TextInput::make('recording_url')
                            ->maxLength(255),
                    ]),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable(),
                Tables\Columns\TextColumn::make('thumbnail')
                    ->searchable(),
                Tables\Columns\TextColumn::make('event_datetime')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('duration_minutes')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('registration_link')
                    ->searchable(),
                Tables\Columns\TextColumn::make('registration_deadline')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('participant_quota')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('recording_url')
                    ->searchable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('deleted_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
                Tables\Filters\SelectFilter::make('is_active')
                    ->options([
                        true => 'Aktif',
                        false => 'Tidak Aktif',
                    ])
                    ->default(true),
                Tables\Filters\SelectFilter::make('event_status')
                    ->label('Status Webminar')
                    ->options([
                        'upcoming' => 'Yang Akan Datang',
                        'past' => 'Sudah Lewat',
                    ])
                    ->query(function (Builder $query, array $data) {
                        if ($data['value'] === 'upcoming') {
                            $query->where('event_datetime', '>=', now());
                        } elseif ($data['value'] === 'past') {
                            $query->where('event_datetime', '<', now());
                        }
                    }),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
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
            'index' => Pages\ListAgendas::route('/'),
            'create' => Pages\CreateAgenda::route('/create'),
            'edit' => Pages\EditAgenda::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
