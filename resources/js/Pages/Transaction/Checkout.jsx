import React from "react";
import { Head } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import MainLayout from "@/Layouts/MainLayout";

const FEATURES = [
    "200 + Materi Belajar",
    "20+ Akses Seluruh Materi",
    "50+ Konsultasi Mentor Ahli",
    "24/7 Dukungan eror",
    "Materi dan dukungan Prioritas",
];


const InfoItem = ({ label, value }) => (
    <div>
        <p className="text-sm mb-1">{label}</p>
        <p className="text-primary-2 font-semibold">{value}</p>
    </div>
);

const DetailItem = ({ label, value }) => (
    <div className="flex justify-between">
        <span>{label}</span>
        <span className="font-semibold">{value}</span>
    </div>
);

const ActionButton = ({ variant, label }) => {
    const baseStyle =
        "flex-1 py-3 px-6 rounded-2xl font-semibold transition-colors";
    const solid = "bg-primary-3 hover:bg-primary-2";
    const outline = "border hover:bg-gray-700";

    return (
        <button
            className={`${baseStyle} ${variant === "solid" ? solid : outline}`}
        >
            {label}
        </button>
    );
};

const PaymentSummary = ({ checkout, user, auth }) => (
    <div className="bg-neutral-5 py-6 px-6 lg:px-8 rounded-2xl space-y-5">
        <h3 className="text-xl lg:text-3xl font-bold">Ringkasan Pembayaran</h3>

        <div className="rounded-xl border p-4 flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="lg:text-lg font-semibold">KA</span>
            </div>
            <div>
                <h4 className="font-semibold lg:text-lg">{auth?.user?.name}</h4>
                <p className="text-sm">{auth?.user?.name}</p>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <InfoItem label="Tanggal Pembayaran" value="Sen, 11 Januari 2028" />
            <InfoItem
                label="Tanggal Berakhir Paket"
                value="Sen, 11 Januari 2028"
            />
        </div>

        <div>
            <h4 className="text-xl font-semibold mb-4">Keterangan Paket</h4>
            <div className="space-y-3">
                <DetailItem label="Durasi Akses" value="3 Bulan" />
                <DetailItem label="Harga Paket" value="Rp 600.000,00" />
                <DetailItem label="PPN 12%" value="Rp 72.000,00" />
                <hr className="border-gray-700 my-4" />
                <div className="flex justify-between lg:text-lg">
                    <span className="text-primary-2 font-semibold">
                        Grand Total
                    </span>
                    <span className="text-primary-2 font-bold">
                        Rp 672.000,00
                    </span>
                </div>
            </div>
        </div>

        <div className="flex space-x-3">
            <ActionButton variant="outline" label="Batalkan" />
            <ActionButton variant="solid" label="Bayar Sekarang" />
        </div>
    </div>
);

const PackageDetails = () => (
    <div className="bg-neutral-3 rounded-2xl overflow-hidden lg:mx-10 xl:mx-28">
        <div className="relative">
            <img
                src="/assets/hero-auth.webp"
                alt="Professional team meeting"
                className="w-full h-64 object-cover rounded-b-2xl "
            />
            <div className="absolute bg-primary-4 px-4 py-2 mx-2 xl:mx-9 rounded-full -bottom-5 left-4 right-4 flex items-center justify-between">
                <h3 className="text-sm lg:lg:text-lg font-bold">
                    Paket Profesional
                </h3>
                <span className="bg-white/30 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Icon icon="iconoir:spark-solid" className="mr-1" />
                    Populer
                </span>
            </div>
        </div>

        <div className="p-9 space-y-3">
            {FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 ">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center border-2">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="currentColor"
                        >
                            <path
                                d="M10 3L4.5 8.5L2 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                </div>
            ))}
        </div>
    </div>
);

const Checkout = ({ pricing, auth, checkout }) => {
    return (
        <MainLayout>
            <Head title="Chec  kout" />
            <section className="container mx-auto pb-20 pt-40 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <PaymentSummary checkout={checkout} auth={auth} />
                    <PackageDetails />
                </div>
            </section>
            
        </MainLayout>
    );
};

export default Checkout;

// export default function Checkout({ checkout, pricing }) {
//     return (
//         <div className=">
//             <h1>Data Prepare checkout</h1>
//             <pre>{JSON.stringify(checkout, null, 2)}</pre>
//             <pre>{JSON.stringify(pricing, null, 2)}</pre>
//         </div>
//     );
// }
