import PrimaryButton from '@/Components/PrimaryButton'
import React from 'react'

const Benefit = () => {
    return (
        <section className="relative text-white py-16 lg:py-20">
            <div className="relative w-full">
                <img src="/assets/benefit-image.webp" alt="benefit" className="w-full h-auto object-cover" />

                <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-primary-4/70 to-transparent z-10 pointer-events-none" />

                <div className="absolute inset-0 flex flex-col gap-1 lg:gap-6 items-center justify-center text-center container z-20">
                    <h2 className="text-sm lg:text-4xl font-bold max-w-4xl">
                        "The people who are crazy enough to think they can change the world are the ones who do."
                    </h2>
                    <p className="text-xs lg:text-2xl font-bold">-Steve Jobs-</p>
                    <PrimaryButton className="rounded-2xl">Langganan Sekarang</PrimaryButton>
                </div>
            </div>
        </section>
    )
}

export default Benefit