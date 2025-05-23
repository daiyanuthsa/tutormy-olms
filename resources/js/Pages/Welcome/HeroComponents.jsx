import PrimaryButton from '@/Components/PrimaryButton'
import { Icon } from '@iconify/react'
import React from 'react'

const HeroComponents = () => {
    return (
        <section className='pt-20 pb-16'>
            <div className='text-white grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div>
                    <h1 className='text-3xl lg:text-5xl font-extrabold text-start mb-5 lg:mb-7'>Upgrade Skill Tanpa Ribet, Belajar Bisa di Mana Aja!</h1>
                    <p className='text-sm font-medium mb-4'>Dunia kerja terus berkembang, dan kami pastikan kamu tidak tertinggal. Di Tutormy.id, kami menghadirkan materi terkini yang disesuaikan dengan kebutuhan industri saat ini!</p>
                    <PrimaryButton>
                        Berlangganan Sekarang
                        <Icon icon="line-md:arrow-up" className='ml-2 rotate-45' />
                    </PrimaryButton>
                </div>
                <div className="w-full h-72 lg:h-80 xl:h-96 bg-neutral-800 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center">
                    <img
                        src="/images/hero-illustration.png"
                        alt="Belajar Online"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroComponents