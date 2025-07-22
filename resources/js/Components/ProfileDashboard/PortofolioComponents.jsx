import React from 'react';
import { Icon } from '@iconify/react';

export const EmptyState = () => (
    <div className="flex flex-col items-center justify-center space-y-2">
        <div className="w-16 h-16 bg-neutral-3 rounded-full flex items-center justify-center">
            <Icon icon="material-symbols:folder-outline" className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-neutral-1 text-lg">Belum ada portofolio</p>
    </div>
);

export const PortfolioCard = ({ portfolio }) => (
    <div className="bg-neutral-3 rounded-xl overflow-hidden">
        <img src="/assets/hero.png" alt="portfolio" className="rounded-xl w-full h-72 object-cover" />
        <div className="flex items-center justify-between p-4">
            <div>
                <h3 className="font-semibold ">{portfolio.name}</h3>
            </div>
            <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-primary-3 hover:bg-primary-4 p-2 rounded-full transition-colors">
                    <Icon icon="material-symbols:arrow-outward" className="w-4 h-4" />
                </button>
            </a>
        </div>
    </div>
);

export const PortfolioGrid = ({ portfolio }) => {
    console.log(portfolio);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioCard portfolio={portfolio} />
        </div>
    );
};
