import { Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import MainLayout from '@/Layouts/MainLayout';
import React from 'react';

const EmpatKosongEmpat = () => {
    return (
        <MainLayout>
            <div className='relative container mx-auto py-16 text-white flex flex-col-reverse lg:flex-row items-center justify-center gap-12 min-h-screen'>
                
                <div className='z-10 text-center lg:text-left max-w-lg'>
                    <p className="text-4xl lg:text-7xl font-extrabold">404 Not Found</p>
                    <p className="text-base lg:text-lg font-medium mt-6">
                        Kami tidak dapat menemukan halaman yang Anda cari. <br />
                        Silakan periksa kembali alamat yang Anda ketik atau kembali ke beranda untuk melanjutkan pencarian Anda.
                    </p>
                    <Link href="/" className='inline-block mt-6'>
                        <PrimaryButton className='rounded-full'>Kembali ke Beranda</PrimaryButton>
                    </Link>
                </div>

                <div className='z-10 w-full max-w-sm lg:max-w-md'>
                    <img
                        src="/assets/empat-nol-empat.webp"
                        alt="404 Illustration"
                        className='w-full h-auto object-contain'
                    />
                </div>

                <div className="absolute w-60 h-60 lg:w-80 lg:h-80 bg-purple-700 blur-[190px] rounded-full left-[-100px] top-1/2 -translate-y-1/2 z-0" />
            </div>
        </MainLayout>
    );
};

export default EmpatKosongEmpat;