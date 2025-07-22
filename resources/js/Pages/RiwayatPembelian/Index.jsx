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
                        
                    </div>
                    {transactions.length > 0 ? (
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {transactions.map(
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
                                        className="bg-gradient-to-br from-card-bg to-card-bg-hover rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden group"
                                    >
                                        {/* <!-- Card Header --> */}
                                        <div className="flex items-center gap-4 mb-5">
                                            {/* <!-- Icon --> */}
                                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                                                📚
                                            </div>

                                            {/* <!-- Plan Details --> */}
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold mb-1">
                                                    {pricing.name}
                                                </h3>
                                                <div className="text-sm text-slate-400">
                                                    {booking_trx_id}
                                                </div>
                                            </div>

                                            {/* <!-- Status Badge --> */}
                                            {/* <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                                Aktif
                                            </div> */}
                                            <StatusBadge
                                                status={status}
                                                ended_at={ended_at}
                                            />
                                        </div>

                                        {/* <!-- Price Section --> */}
                                        <div className="bg-purple-500/10 rounded-xl p-4 mb-5">
                                            <div className="text-2xl font-bold text-purple-400 mb-1">
                                                {formatRupiah(
                                                    grand_total_amount
                                                )}
                                            </div>
                                            <div className="text-sm text-slate-400">
                                                Total Pembayaran
                                            </div>
                                        </div>

                                        {/* <!-- Transaction Info Grid --> */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="text-center">
                                                <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                                                    Tanggal Transaksi
                                                </div>
                                                <div className="font-semibold">
                                                    {formatTanggalIndo(
                                                        created_at
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                                                    Paket Berakhir
                                                </div>
                                                <div className="font-semibold">
                                                    {formatTanggalIndo(
                                                        ended_at
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Subtle background decoration --> */}
                                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    </div>
                                )
                            )}
                        </div>
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
            </section>
            
        </MainLayout>
    );
};

export default Index;