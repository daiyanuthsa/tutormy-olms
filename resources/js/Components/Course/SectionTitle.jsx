import React from 'react';

const SectionTitle = ({ title, className = '' }) => {
    return (
        <h2 className={`text-white text-2xl font-bold ${className}`}>
            {title}
        </h2>
    );
};

export default SectionTitle;