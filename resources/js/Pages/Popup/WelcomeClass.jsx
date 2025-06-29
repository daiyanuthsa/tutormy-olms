import React from 'react'
import { Icon } from '@iconify/react'
import PrimaryButton from '@/Components/PrimaryButton'
import PopUpLayout from '@/Layouts/PopUpLayout'

const WelcomeClass = ({ course, studentName, sectionId, contentId }) => {
    return (
        <PopUpLayout>
            <div className='flex items-center justify-center'>
                <div className='bg-neutral-4 w-[320px] lg:w-[520px] h-auto py-8 px-5 space-y-3 flex flex-col items-center justify-center rounded-2xl text-center'>
                    <img src="/assets/hand.webp" alt="icon" className='w-28' />

                    <div>
                        <div className="text-2xl lg:text-3xl font-bold text-white">
                            Waktunya Upgrade Skill!
                        </div>
                        <div className="text-2xl lg:text-3xl font-bold text-white">
                            Welcome to Class
                        </div>
                    </div>

                    <div className="text-sm lg:text-base font-medium text-gray-300 max-w-md">
                        Yuk asah skill terbaru bareng mentor berpengalaman! 🚀
                        Gabung sekarang dan upgrade kemampuanmu ke level selanjutnya!
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0'>
                            <img
                                src="/assets/hero-auth.webp"
                                alt="Course"
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='flex-1 text-left'>
                            <div className='mb-2'>
                                <span className='bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium'>
                                    {course.category.name}
                                </span>
                            </div>
                            <div className="text-white text-base font-semibold mb-2">
                                {course.name}
                            </div>
                            <div className='space-y-1 text-sm text-gray-300'>
                                {/* <div className='flex items-center gap-2'>
                                    <Icon icon="icons8:student" className="w-4 h-4" />
                                    <span>120 Juta Siswa</span>
                                </div> */}
                                <div className='flex items-center gap-2'>
                                    <Icon icon="mdi:video-outline" className="w-4 h-4" />
                                    <span>26 Video Pembelajaran</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='space-x-6'>
                        <PrimaryButton 
                        onClick={() => {
                            // Handle view other classes
                            window.location.href = '/courses';
                        }}
                        variant='outline' className='rounded-full text-white'>
                            Lihat Kelas Lainnya
                        </PrimaryButton>
                        <PrimaryButton
                        onClick={() => {
                            // Handle start learning
                            window.location.href = `/course/${course.slug}/learn?section=${sectionId}&content=${contentId}`;
                        }}
                        className='rounded-full'>
                            Mulai Belajar
                        </PrimaryButton>
                    </div>
                </div>
            </div>
            
        </PopUpLayout>
    )
}

export default WelcomeClass