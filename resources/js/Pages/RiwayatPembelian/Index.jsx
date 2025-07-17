import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

const transactions = [
    {
        id: 1,
        booking_trx_id: 'TM-1751714862-2',
        packageName: 'Paket Profesional',
        status: 'Menunggu',
        statusColor: 'bg-orange-500',
        grand_total_amount: 'Rp 1.224.000,-',
        ended_at: '23 Maret 2025',
        image: '/assets/hero.png',
    },
    {
        id: 2,
        booking_trx_id: 'TM-1751714862-2',
        packageName: 'Paket Profesional',
        status: 'Aktif',
        statusColor: 'bg-green-500',
        grand_total_amount: 'Rp 1.224.000,-',
        ended_at: '23 Maret 2025',
        image: '/assets/hero.png',
    },
    {
        id: 3,
        booking_trx_id: 'TM-1751714862-2',
        packageName: 'Paket Profesional',
        status: 'Berakhir',
        statusColor: 'bg-gray-500',
        grand_total_amount: 'Rp 1.224.000,-',
        ended_at: '23 Maret 2025',
        image: '/assets/hero.png',
    },
];
function formatRupiah(value) {
    if (typeof value !== "number") {
        value = parseInt(value);
    }

    if (isNaN(value)) return "Rp 0,-";

    return (
        "Rp " +
        value
            .toLocaleString("id-ID", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            })
            .replace(/\./g, ".") +
        ",-"
    );
}

function formatTanggalIndo(dateString) {
    const bulanIndo = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const date = new Date(dateString);

    if (isNaN(date)) return "-";

    const day = date.getDate();
    const month = bulanIndo[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

const StatusBadge = ({ status, ended_at }) => {
    const now = new Date();
    const endedAtDate = ended_at ? new Date(ended_at) : null;

    let label = "Menunggu";
    let color = "bg-orange-500";

    if (status === "SUCCESS") {
        if (endedAtDate && endedAtDate > now) {
            label = "Aktif";
            color = "bg-green-500";
        } else {
            label = "Berakhir";
            color = "bg-gray-500";
        }
    } else if (status === "PENDING") {
        label = "Menunggu";
        color = "bg-orange-500";
    }

    return (
        <span className={`px-3 flex items-center py-1 rounded-full text-xs font-medium ${color}`}>
            <div className="w-2 h-2 mr-1 bg-white rounded-full" />
            {label}
        </span>
    );
}


const Index = ({ transactions }) => {
    return (
        <MainLayout>
            <Head title="Riwayat Pembelian" />
            <section className="py-24 sm:py-28 text-white">
                <div className="container mx-auto">
                    <header className="mb-8 space-y-2">
                        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                            Riwayat Transaksi
                        </h2>
                        <p className="text-sm text-neutral-400 sm:text-base">
                            Lihat riwayat Pembelian Paket Belajarmu di sini
                        </p>
                    </header>

                    <div className="space-y-4">
                        {transactions.length > 0 ? (
                            transactions.map(
                                ({
                                    id,
                                    booking_trx_id,
                                    pricing,
                                    status,
                                    statusColor,
                                    grand_total_amount,
                                    ended_at,
                                    created_at,
                                    image,
                                }) => (
                                    <div
                                        key={id}
                                        className="flex flex-col gap-4 rounded-lg bg-neutral-4 p-3 sm:flex-row sm:items-center sm:justify-between"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
                                            <div className="w-full sm:w-20 lg:w-36 h-28 flex-shrink-0 overflow-hidden rounded-lg bg-gray-700">
                                                <img
                                                    src="/assets/hero.png"
                                                    alt={pricing.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-1 text-sm sm:text-base">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <h3 className="font-semibold text-white text-base sm:text-xl">
                                                        {pricing.name}
                                                    </h3>
                                                    <StatusBadge
                                                        status={status}
                                                        ended_at={ended_at}
                                                    />
                                                </div>
                                                <div className="text-neutral-300 text-sm">
                                                    {booking_trx_id}
                                                </div>
                                                <div className="text-neutral-400 text-sm">
                                                    Total Pembayaran
                                                </div>
                                                <div className="text-base font-semibold text-white sm:text-lg">
                                                    {formatRupiah(
                                                        grand_total_amount
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-8 sm:items-center ">
                                            <div className="text-left text-sm sm:text-base">
                                                <p className="text-neutral-400">
                                                    Tanggal Transaksi
                                                </p>
                                                <p className="font-semibold text-white">
                                                    {formatTanggalIndo(
                                                        created_at
                                                    )}
                                                </p>
                                            </div>
                                            <div className=" text-left text-sm sm:text-base">
                                                <p className="text-neutral-400">
                                                    Paket berakhir
                                                </p>
                                                <p className="font-semibold text-white">
                                                    {formatTanggalIndo(
                                                        ended_at
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        ) : (
                            <div className="text-center flex flex-col items-center justify-center gap-2 mt-12">
                                <div className="text-center lg:text-2xl font-bold">
                                    Kamu belum pernah membeli paket Belajar
                                </div>
                                <img
                                    src="/assets/no-riwayat.webp"
                                    alt="icon"
                                    className="w-80 h-60"
                                />
                                <div className="text-center">
                                    Beli Paket Belajar Sekarang
                                </div>
                                <PrimaryButton
                                    variant="secondary"
                                    className="rounded-full"
                                >
                                    Beli Sekarang
                                </PrimaryButton>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Index;