import React from "react";
import { Check } from "lucide-react";
import PrimaryButton from "@/Components/PrimaryButton";

const bonuses = [
    {
        image: "/assets/bonus-image.webp",
        title: "Akses ke Event Offline & Networking",
        benefits: [
            "Acara offline eksklusif dengan berbagai speaker",
            "Bangun networking dengan berbagai komunitas",
            "Kesempatan bangun kerjasama dengan berbagai member komunitas",
        ],

        value: "Rp3.800.000",
    },
    {
        image: "/assets/bonus-image.webp",
        title: "1-on-1 Konsultasi dengan Mentor",
        benefits: [],
        caption:
            "Dapatkan akses ke sesi spesial bersama para expert dari berbagai industri. Topik terkini, insight mendalam,<br> dan pengalaman langsung—<b>hanya bisa diakses oleh member.</b>",
        value: "Rp2.500.000",
    },
    {
        image: "/assets/bonus-image.webp",
        title: "Akses Premium Materi Belajar",
        benefits: [

        ],
        caption:
            "Butuh bimbingan lebih dalam? Kamu bisa konsultasi langsung dengan mentor<br>lewat sesi private member yang fleksibel secara berkala.",
        value: "Rp1.800.000",
    },
];

const handleScrollToPricelist = () => {
    const section = document.getElementById("pricelist");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};
const parseValue = (str) => parseInt(str.replace(/[^\d]/g, ""), 10);

const formatValue = (num) => "Rp" + num.toLocaleString("id-ID");

const Bonus = () => {
    const totalValue = bonuses.reduce(
        (acc, item) => acc + parseValue(item.value),
        0
    );

    return (
        <section className="text-white">
            <div className="container mx-auto py-16 lg:py-20 space-y-20">
                <h2 className="text-center text-2xl lg:text-5xl font-bold">
                    Bonus khusus member yang daftar “HARI INI”
                </h2>

                {bonuses.map((bonus, index) => (
                    <div key={index} className="space-y-8 justify-items-center">
                        <div className="relative w-4/5  overflow-hidden rounded-xl">
                            <img
                                src={bonus.image}
                                alt={`bonus-${index + 1}`}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <h3 className="text-center text-2xl lg:text-4xl font-bold">
                                {bonus.title}
                            </h3>

                            <div
                                className="text-center text-lg lg:text-2xl"
                                dangerouslySetInnerHTML={{
                                    __html: bonus.caption,
                                }}
                            />
                            {bonus.benefits && bonus.benefits.length > 0 && (
                                <div className="border border-primary-3 p-8 rounded-3xl bg-black bg-opacity-60 backdrop-blur-md w-full max-w-5xl">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8">
                                        {bonus.benefits.map((benefit, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="bg-primary-3 rounded-full p-1 mt-1">
                                                    <Check className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="text-base">
                                                    {benefit}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <button className="bg-error-4 py-2.5 px-4 font-bold lg:text-2xl">
                                Value: {bonus.value}
                            </button>
                        </div>
                    </div>
                ))}

                <div className="text-center space-y-5 lg:space-y-10">
                    <h2 className="text-2xl lg:text-4xl font-bold">
                        Total Value!
                    </h2>
                    <button className="bg-error-4 py-2.5 px-4 font-bold text-2xl lg:text-4xl">
                        Value: {formatValue(totalValue)}
                    </button>
                    <p className="text-center text-xl lg:text-4xl font-semibold">
                        Kamu bisa dapat semua benefit + bonus senilai value
                        tersebut, dengan Diskon 98% "Khusus HARI INI"
                    </p>
                    <PrimaryButton
                        onClick={handleScrollToPricelist}
                        className="rounded-2xl"
                    >
                        Langganan Sekarang
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Bonus;
