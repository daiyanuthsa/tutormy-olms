import React from 'react'
import { Check } from 'lucide-react'
import PrimaryButton from '@/Components/PrimaryButton'

const bonuses = [
    {
        image: '/assets/bonus-image.webp',
        title: 'Akses ke Event Offline & Networking',
        benefits: [
            'Acara offline eksklusif dengan berbagai speaker',
            'Bangun networking dengan berbagai komunitas',
            'Kesempatan bangun kerjasama dengan berbagai member komunitas',
        ],
        value: 'Rp3.800.000',
    },
    {
        image: '/assets/bonus-image.webp',
        title: '1-on-1 Konsultasi dengan Mentor',
        benefits: [
            'Diskusi langsung dengan mentor pilihanmu',
            'Solusi personal untuk pengembangan karier',
            'Rekomendasi langkah nyata yang bisa diambil',
        ],
        value: 'Rp2.500.000',
    },
    {
        image: '/assets/bonus-image.webp',
        title: 'Akses Premium Materi Belajar',
        benefits: [
            '200+ video materi dan studi kasus',
            'Update berkala setiap bulan',
            'E-book eksklusif dari para ahli',
        ],
        value: 'Rp1.800.000',
    },
]

const parseValue = (str) =>
    parseInt(str.replace(/[^\d]/g, ''), 10)

const formatValue = (num) =>
    'Rp' + num.toLocaleString('id-ID')

const Bonus = () => {
    const totalValue = bonuses.reduce(
        (acc, item) => acc + parseValue(item.value),
        0
    )

    return (
        <section className='text-white'>
            <div className='container mx-auto py-16 lg:py-20 space-y-20'>
                <h2 className='text-center text-2xl lg:text-4xl font-bold'>
                    Bonus khusus member yang daftar “Hari Ini”
                </h2>

                {bonuses.map((bonus, index) => (
                    <div key={index} className='space-y-8'>
                        <div className='relative w-full overflow-hidden rounded-xl'>
                            <img
                                src={bonus.image}
                                alt={`bonus-${index + 1}`}
                                className='w-full h-auto object-cover'
                            />
                            <div className='absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent pointer-events-none' />
                        </div>

                        <div className='flex flex-col items-center gap-8'>
                            <h3 className='text-center text-2xl lg:text-4xl font-bold'>
                                {bonus.title}
                            </h3>

                            <div className='border border-primary-3 p-8 rounded-3xl bg-black bg-opacity-60 backdrop-blur-md w-full max-w-5xl'>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8'>
                                    {bonus.benefits.map((benefit, idx) => (
                                        <div key={idx} className='flex items-start gap-3'>
                                            <div className='bg-primary-3 rounded-full p-1 mt-1'>
                                                <Check className='w-4 h-4 text-white' />
                                            </div>
                                            <p className='text-base'>{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <PrimaryButton variant='danger' className='rounded-xl'>
                                Value: {bonus.value}
                            </PrimaryButton>
                        </div>
                    </div>
                ))}

                <div className='text-center space-y-5 lg:space-y-10'>
                    <h2 className='text-2xl lg:text-4xl font-bold'>
                        Total Value!
                    </h2>
                    <PrimaryButton variant='danger' className='rounded-xl'>
                        Value: {formatValue(totalValue)}
                    </PrimaryButton>
                    <p className="text-center text-xl lg:text-4xl font-semibold">Kamu bisa dapat semua benefit + bonus senilai value tersebut, dengan Diskon 98% "Khusus HARI INI"</p>
                    <PrimaryButton className='rounded-2xl'>Langganan Sekarang</PrimaryButton>
                </div>
            </div>
        </section>
    )
}

export default Bonus