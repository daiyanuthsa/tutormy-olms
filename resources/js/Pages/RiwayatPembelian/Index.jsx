import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

const transactions = [
    {
        id: 1,
        code: 'TM-1751714862-2',
        packageName: 'Paket Profesional',
        status: 'Menunggu',
        statusColor: 'bg-orange-500',
        totalPayment: 'Rp 1.224.000,-',
        endDate: '23 Maret 2025',
        image: '/assets/hero.png',
    },
    {
        id: 2,
        code: 'TM-1751714862-2',
        packageName: 'Paket Profesional',
        status: 'Aktif',
        statusColor: 'bg-green-500',
        totalPayment: 'Rp 1.224.000,-',
        endDate: '23 Maret 2025',
        image: '/assets/hero.png',
    },
    {
        id: 3,
        code: 'TM-1751714862-2',
        packageName: 'Paket Profesional',
        status: 'Berakhir',
        statusColor: 'bg-gray-500',
        totalPayment: 'Rp 1.224.000,-',
        endDate: '23 Maret 2025',
        image: '/assets/hero.png',
    },
];

const Index = () => {
    return (
        <MainLayout>
            <Head title="Riwayat Pembelian" />
            <section className="py-24 sm:py-28 text-white">
                <div className="container mx-auto">
                    <header className="mb-8 space-y-2">
                        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Riwayat Transaksi</h2>
                        <p className="text-sm text-neutral-400 sm:text-base">
                            Lihat riwayat Pembelian Paket Belajarmu di sini
                        </p>
                    </header>

                    <div className="space-y-4">
                        {transactions.length > 0 ? (
                            transactions.map(
                                ({
                                    id,
                                    code,
                                    packageName,
                                    status,
                                    statusColor,
                                    totalPayment,
                                    endDate,
                                    image,
                                }) => (
                                    <div
                                        key={id}
                                        className="flex flex-col gap-4 rounded-lg bg-neutral-4 p-3 sm:flex-row sm:items-center sm:justify-between"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
                                            <div className="w-full sm:w-20 lg:w-36 h-28 flex-shrink-0 overflow-hidden rounded-lg bg-gray-700">
                                                <img
                                                    src={image}
                                                    alt={packageName}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-1 text-sm sm:text-base">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <h3 className="font-semibold text-white text-base sm:text-xl">
                                                        {packageName}
                                                    </h3>
                                                    <span
                                                        className={`px-3 flex items-center py-1 rounded-full text-xs font-medium ${statusColor}`}
                                                    >
                                                        <div class="w-2 h-2 mr-1 bg-white rounded-full" />
                                                        {status}
                                                    </span>
                                                </div>
                                                <div className="text-neutral-300 text-sm">{code}</div>
                                                <div className="text-neutral-400 text-sm">Total Pembayaran</div>
                                                <div className="text-base font-semibold text-white sm:text-lg">
                                                    {totalPayment}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-right sm:text-left sm:pl-4 text-sm sm:text-base">
                                            <p className="text-neutral-400">Paket berakhir</p>
                                            <p className="font-semibold text-white">{endDate}</p>
                                        </div>
                                    </div>
                                )
                            )
                        ) : (
                            <div className="text-center flex flex-col items-center justify-center gap-2 mt-12">
                                <div className="text-center lg:text-2xl font-bold">Kamu belum pernah membeli paket Belajar</div>
                                <img src="/assets/no-riwayat.webp" alt="icon" className='w-80 h-60' />
                                <div className="text-center">Beli Paket Belajar Sekarang</div>
                                <PrimaryButton variant='secondary' className='rounded-full'>Beli Sekarang</PrimaryButton>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Index;