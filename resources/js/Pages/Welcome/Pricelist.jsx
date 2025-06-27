import React, { useState } from "react";

const Pricelist = ({ pricings }) => {
    const [selectedPlan, setSelectedPlan] = useState(2);

    const plans = [
        {
            id: "pemula-left",
            name: "Paket Pemula",
            duration: "12 Bulan",
            price: "Rp 1.224.000,-",
            monthlyPrice: "Rp 125.000",
            features: [
                "200 + Materi Belajar",
                "20+ Akses Seluruh Materi",
                "50+ Konsultasi Mentor Ahli",
                "24/7 Dukungan eror",
                "Materi dan dukungan Prioritas",
            ],
        },
        {
            id: "profesional",
            name: "Paket Profesional",
            duration: "12 Bulan",
            price: "Rp 1.224.000,-",
            monthlyPrice: "Rp 125.000",
            popular: true,
            features: [
                "200 + Materi Belajar",
                "20+ Akses Seluruh Materi",
                "50+ Konsultasi Mentor Ahli",
                "24/7 Dukungan eror",
                "Materi dan dukungan Prioritas",
            ],
        },
        {
            id: "pemula-right",
            name: "Paket Pemula",
            duration: "12 Bulan",
            price: "Rp 1.224.000,-",
            monthlyPrice: "Rp 125.000",
            features: [
                "200 + Materi Belajar",
                "20+ Akses Seluruh Materi",
                "50+ Konsultasi Mentor Ahli",
                "24/7 Dukungan eror",
                "Materi dan dukungan Prioritas",
            ],
        },
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

    const features = [
        "200 + Materi Belajar",
        "20+ Akses Seluruh Materi",
        "50+ Konsultasi Mentor Ahli",
        "24/7 Dukungan eror",
        "Materi dan dukungan Prioritas",
    ];

    return (
        <section id="pricelist">
            <div className="container mx-auto py-16 lg:py-20 space-y-20 text-white">
                <div className="space-y-5 flex flex-col items-center">
                    <h2 className="text-center text-2xl lg:text-4xl font-bold">
                        Pilih Akses Materimu Sekarang !
                    </h2>
                    <p className="text-center lg:text-xl max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur. Odio dolor arcu
                        ullamcorper dictum nulla ph
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
                                {plan.popular && selectedPlan === plan.id && (
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
                                            {plan.price
                                                ? formatRupiah(plan.price)
                                                : ""}
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
                                        Lorem ipsum dolor sit amet consectetur.
                                        Odio dolor arcu ullamcorper dictum nulla
                                        ph
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
    );
};

export default Pricelist;
