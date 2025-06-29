import React from 'react';
import { Icon } from '@iconify/react';

const UserProfile = () => (
    <div className="flex items-center gap-4">
        <img
            src="/assets/teacher.png"
            alt="profile"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
        />
        <div className="space-y-2">
            <p className="text-xl font-semibold">Karina Aruma W</p>
            <p className="font-medium text-sm text-neutral-300">karinaaruma@domain.com</p>
            <p className="font-medium text-sm text-neutral-300">Mahasiswa</p>
            <button className="text-sm md:text-base font-semibold flex items-center gap-2 bg-primary-4 hover:bg-primary-3 transition px-4 py-1 rounded-full">
                Edit <Icon icon="tabler:edit" className="w-5 h-5" />
            </button>
        </div>
    </div>
);

const AboutSection = () => (
    <div className="space-y-4">
        <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">About</p>
            <button className="text-sm md:text-base font-semibold flex items-center hover:text-primary-3 gap-2">
                Edit <Icon icon="tabler:edit" className="w-5 h-5 md:w-6 md:h-6" />
            </button>
        </div>
        <div className="bg-neutral-5 rounded-2xl p-6 md:p-8 max-w-full">
            <p className="text-sm font-medium text-neutral-1 text-justify leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla phasellus nisi ac commodo.
                Mi mattis amet interdum urna. Egestas amet id tincidunt nascetur imperdiet. Pretium sit tempor faucibus
                vestibulum at egestas mauris praesent bibendum. Lorem ipsum dolor sit amet consectetur. Odio dolor arcu
                ullamcorper dictum nulla phasellus nisi ac commodo. Mi mattis amet interdum urna. Egestas amet id
                tincidunt nascetur imperdiet.
            </p>
        </div>
    </div>
);

const Hero = () => {
    return (
        <section className="text-white">
            <div className="container mx-auto space-y-6">
                <div className="space-y-2">
                    <h6 className="text-2xl font-bold">Selamat Datang kembali, Karina Aruma!</h6>
                    <p>Yuk lanjutkan progres belajarmu hari ini!</p>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-6 xl:gap-0">
                    <div className="lg:w-2/5">
                        <UserProfile />
                    </div>

                    <div className="lg:w-4/5">
                        <AboutSection />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;