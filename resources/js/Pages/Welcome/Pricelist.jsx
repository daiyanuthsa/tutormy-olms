import React, { useEffect, useState } from "react";
import AOS from "aos";
import GradientText from "@/Components/GradientText";

const Pricelist = ({ pricings }) => {
    const [selectedPlan, setSelectedPlan] = useState(2);

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
        "Akses komunitas tanpa batas waktu, terus berkembang bareng orang-orang yang satu visi.",
        "Langsung belajar dari para expert, bukan sekadar “guru”, tapi orang yang beneran menjalani dan sukses di bidangnya.",
        "Materi berjenjang, dari dasar yang mudah dipahami hingga teknik lanjutan.",
        "Video bisa diakses kapan saja, cocok untuk gaya belajar fleksibel.",
        "Monthly Meet-Up, bareng mentor & circle support",
        "Gratis Akses, webinar eksklusift",
        "Akses Private Mentoring 1-on-1",
        "Akses GRATIS ke Event Offline & Networking",
    ];
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="pricelist">
            <div className="container mx-auto py-16 lg:py-20 space-y-20 text-white">
                <div className="space-y-5 flex flex-col items-center">
                    <h2 data-aos="fade-up" className="text-center text-primary-3 shadow-xl text-2xl lg:text-5xl font-bold">
                        <GradientText className="font-bold">
                            Gabung Member Sekarang
                        </GradientText>
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-center lg:text-xl max-w-3xl">
                        Join member kita sekarang untuk dapatkan & lipat
                        gandakan penghasilan!
                    </p>
                </div>

                {/* <div className="flex flex-col lg:flex-row justify-center items-center xl:items-stretch gap-14 lg:gap-10 xl:gap-14 max-w-6xl mx-auto">
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
                                        <div className="text-xs md:text-sm ">
                                            <span className="">Hanya </span>
                                            {plan.normal_price
                                                ? formatRupiah(
                                                      plan.normal_price
                                                  )
                                                : ""}
                                            <span className="">/hari</span>
                                        </div>
                                    </div>
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
                                        Gabung Sekarang!
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border-2 border-white mt-0.5">
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
                                            <span className="text-xs md:text-sm leading-relaxed">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}

                <div className="flex justify-center items-center md:px-8 py-2 md:py-8">
                    {" "}
                    {/* Tambahan padding */}
                    <div
                        key={pricings[0].id}
                        onClick={() => setSelectedPlan(pricings[0].id)}
                        className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                            selectedPlan === pricings[0].id
                                ? "lg:scale-110 z-10"
                                : "scale-100"
                        }`}
                    >
                        <div className="rounded-2xl p-4 sm:p-6 xl:p-8 mx-0 lg:mx-20 lg:w-96 h-auto relative bg-gradient-to-b from-purple-700 to-purple-900 shadow-2xl shadow-purple-500/25 border border-purple-400">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <div className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                    <span className="text-purple-600">✦</span>
                                    Populer
                                </div>
                            </div>

                            <div className="text-center mb-6 text-white">
                                <h3 className="text-xl md:text-3xl lg:text-2xl font-bold mb-2">
                                    {pricings[0].name}
                                </h3>
                                <div className="mb-4">
                                    <div className="text-base md:text-xl lg:text-2xl font-semibold mb-1">
                                        Akses Membership {pricings[0].duration} Bulan
                                    </div>
                                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                                        {formatRupiah(pricings[0].price)    }
                                    </div>
                                    <div className="text-xs md:text-sm">
                                        <span>Hanya </span>{formatRupiah(pricings[0].normal_price / 30)}
                                        <span>/hari</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <button
                                    data-aos="zoom-in"
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePlanClick(pricings[0].id);
                                    }}
                                    className="w-full text-base md:text-xl py-2 md:py-3 px-4 md:px-6 rounded-full font-semibold transition-all duration-200 bg-white text-purple-600 hover:bg-gray-100"
                                >
                                    Gabung Sekarang!
                                </button>
                            </div>

                            <div className="space-y-3 text-white">
                                {features.map((feature, index) => (
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                        data-aos-anchor-placement="top-bottom"
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border-2 border-white mt-0.5">
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
                                        <span className="text-xs md:text-sm leading-relaxed">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricelist;
