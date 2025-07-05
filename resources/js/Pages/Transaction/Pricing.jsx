import MainLayout from "@/Layouts/MainLayout";
import React, { useState } from "react";

export default function Pricing({ pricings }) {
    const [selectedPlan, setSelectedPlan] = useState(2);

    const features = [
        "Akses hingga 300+ menit modul pembelajaran",
        "Komunitas belajar seumur hidup",
        "Sesi Live Eksklusif di Luar Platform",
        "Gratis All Access (Rekaman Webinar Series, Ebook, dll)",
        "Expert Guest Speaker Eksklusif untuk Member",
        "Akses ke Event Offline & Networking",
    ];
    // Money formatter for Indonesian Rupiah
    const formatRupiah = (value) => {
        if (!value) return "";
        // Remove non-digit characters
        const number = Number(String(value).replace(/[^\d]/g, ""));
        return number.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        });
    };

    const handlePlanClick = (planId) => {
        window.location.href = `/checkout/${planId}`;
    };

    return (
        <MainLayout>
            <section>
                <div className="container mx-auto  py-16 lg:py-20 space-y-20 text-white">
                    <div className="space-y-5 mt-20 flex flex-col items-center">
                        <h2 className="text-center text-2xl lg:text-4xl font-bold">
                            Pilih Akses Materimu Sekarang !
                        </h2>
                        <p className="text-center lg:text-xl max-w-2xl">
                            Pilih paket belajar yang paling sesuai dengan tujuan
                            dan budgetmu. Kuasai skill baru dan raih potensimu
                            dalam hitungan minggu.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-center xl:items-stretch gap-14 lg:gap-10 xl:gap-14 max-w-6xl mx-auto">
                        {pricings.map((plan) => (
                            <div
                                key={plan.id}
                                onClick={() => setSelectedPlan(plan.id)}
                                className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                                    selectedPlan === plan.id
                                        ? "scale-110 z-10"
                                        : "scale-100"
                                }`}
                            >
                                <div
                                    className={`rounded-2xl p-4 sm:p-6 xl:p-8 w-64 sm:w-72 xl:w-80 h-auto relative ${
                                        selectedPlan === plan.id
                                            ? "bg-gradient-dark-down shadow-2xl shadow-purple-500/25 border"
                                            : "bg-neutral-4 shadow-xl"
                                    }`}
                                >
                                    {plan.popular &&
                                        selectedPlan === plan.id && (
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                                <div className="bg-white text-primary-3 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                                    <span className="text-primary-3">
                                                        ✦
                                                    </span>
                                                    Populer
                                                </div>
                                            </div>
                                        )}

                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-semibold mb-2">
                                            {plan.name}
                                        </h3>
                                        <div className="mb-4">
                                            <div className="text-2xl md:text-3xl font-bold mb-1">
                                                {plan.duration + " Bulan"}
                                            </div>
                                            <div className="text-3xl md:text-4xl font-bold mb-2">
                                                {formatRupiah(plan.price)}
                                            </div>
                                            <div className="text-xs md:text-sm line-through">
                                                {plan.normal_price
                                                    ? formatRupiah(
                                                          plan.normal_price
                                                      )
                                                    : ""}
                                                <span className="">/bulan</span>
                                            </div>
                                        </div>
                                        <p className="text-xs md:text-sm mb-6">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Odio dolor arcu
                                            ullamcorper dictum nulla ph
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handlePlanClick(plan.id);
                                            }}
                                            className={`w-full py-2 md:py-3 px-4 md:px-6 rounded-full font-semibold transition-all duration-200 ${
                                                selectedPlan === plan.id
                                                    ? "bg-primary-3 hover:bg-primary-4"
                                                    : "bg-gradient-to-r from-[#22222E] to-[#6D6D94]"
                                            }`}
                                        >
                                            Belajar Sekarang
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        {features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border-2">
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
                                                <span className="text-xs md:text-sm">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
