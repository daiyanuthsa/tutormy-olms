import { Icon } from '@iconify/react';
import React from 'react';

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
            <p className="text-lg font-semibold text-primary-3">{label}</p>
        </div>
    </div>
);

const Data = () => (
    <section>
        <div className="text-white space-y-14">
            <button className="bg-gradient-dark-down flex gap-2 lg:gap-3 items-center text-lg lg:text-2xl font-bold rounded-xl py-3 px-4">
                <Icon icon="logos:whatsapp-icon" className="w-7 h-7 lg:w-9 lg:h-9" />
                Chat
            </button>

            <div className="bg-[linear-gradient(to_right,#191B27,#292C40,#5A628D)] rounded-2xl px-6 lg:px-24 py-6 flex flex-col lg:flex-row justify-between gap-6 shadow-xl">
                {stats.map(({ icon, value, label }) => (
                    <StatItem key={icon} icon={icon} value={value} label={label} />
                ))}
            </div>
        </div>
    </section>
);

export default Data;