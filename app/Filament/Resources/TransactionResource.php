<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TransactionResource\Pages;
use App\Filament\Resources\TransactionResource\RelationManagers;
use App\Models\Pricing;
use App\Models\Transaction;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Wizard\Step;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TransactionResource extends Resource
{
    protected static ?string $model = Transaction::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Finace';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Wizard::make([
                    Step::make('Paket')
                        ->schema([
                            Grid::make('2')
                                ->schema([
                                    Forms\Components\Select::make('pricing_id')
                                        ->relationship('pricing', 'name')
                                        ->searchable()
                                        ->preload()
                                        ->required()
                                        ->live()
                                        ->afterStateUpdated(function ($state, callable $set) {
                                            $pricing = Pricing::find($state); // get the pricing information
                                
                                            $price = $pricing->price; // get the price
                                            $duration = $pricing->duration; // get the duration
                                
                                            $subTotal = $price * $state; // get the sub total
                                            $totalPpn = $subTotal * 0.12; // get the total ppn
                                            $totalAmount = $subTotal + $totalPpn; // get the total amount
                                
                                            $set('total_tax_amount', $totalPpn);
                                            $set('grand_total_amount', $totalAmount);
                                            $set('sub_total_amount', $price);
                                            $set('duration', $duration);
                                        })
                                        ->afterStateHydrated(function (callable $set, $state) {
                                            $pricingId = $state;
                                            if ($pricingId) {
                                                $pricing = Pricing::find($pricingId);
                                                $duration = $pricing->duration;
                                                $set('duration', $duration);
                                            }
                                        }),
                                    Forms\Components\TextInput::make('duration')
                                        ->required()
                                        ->numeric()
                                        ->readOnly()
                                        ->prefix('Months'),
                                ])->columnSpanFull(),
                            Grid::make(3)
                                ->schema([
                                    Forms\Components\TextInput::make('sub_total_amount')
                                        ->required()
                                        ->numeric()
                                        ->prefix('IDR')
                                        ->readOnly(),

                                    Forms\Components\TextInput::make('total_tax_amount')
                                        ->required()
                                        ->numeric()
                                        ->prefix('IDR')
                                        ->readOnly(),

                                    Forms\Components\TextInput::make('grand_total_amount')
                                        ->required()
                                        ->numeric()
                                        ->prefix('IDR')
                                        ->readOnly()
                                        ->helperText('Harga sudah include PPN 11%'),
                            ]),
                            Grid::make(2)
                                ->schema([
                                    Forms\Components\DatePicker::make('started_at')
                                        ->live()
                                        ->afterStateUpdated(function ($state, callable $set, callable $get) {
                                            $duration = $get('duration'); // Get the duration from the form state
                                            if ($state && $duration) {
                                                $endedAt = \Carbon\Carbon::parse($state)->addMonths($duration); // Calculate the end date
                                                $set('ended_at', $endedAt->format('Y-m-d')); // Set the calculated end date
                                            }
                                        })
                                        ->required()
                                        ->minDate(now()->subDay()),

                                    Forms\Components\DatePicker::make('ended_at')
                                        ->readOnly()
                                        ->required(),

                                ]),
                    ]),
                    Step::make('Informasi Siswa')
                        ->schema([
                            Grid::make(3)
                                ->schema([
                                    Forms\Components\Select::make('user_id')
                                        ->relationship('student', 'email')
                                        ->searchable()
                                        ->preload()
                                        ->required()
                                        ->live()
                                        ->afterStateUpdated(function ($state, callable $set) {
                                            $user = User::find($state);

                                            $name = $user->name;
                                            $email = $user->email;

                                            $set('name', $name);
                                            $set('email', $email);
                                        })
                                        ->afterStateHydrated(function (callable $set, $state) {
                                            $userId = $state;
                                            if ($userId) {
                                                $user = User::find($userId);
                                                $name = $user->name;
                                                $email = $user->email;
                                                $set('name', $name);
                                                $set('email', $email);
                                            }
                                        }),
                                    Forms\Components\TextInput::make('name')
                                        ->required()
                                        ->readOnly()
                                        ->maxLength(255),

                                    Forms\Components\TextInput::make('email')
                                        ->required()
                                        ->readOnly()
                                        ->maxLength(255),
                                ]),
                    ])->columnSpanFull(),
                    Step::make('Payment Information')
                        ->schema([

                            Forms\Components\ToggleButtons::make('is_paid')
                                ->label('Apakah sudah membayar?')
                                ->boolean()
                                ->grouped()
                                ->icons([
                                    true => 'heroicon-o-pencil',
                                    false => 'heroicon-o-clock',
                                ])
                                ->required(),

                            Forms\Components\Select::make('payment_type')
                                ->options([
                                    'Midtrans' => 'Midtrans',
                                    'Manual' => 'Manual',
                                ])
                                ->required(),

                            Forms\Components\FileUpload::make('proof')
                                ->image()
                                ->directory('transaction/proof'),
                        ]),

                ])->columnSpanFull(),
                

                // Forms\Components\TextInput::make('uniq_code')
                //     ->required()
                //     ->numeric(),
                // Forms\Components\Toggle::make('is_paid')
                //     ->required(),
                // Forms\Components\TextInput::make('proof')
                //     ->maxLength(255),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('booking_trx_id')
                    ->searchable(),
                Tables\Columns\TextColumn::make('user.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('pricing.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('sub_total_amount')
                    ->numeric()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('total_tax_amount')
                    ->numeric()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('grand_total_amount')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('uniq_code')
                    ->numeric()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_paid')
                    ->boolean(),
                Tables\Columns\TextColumn::make('started_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('ended_at')
                    ->dateTime()
                    ->sortable(),
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
            'index' => Pages\ListTransactions::route('/'),
            'create' => Pages\CreateTransaction::route('/create'),
            'edit' => Pages\EditTransaction::route('/{record}/edit'),
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
