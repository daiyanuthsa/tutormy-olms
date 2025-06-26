import React from 'react';

const steps = [
    {
        id: '01',
        title: 'Kemudahan Akses Materi Selamanya !',
        desc: 'Bayar sekali, nikmati akses selamanya. Semua materi bisa kamu pelajari ulang kapan saja tanpa batas waktu. Belajar jadi fleksibel tanpa takut ketinggalan—karena kamu bisa kembali kapan pun kamu butuh.',
        imgPosition: 'right',
    },
    {
        id: '02',
        title: 'Update Otomatis ke 100+ Modul Terbaru',
        desc: 'Tanpa biaya tambahan, kamu akan terus dapat materi baru yang relevan dengan perkembangan teknologi jadi selalu up-to-date tanpa perlu bayar ulang.',
        imgPosition: 'left',
    },
    {
        id: '03',
        title: 'Komunitas Belajar Seumur Hidup',
        desc: 'Gabung dalam komunitas aktif tempat kamu bisa bertanya, berdiskusi, dan sampai saling membantu! Hidup! Bukan hanya belajar, tapi berusaha memanjat bersama.',
        imgPosition: 'right',
    },
    {
        id: '04',
        title: 'Belajar Langsung dari Mentor Praktisi',
        desc: 'Materi kamu dapat belajar dari pengalaman nyata para praktisi industri. Kamu belajar langsung dari mereka yang sudah berpengalaman di bidang masing-masing.',
        imgPosition: 'left',
    },
    {
        id: '05',
        title: 'Modul Belajar dari Basic hingga Mahir',
        desc: 'Ngga perlu takut mulai dari 0! Semua materi disusun bertahap dari yang paling administrasi step by step sampai pushan, semua hingga jadi mahir.',
        imgPosition: 'right',
    },
];

const StepItem = ({ id, title, desc, imgPosition, isLast }) => {
    const isImageLeft = imgPosition === 'right';

    return (
        <div className="relative">
            <div className="grid grid-cols-5 gap-8 items-center">
                {isImageLeft ? (
                    <>
                        <div className="col-span-2">
                            <div className="w-full rounded-lg overflow-hidden shadow-lg">
                                <img src="/assets/get-image.webp" alt="image" />
                            </div>
                        </div>

                        <div className="col-span-1"></div>

                        <div className="col-span-2">
                            <h3 className="text-xl font-bold mb-3 text-purple-300">{title}</h3>
                            <p className="text-gray-300 leading-relaxed text-sm">{desc}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col-span-2 text-right">
                            <h3 className="text-xl font-bold mb-3 text-purple-300">{title}</h3>
                            <p className="text-gray-300 leading-relaxed text-sm">{desc}</p>
                        </div>

                        <div className="col-span-1"></div>

                        <div className="col-span-2">
                            <div className="w-full rounded-lg overflow-hidden shadow-lg">
                                <img src="/assets/get-image.webp" alt="image" />
                            </div>
                        </div>
                    </>
                )}                                                                                                                                              
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-lg">
                    {id}
                </div>
            </div>

            {!isLast && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-purple-400 z-0"></div>
            )}
        </div>
    );
};

const Get = () => {
    return (
        <div className="min-h-screen text-white">
            <div className="container mx-auto py-16">
                <h2 className="text-center text-2xl lg:text-4xl font-bold mb-16">
                    Apa yang kamu dapatkan apabila belajar di platform Tutormy!
                </h2>

                <div className="max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <StepItem
                            key={step.id}
                            {...step}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Get;