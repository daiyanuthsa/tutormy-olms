import PrimaryButton from '@/Components/PrimaryButton'
import { Icon } from '@iconify/react'
import React from 'react'

const Hero = () => {
    const handleScrollToPricelist = () => {
        const section = document.getElementById('pricelist');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            className="relative pt-5 sm:pt-10 bg-cover pb-16 lg:bg-contain bg-no-repeat bg-center overflow-hidden"
            style={{ backgroundImage: "url('/assets/stars-component.webp')" }}
        >
            <div className="absolute w-60 h-60 lg:w-80 lg:h-80 bg-purple-700 opacity-30 blur-3xl rounded-full left-[-100px] top-1/4 z-0" />
            <div className='container text-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10'>
                <div>
                    <h1 className='text-3xl md:text-2xl lg:text-5xl font-extrabold text-start mb-5 lg:mb-7'>
                        Upgrade Skill Tanpa Ribet, Belajar Bisa di Mana Aja!
                    </h1>
                    <p className='text-sm font-medium mb-4'>
                        Dunia kerja terus berkembang, dan kami pastikan kamu tidak tertinggal. Di Tutormy.id, kami menghadirkan materi terkini yang disesuaikan dengan kebutuhan industri saat ini!
                    </p>
                    <PrimaryButton className='rounded-full' onClick={handleScrollToPricelist}>
                        Berlangganan Sekarang
                        <Icon icon="line-md:arrow-up" className='ml-2 rotate-45' />
                    </PrimaryButton>
                </div>
                <div className="relative w-full flex items-center justify-center">
                    <div className="h-full md:h-60 lg:h-80 xl:h-96">
                        <img
                            src="/assets/hero-webminar.webp"
                            alt="Belajar Online"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
            {/* <button className="fixed bottom-10 right-5 md:right-8 lg:right-28 z-50 flex items-center gap-3 bg-success-2 text-lg lg:text-2xl font-bold rounded-xl py-2 px-4">
                <Icon icon="logos:whatsapp-icon" className="w-6 h-6 lg:w-9 lg:h-9" />
                Whatsapp
            </button> */}
        </section>
    )
}

export default Hero