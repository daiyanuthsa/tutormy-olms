import React, { useState, useEffect } from 'react'

const Benefit = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const benefits = [
        {
            title: "Metode Belajar yang mudah dipahami",
            description: "Belajar gak harus bikin pusing! Semua materi disusun dengan alur yang terstruktur, dilengkapi studi kasus, dan gaya penyampaian yang sederhana. Cocok untuk pemula maupun yang ingin naik level."
        },
        {
            title: "Materi Selalu Update dan Relevan",
            description: "Dunia terus berkembang — dan begitu juga pembelajarannya. Kamu akan terus dapat akses ke konten terbaru yang disesuaikan dengan kebutuhan industri dan tren terkini."
        },
        {
            title: "Akses Komunitas Seumur Hidup",
            description: "Dunia terus berkembang — dan begitu juga pembelajarannya. Kamu akan terus dapat akses ke konten terbaru yang disesuaikan dengan kebutuhan industri dan tren terkini."
        },
        {
            title: "Sertifikat Professional",
            description: "Dapatkan sertifikat yang diakui industri setelah menyelesaikan program pembelajaran. Tingkatkan nilai CV dan kredibilitas profesional kamu di mata rekruter."
        },
        {
            title: "Mentor Berpengalaman",
            description: "Belajar langsung dari praktisi dan ahli yang sudah berpengalaman bertahun-tahun di bidangnya. Dapatkan insight dan tips praktis yang tidak kamu temukan di tempat lain."
        },
        {
            title: "Fleksibilitas Waktu Belajar",
            description: "Belajar kapan saja dan dimana saja sesuai dengan jadwal kamu. Platform tersedia 24/7 dengan akses seumur hidup ke semua materi pembelajaran."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % 2);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section>
            <div className='container text-white py-16 lg:py-20 space-y-9'>
                <div className='flex justify-center'>
                    <h2 className="text-center text-2xl lg:text-4xl font-bold xl:w-1/2">
                        Apa yang kmu dapatkan apabila belajar di platform Tutormy!
                    </h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                    <div className='flex justify-center items-center'>
                        <img
                            src="/assets/benefit-component.webp"
                            alt="Tutormy Learning Platform"
                            className='w-60 md:w-96 lg:w-[450px] h-auto'
                        />
                    </div>
                    <div className='overflow-hidden'>
                        <div
                            className='flex transition-transform duration-500 ease-in-out'
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            <div className='w-full flex-shrink-0 space-y-4'>
                                {benefits.slice(0, 3).map((benefit, index) => (
                                    <div
                                        key={`slide1-${index}`}
                                        className='bg-neutral-4 rounded-3xl px-4 py-4 lg:px-7 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-750'
                                    >
                                        <h3 className='lg:text-xl font-semibold mb-3'>
                                            {benefit.title}
                                        </h3>
                                        <p className='text-sm lg:text-base leading-relaxed'>
                                            {benefit.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className='w-full flex-shrink-0 space-y-4'>
                                {benefits.slice(3, 6).map((benefit, index) => (
                                    <div
                                        key={`slide2-${index}`}
                                        className='bg-neutral-4 rounded-3xl px-4 py-4 lg:px-7 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-750'
                                    >
                                        <h3 className='lg:text-xl font-semibold mb-3'>
                                            {benefit.title}
                                        </h3>
                                        <p className='text-sm lg:text-base leading-relaxed'>
                                            {benefit.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefit