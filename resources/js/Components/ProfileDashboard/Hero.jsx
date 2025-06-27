import React from 'react'
import { Icon } from '@iconify/react'

const Hero = () => {
    return (
        <section className='text-white'>
            <div className="container mx-auto space-y-6">
                <div className='space-y-2'>
                    <h6 className="text-2xl font-bold">Selamat Datang kembali, Karina Aruma!</h6>
                    <p>Yuk lanjutkan progres belajarmu hari ini!</p>
                </div>

                <div className='flex flex-col lg:flex-row gap-6 lg:gap-9'>
                    <div className='flex items-center gap-4'>
                        <img src="/assets/teacher.png" alt="profile" className='w-24 h-24 md:w-28 md:h-28 rounded-full object-cover' />
                        <div className='space-y-2'>
                            <p className="text-xl font-semibold">Karina Aruma W</p>
                            <p className="font-medium text-sm text-neutral-300">karinaaruma@domain.com</p>
                            <p className="font-medium text-sm text-neutral-300">Mahasiswa</p>
                            <button className='text-sm md:text-base font-semibold flex items-center gap-2 bg-primary-4 hover:bg-primary-3 transition px-4 py-1 rounded-full'>
                                Edit <Icon icon="tabler:edit" className='w-5 h-5' />
                            </button>
                        </div>
                    </div>

                    <div id='progress' className='flex-1 flex items-center gap-6 bg-gradient-dark-down px-4 py-4 rounded-2xl'>
                        <div className="relative">
                            <svg className="w-20 h-20 md:w-24 md:h-24 transform -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="16" fill="none" />
                                <circle
                                    cx="50" cy="50" r="40"
                                    stroke="#A157E4"
                                    strokeWidth="16"
                                    fill="none"
                                    strokeDasharray={`${73 * 2.51} ${100 * 2.51}`}
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-extrabold text-lg md:text-xl">73%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Keseluruhan Progres Belajar</p>
                            <p className="text-xs font-medium text-neutral-300">Yuk lanjutkan progres belajarmu hari ini!</p>
                        </div>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div className='flex justify-between items-center'>
                        <p className="text-xl font-semibold">About</p>
                        <button className='text-sm md:text-base font-semibold flex items-center hover:text-primary-3 gap-2'>
                            Edit <Icon icon="tabler:edit" className='w-5 h-5 md:w-6 md:h-6' />
                        </button>
                    </div>
                    <div className='bg-neutral-5 rounded-2xl p-6 md:p-8 max-w-full'>
                        <p className="text-sm font-medium text-neutral-1 text-justify leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla phasellus nisi ac commodo.
                            Mi mattis amet interdum urna. Egestas amet id tincidunt nascetur imperdiet. Pretium sit tempor faucibus
                            vestibulum at egestas mauris praesent bibendum. Lorem ipsum dolor sit amet consectetur. Odio dolor arcu
                            ullamcorper dictum nulla phasellus nisi ac commodo. Mi mattis amet interdum urna. Egestas amet id
                            tincidunt nascetur imperdiet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero