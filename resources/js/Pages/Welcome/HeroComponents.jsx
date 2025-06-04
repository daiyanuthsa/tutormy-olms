import PrimaryButton from '@/Components/PrimaryButton'
import { Icon } from '@iconify/react'
import React from 'react'

const HeroComponents = () => {
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
                    <PrimaryButton>
                        Berlangganan Sekarang
                        <Icon icon="line-md:arrow-up" className='ml-2 rotate-45' />
                    </PrimaryButton>
                </div>
                <div className="relative w-full flex items-center justify-center">
                    <div className="absolute w-[350px] h-[300px] md:h-[200px] lg:w-[400px] xl:w-[600px] lg:h-[400px] bg-purple-700 opacity-40 blur-xl md:blur-3xl rounded-full z-0" />
                    <div className="relative z-10 w-full h-full md:h-60 lg:h-80 xl:h-96 bg-neutral-800 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center">
                        <img
                            src="/assets/hero.png"
                            alt="Belajar Online"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroComponents