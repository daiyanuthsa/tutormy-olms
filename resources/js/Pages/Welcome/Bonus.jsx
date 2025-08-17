import React, { useEffect } from "react";
import { Check } from "lucide-react";
import PrimaryButton from "@/Components/PrimaryButton";
import AOS from "aos";
import GradientText from "@/Components/GradientText";

const bonuses = [
    {
        image: "/assets/foto-15.jpg",
        title: "Akses GRATIS ke Event Offline & Networking",
        benefits: [
            "Acara offline eksklusif dengan berbagai speaker",
            "Bangun networking dengan berbagai komunitas",
            "Kesempatan bangun kerjasama dengan berbagai member komunitas",
        ],

        value: "Rp1.800.000",
    },
    {
        image: "/assets/foto-16.jpg",
        title: "1-on-1 Konsultasi dengan Mentor",
        benefits: [
            "Punya banyak pertanyaan? Kamu dapat konsultasi langsung  secara private dengan admin & mentor kami.",
        ],
        caption:
            "Dapatkan akses ke sesi spesial bersama para expert dari berbagai industri. Topik terkini, insight mendalam,<br> dan pengalaman langsung—<b>hanya bisa diakses oleh member.</b>",
        value: "Rp3.200.000",
    },
    {
        image: "/assets/foto-17.jpg",
        title: "GRATIS Akses Webinar Eksklusif",
        benefits: [
            "Langkah awal menuju perubahan besar bisa dimulai dari satu sesi ini. Dapatkan ilmu dan insight dari para praktisi berpengalaman, yang tidak kamu temukan di tempat lain - dan semuanya tanpa biaya.",
        ],
        caption:
            "Langkah awal menuju perubahan besar bisa dimulai dari satu sesi ini. Dapatkan ilmu dan insight dari para praktisi berpengalaman, yang tidak kamu temukan di tempat lain - dan semuanya tanpa biaya.",
        value: "Rp300.000",
    },
    {
        image: "/assets/foto-1.webp",
        title: "Monthly Meet-Up Dengan Mentor & Circle Support",
        benefits: [
            "Diskusi langsung dengan sesama member & mentor tentang perkembangan  belajar, saling sharing pemikiran, startegi, dan diskusi secara dua arah.",
        ],
        caption:
            "Diskusi langsung dengan sesama member & mentor tentang perkembangan  belajar, saling sharing pemikiran, startegi, dan diskusi secara dua arah.",
        value: "Rp1.900.000",
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
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section className="text-white ">
            <div className="container  mx-auto py-16 lg:py-20 space-y-20">
                <h2
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="text-center text-2xl lg:text-5xl font-bold"
                >
                    Bonus
                    <GradientText> Benefit Exclusive </GradientText>
                    Khusus <br /> Pendaftaran
                    <GradientText> SEKARANG!</GradientText>
                </h2>

                {bonuses.map((bonus, index) => (
                    <div
                        key={index}
                        className="space-y-8 justify-items-center border-2 border-secondary-3  border-spacing-1  lg:py-6 rounded-3xl bg-black bg-opacity-60 backdrop-blur-md"
                    >
                        <div className="relative lg:w-4/5 sm:w-full overflow-hidden rounded-3xl">
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

                            {/* <div
                                className="text-center text-lg lg:text-2xl"
                                dangerouslySetInnerHTML={{
                                    __html: bonus.caption,
                                }}
                            /> */}
                            {bonus.benefits && bonus.benefits.length === 3 && (
                                <div className="border border-primary-3 p-8 rounded-3xl bg-black bg-opacity-60 backdrop-blur-md w-4/5 lg:w-full max-w-5xl">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">
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
                            {bonus.benefits && bonus.benefits.length === 1 && (
                                <div className="border border-primary-3 p-8 rounded-3xl bg-black bg-opacity-60 backdrop-blur-md w-4/5 lg:w-full max-w-5xl">
                                    <div className="grid grid-cols-1 justify-items-center gap-2 lg:gap-8">
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

                            <button className="bg-primary-4 rounded-xl py-2.5 px-4 font-bold lg:text-2xl ">
                                Value: {bonus.value}
                            </button>
                        </div>
                    </div>
                ))}

                <div className="grid grid-cols-1 md:w-4/5 mx-auto text-center border-2 border-warning-3 rounded-3xl py-4 space-y-5 lg:space-y-10">
                    <h2 className="text-2xl lg:text-4xl font-bold">
                        Total Value
                        <GradientText> GRATIS </GradientText>
                        Khusus Pendaftar
                        <GradientText> SEKARANG!</GradientText>
                    </h2>

                    <div>
                        <button className="bg-primary-4 rounded-2xl py-2.5 px-4 font-bold text-2xl lg:text-4xl">
                            Value: {formatValue(totalValue)}
                        </button>
                    </div>
                    <div>
                        <PrimaryButton
                            onClick={handleScrollToPricelist}
                            className="rounded-2xl"
                        >
                            Langganan Sekarang
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bonus;
