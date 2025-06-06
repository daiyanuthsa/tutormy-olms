import React from 'react';

const CourseFilter = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <section>
            <div className="container flex flex-wrap justify-center md:justify-start gap-12 text-white">
                {categories.map((category) => (
                    <button
                        key={category.slug}
                        onClick={() => onCategoryChange(category.name)}
                        className={`font-semibold text-lg 
                            ${activeCategory === category.name
                                ? 'text-primary-3'
                                : 'hover:text-primary-3'
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default CourseFilter;