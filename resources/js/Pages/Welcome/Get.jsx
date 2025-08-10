import React from 'react';

const steps = [
    {
        id: "01",
        title: "Komunitas Belajar Seumur Hidup.",
        desc: [
            "☑️Akses komunitas tanpa batas waktu, terus berkembang bareng orang-orang yang satu visi.",
            "☑️Akses ke modul pembelajaran tambahan yang terus diperbarui.",
            "☑️Akses ke berbagai materi pembelajaran yang relevan dengan perkembangan teknologi.",
        ],
        imgPosition: "left",
        img: "/assets/get-image2.webp",
    },
    {
        id: "02",
        title: "35+ Blueprint Strategi Meningkatkan Omset Bisnis & Tambah Sumber Penghasilan",
        desc: [
            "☑️Akses komunitas tanpa batas waktu, terus berkembang bareng orang-orang yang satu visi.",
            "☑️Akses ke modul pembelajaran tambahan yang terus diperbarui.",
            "☑️Akses ke berbagai materi pembelajaran yang relevan dengan perkembangan teknologi.",
        ],
        imgPosition: "right",
        img: "/assets/get-image3.webp",
    },
    {
        id: "03",
        title: "Modul Pembelajaran Tambahan dari Basic Hingga Mahir",
        desc: [
            "☑️Akses komunitas tanpa batas waktu, terus berkembang bareng orang-orang yang satu visi.",
            "☑️Akses ke modul pembelajaran tambahan yang terus diperbarui.",
            "☑️Akses ke berbagai materi pembelajaran yang relevan dengan perkembangan teknologi.",
        ],
        imgPosition: "left",
        img: "/assets/get-image4.webp",
    },
];

const Get = () => {
    return (
        <div className=" text-white py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-center text-2xl lg:text-4xl font-bold mb-16">
                    Kenapa Harus Belajar Bersama Tutormy?
                </h2>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-primary-1 transform -translate-x-1/2 z-0" />

                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="grid grid-cols-3 items-center space-y-6 md:space-y-3 md:gap-6 relative"
                        >
                            {step.imgPosition === "left" && (
                                <>
                                    <div className="col-span-1">
                                        <img
                                            src={
                                                step.img ||
                                                "/assets/get-image.webp"
                                            }
                                            alt={step.title}
                                            className="rounded-xl w-full shadow-lg"
                                        />
                                    </div>
                                    <div className="col-span-1 flex justify-center items-center relative z-10">
                                        <div className="bg-gradient-to-r from-primary-4 to-primary-1 p-0.5 rounded-lg">
                                            <div className="w-8 h-8 md:w-12 md:h-12 bg-neutral-800 text-white text-sm md:text-base font-bold rounded-lg flex items-center justify-center shadow-md">
                                                {step.id}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <h3 className="text-purple-300 font-bold text-sm lg:text-2xl mb-2">
                                            {step.title}
                                        </h3>
                                        {step.desc.map((item, index) => (
                                            <p
                                                key={index}
                                                className="hidden lg:block text-gray-100 
                                        font-medium text-sm mb-2"
                                            >
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </>
                            )}

                            {step.imgPosition === "right" && (
                                <>
                                    <div className="col-span-1 py-8">
                                        <h3 className="text-purple-300  font-bold text-sm lg:text-2xl mb-2">
                                            {step.title}
                                        </h3>
                                        {step.desc.map((item, index) => (
                                            <p
                                                key={index}
                                                className="hidden lg:block text-gray-300 
                                        font-medium text-sm mb-2"
                                            >
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="col-span-1 flex justify-center items-center relative z-10">
                                        <div className="bg-gradient-to-r from-primary-4 to-primary-1 p-0.5 rounded-lg">
                                            <div className="w-8 h-8 md:w-12 md:h-12 bg-neutral-800 text-white text-sm md:text-base font-bold rounded-lg flex items-center justify-center shadow-md">
                                                {step.id}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <img
                                            src={
                                                step.img ||
                                                "/assets/get-image.webp"
                                            }
                                            alt={step.title}
                                            className="rounded-xl w-full shadow-lg"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Get;