import React, { useEffect, useState } from "react";
import AOS from "aos";
import GradientText from "@/Components/GradientText";

const Pricelist = ({ pricings = [] }) => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const formatRupiah = (value) => {
        if (!value) return "";
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
        "Akses komunitas tanpa batas waktu, terus berkembang bareng orang-orang yang satu visi.",
        "Langsung belajar dari para expert, bukan sekadar “guru”, tapi orang yang beneran menjalani dan sukses di bidangnya.",
        "Materi berjenjang, dari dasar yang mudah dipahami hingga teknik lanjutan.",
        "Video bisa diakses kapan saja, cocok untuk gaya belajar fleksibel.",
        "Monthly Meet-Up, bareng mentor & circle support.",
        "Gratis Akses, webinar eksklusif.",
        "Akses Private Mentoring 1-on-1.",
        "Akses GRATIS ke Event Offline & Networking.",
    ];

    useEffect(() => {
        AOS.refresh();
    }, []);

    if (!pricings.length) {
        return (
            <section id="pricelist">
                <div className="container mx-auto py-16 lg:py-20 text-center text-white">
                    <h2 className="text-2xl lg:text-4xl font-bold">
                        <GradientText>Tidak ada data paket tersedia</GradientText>
                    </h2>
                    <p className="mt-2 text-lg">Silakan coba lagi nanti.</p>
                </div>
            </section>
        );
    }

    const isSingle = pricings.length === 1;

    return (
        <section id="pricelist">
            <div className="container mx-auto py-16 lg:py-20 space-y-16 text-white">
                <div className="space-y-1 flex flex-col items-center">
                    <h2
                        data-aos="fade-up"
                        className="text-center text-primary-3 shadow-xl text-2xl lg:text-5xl font-bold"
                    >
                        <GradientText className="font-bold">
                            Gabung Member Sekarang
                        </GradientText>
                    </h2>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-center lg:text-xl max-w-3xl"
                    >
                        Join member kita sekarang untuk dapatkan & lipat gandakan penghasilan!
                    </p>
                </div>

                {/* Cards */}
                <div
                    className={
                        isSingle
                            ? "flex justify-center items-center mx-2"
                            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    }
                >
                    {pricings.map((plan, idx) => (
                        <div
                            key={plan?.id}
                            onClick={() => setSelectedPlan(plan?.id)}
                            className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 
                                ${isSingle ? "w-full md:w-2/3 max-w-3xl" : "w-full"}`}
                        >
                            <div className="relative rounded-3xl p-6 md:p-8 lg:p-10 mx-auto h-auto bg-gradient-to-b from-purple-700 to-purple-900 shadow-2xl shadow-purple-500/25 border border-purple-400">
                                {idx === 0 && (
                                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-white text-purple-600 px-6 py-2 rounded-full text-base md:text-lg font-bold flex items-center gap-2 shadow-lg">
                                            <span className="text-purple-600 text-lg">✦</span>
                                            Populer
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-6 text-white">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                                        {plan?.name}
                                    </h3>
                                    <div className="mb-4">
                                        <div className="text-lg md:text-2xl lg:text-3xl font-semibold mb-1">
                                            Akses Membership {plan?.duration} Bulan
                                        </div>
                                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                                            {formatRupiah(plan?.price)}
                                        </div>
                                        <div className="text-sm md:text-base">
                                            <span>Hanya </span>
                                            {formatRupiah(plan?.normal_price)}
                                            <span>/hari</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <button
                                        data-aos="zoom-in"
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handlePlanClick(plan?.id);
                                        }}
                                        className="w-full text-lg md:text-xl py-3 md:py-4 px-6 rounded-full font-semibold transition-all duration-200 bg-white text-purple-600 hover:bg-gray-100"
                                    >
                                        Gabung Sekarang!
                                    </button>
                                </div>

                                <div className="space-y-4 text-white">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 100}
                                            data-aos-anchor-placement="top-bottom"
                                            className="flex items-start gap-3"
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white mt-0.5">
                                                <svg
                                                    width="14"
                                                    height="14"
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
                                            <span className="text-sm md:text-base leading-relaxed">
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