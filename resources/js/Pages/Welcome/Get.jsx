import React from 'react';

const steps = [
    {
        id: "01",
        title: "Update Otomatis ke 100+ Modul Terbaru",
        desc: "Tanpa biaya tambahan, kamu akan terus dapat materi baru yang relevan dengan perkembangan teknologi.",
        imgPosition: "left",
        img: "/assets/get-image2.webp",
    },
    {
        id: "02",
        title: "Komunitas Belajar Seumur Hidup",
        desc: "Gabung dalam komunitas aktif tempat kamu bisa bertanya, berdiskusi, dan saling membantu!",
        imgPosition: "right",
        img: "/assets/get-image3.webp",
    },
    {
        id: "03",
        title: "Belajar Langsung dari Mentor Praktisi",
        desc: "Materi kamu dapat belajar dari pengalaman nyata para praktisi industri.",
        imgPosition: "left",
        img: "/assets/get-image4.webp",
    },
    {
        id: "04",
        title: "Modul Belajar dari Basic hingga Mahir",
        desc: "Ngga perlu takut mulai dari 0! Semua materi disusun bertahap dari yang paling dasar hingga mahir.",
        imgPosition: "right",
        img: "/assets/get-image5.webp",
    },
];

const Get = () => {
    return (
        <div className=" text-white py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-center text-2xl lg:text-4xl font-bold mb-16">
                    Apa yang kamu dapatkan apabila belajar di platform Tutormy!
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
                                        <p className="hidden lg:block text-gray-300 font-medium text-sm">
                                            {step.desc}
                                        </p>
                                    </div>
                                </>
                            )}

                            {step.imgPosition === "right" && (
                                <>
                                    <div className="col-span-1">
                                        <h3 className="text-purple-300 text-right font-bold text-sm lg:text-2xl mb-2">
                                            {step.title}
                                        </h3>
                                        <p
                                            className="hidden lg:block text-gray-300 text-right
                                        font-medium text-sm"
                                        >
                                            {step.desc}
                                        </p>
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
                                            src="/assets/get-image.webp"
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