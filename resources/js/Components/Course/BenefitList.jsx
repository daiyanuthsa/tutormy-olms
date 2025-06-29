import React from 'react';
import { Icon } from '@iconify/react';

const BenefitList = ({ items }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
                <div className="p-1 w-7 h-7 flex items-center justify-center rounded-full outline outline-1 outline-offset-[-2px] outline-primary-1">
                    <Icon icon="mdi:check-bold" className="text-primary-2 w-5 h-5" />
                </div>
                <p className="text-sm lg:text-base font-semibold">{item}</p>
            </div>
        ))}
    </div>
);

export default BenefitList;
