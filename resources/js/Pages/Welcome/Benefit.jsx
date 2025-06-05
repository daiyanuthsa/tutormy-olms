import React, { useState, useEffect } from 'react'
import BenefitData from "../../../../public/js/data/Benefits"

const BenefitSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

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
                        Apa yang kamu dapatkan apabila belajar di platform Tutormy!
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
                            <div className='w-full flex-shrink-0 space-y-4 p-4'>
                                {BenefitData.slice(0, 3).map((benefit, index) => (
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

                            <div className='w-full flex-shrink-0 space-y-4 p-4'>
                                {BenefitData.slice(3, 6).map((benefit, index) => (
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

export default BenefitSection