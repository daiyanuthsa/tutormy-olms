import React from 'react';
import { Icon } from '@iconify/react';

const UserInfo = () => (
    <div className="flex items-center gap-9">
        <img
            src="/assets/teacher.png"
            alt="profile"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
        />
        <div className="space-y-2">
            <p className="text-xl font-semibold">Karina Aruma W</p>
            <p className="font-medium text-sm text-neutral-300">karinaaruma@domain.com</p>
            <p className="font-medium text-sm text-neutral-300">Mahasiswa</p>
            <ContactButtons />
        </div>
    </div>
);

const ContactButtons = () => (
    <div className="flex items-center gap-2.5">
        <button className="btn-primary">Contact</button>
        <button className="btn-outline">Resume</button>
    </div>
);

const UserDetails = () => (
    <div className="space-y-3">
        <InfoRow label="Umur" value="20 Tahun" />
        <InfoRow label="Domisili" value="Malang" />
        <InfoRow label="Tahun Pengalaman" value="2 Tahun" />
    </div>
);

const InfoRow = ({ label, value }) => (
    <div className="flex justify-between lg:gap-8 items-center">
        <span className="font-semibold">{label}</span>
        <span className="text-sm a font-medium text-primary-1">{value}</span>
    </div>
);


const SocialLinks = () => (
    <div className="mt-6 lg:mt-10">
        <div className="flex items-center lg:justify-center gap-4">
            <span className="font-semibold">Contact Me</span>
            <a href="#" aria-label="LinkedIn">
                <Icon icon="ri:linkedin-fill" width="20" height="20" color="white" />
            </a>
            <a href="#" aria-label="Instagram">
                <Icon icon="ri:instagram-fill" width="20" height="20" color="white" />
            </a>
        </div>
    </div>
);

const Hero = () => {
    return (
        <section className="text-white">
            <div className="container mx-auto space-y-6">
                <div className="bg-neutral-4 px-5 lg:px-8 py-5 rounded-xl">
                    <div className="space-y-2">
                        <h6 className="text-2xl font-bold">Selamat Datang kembali, Karina Aruma!</h6>
                        <p>Yuk lanjutkan progres belajarmu hari ini!</p>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between space-y-8">
                        <UserInfo />
                        <div>
                            <UserDetails />
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;