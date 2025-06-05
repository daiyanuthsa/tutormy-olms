import { Icon } from '@iconify/react';
import React from 'react';
import Profile from "../../../../public/assets/teacher.png"

const stats = [
    { icon: 'solar:book-linear', value: '10K+', label: 'Total Courses' },
    { icon: 'mdi:account-multiple', value: '25K+', label: 'Active Students' },
    { icon: 'mdi:teach', value: '500+', label: 'Professional Mentors' },
];

const StatItem = ({ icon, value, label }) => (
    <div className="flex items-center gap-6">
        <div className="bg-purple-500 rounded-full p-3">
            <Icon icon={icon} className="text-white w-6 h-6" />
        </div>
        <div>
            <h3 className="text-xl lg:text-4xl font-semibold">{value}</h3>
            <p className="lg:text-lg font-semibold text-primary-3">{label}</p>
        </div>
    </div>
);

const MasterTeacherCard = ({ name, role }) => (
    <div className="rounded-2xl relative overflow-hidden h-36 md:h-48 bg-gradient-to-br from-purple-100 to-purple-200">
        <img
            src={Profile}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute w-32 md:w-40 lg:w-[130px] xl:w-44 bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-gradient-to-b from-[#A157E4] to-[#59307E] text-white rounded-full px-2 xl:px-7 py-2 text-center">
                <h3 className="font-semibold text-xs xl:text-sm">{name}</h3>
                <p className="text-xs font-medium opacity-90">{role}</p>
            </div>
        </div>
    </div>
);


const Data = () => (
    <section className="container text-white space-y-8 lg:space-y-28">
        <button className="bg-gradient-dark-down fixed flex gap-2 lg:gap-3 items-center text-lg lg:text-2xl font-bold rounded-xl py-1 lg:py-2 px-4 bottom-10 z-50">
            <Icon icon="logos:whatsapp-icon" className="w-6 h-6 lg:w-9 lg:h-9" />
            Chat
        </button>

        <div className="bg-[linear-gradient(to_right,#191B27,#292C40,#5A628D)] rounded-2xl px-6 lg:px-24 py-6 flex flex-col md:flex-row justify-between gap-6 shadow-xl">
            {stats.map(({ icon, value, label }) => (
                <StatItem key={icon} icon={icon} value={value} label={label} />
            ))}
        </div>


        <div className="relative bg-gradient-to-b from-[#24063A] to-[#11141D] rounded-3xl px-5 py-7 lg:px-16 lg:py-12 text-center overflow-hidden">
            <div className="absolute top-[-150px] left-1/2 transform -translate-x-1/2 w-[400px] h-[250px] bg-purple-700 opacity-30 blur-3xl rounded-full z-0"></div>
            <div className="relative z-10">
                <h2 className="text-2xl lg:text-4xl font-bold mb-6 xl:px-32 2xl:px-60">
                    Master Teacher yang akan membantu
                    kamu selama proses belajar !
                </h2>
                <p className="lg:text-xl mb-7 opacity-90 xl:px-40 2xl:px-80">
                    Yuk belajar bareng Master Teacher kami dan raih skill yang
                    kamu butuhkan untuk masa depan cerahmu!
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <MasterTeacherCard
                            key={index}
                            name="Ratna Wijayanti"
                            role="Product Designer"
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Data;