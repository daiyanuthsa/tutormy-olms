import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { PortfolioGrid, EmptyState } from '../PortofolioComponents';
import ClassUser from '../ClassUser';

const navItems = [
    { id: 'profil', label: 'Profil' },
    { id: 'portofolio', label: 'Portofolio' },
    { id: 'kelas', label: 'Kelas yang di ikuti' }
];

const profileData = [
    { name: 'Andrean Hinata', role: 'Front-End Web Developer', avatar: '👨‍💻' },
    { name: 'Andrean Hinata', role: 'Visual Graphic', avatar: '🎨' },
    { name: 'Andrean Hinata', role: 'Visual Graphic', avatar: '🎨' }
];

const ProfileTab = () => (
    <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card title="Website">
            <IconList
                items={[
                    { icon: 'tabler:world', label: 'Website' },
                    { icon: 'mdi:blog-outline', label: 'Blog' },
                    { icon: 'qlementine-icons:resume-16', label: 'Resume' }
                ]}
            />
        </Card>

        <Card title="About">
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                    Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla phasellus nisl ac commodo...
                </p>
                <p>
                    Mi mattis amet interdum urna. Egestas amet id tincidunt nascetur imperdiet...
                </p>
            </div>
        </Card>

        <Card title="Profil Serupa">
            <div className="space-y-4">
                {profileData.map(({ name, role, avatar }, i) => (
                    <div
                        key={i}
                        className="flex items-center space-x-3 rounded-lg hover:text-secondary-2 transition-colors cursor-pointer"
                    >
                        <div className="w-10 h-10 bg-neutral-3 rounded-full flex items-center justify-center text-lg">
                            {avatar}
                        </div>
                        <div>
                            <p className="font-semibold text-sm">{name}</p>
                            <p className="text-xs font-medium">{role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    </div>
);

const PortfolioTab = () => {
    const [portfolios] = useState([]);
    return (
        <div>
            {portfolios.length === 0 ? (
                <EmptyState />
            ) : (
                <PortfolioGrid portfolios={portfolios} />
            )}
        </div>
    );
};

const KelasTab = () => (
    <ClassUser isPublicView={true} hideHeader={true} />
)

const Card = ({ title, children }) => (
    <div className="bg-neutral-4 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        {children}
    </div>
);

const IconList = ({ items }) => (
    <div className="space-y-4">
        {items.map(({ icon, label }, i) => (
            <div
                key={i}
                className="flex text-lg items-center space-x-3 rounded-lg hover:text-secondary-2 transition-colors cursor-pointer"
            >
                <div className="w-6 h-6">
                    <Icon icon={icon} className="w-6 h-6" />
                </div>
                <span>{label}</span>
            </div>
        ))}
    </div>
);

const Details = () => {
    const [activeTab, setActiveTab] = useState('profil');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profil':
                return <ProfileTab />;
            case 'portofolio':
                return <PortfolioTab />;
            case 'kelas':
                return <KelasTab />;
            default:
                return null;
        }
    };

    return (
        <section className="text-white min-h-screen">
            <div className="container mx-auto">
                <nav className="flex space-x-8 border-b border-neutral-2 mb-8">
                    {navItems.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => setActiveTab(id)}
                            className={`pb-2 text-sm lg:text-lg font-bold transition-colors relative ${activeTab === id
                                ? 'border-b-2 border-primary-2'
                                : 'text-secondary-1 hover:text-secondary-2'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </nav>

            </div>
            <div className="space-y-6">{renderTabContent()}</div>
        </section>
    );
};

export default Details;