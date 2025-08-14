import React from 'react';

const CourseFilter = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <section className="overflow-x-auto">
            <div className="container">
                <div className="flex gap-6 lg:gap-12 whitespace-nowrap overflow-x-auto pb-2 scrollbar-hide">
                    <button
                        key={"semua-kategori"}
                        onClick={() => onCategoryChange("Semua Kategori")}
                        className={`text-base md:text-lg font-semibold transition-colors duration-200 whitespace-nowrap 
                                    ${
                                        activeCategory === "Semua Kategori"
                                            ? "text-primary-3"
                                            : "text-white hover:text-primary-3"
                                    }`}
                    >
                        Semua Kategori
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.slug}
                            onClick={() => onCategoryChange(category.name)}
                            className={`text-base md:text-lg font-semibold transition-colors duration-200 whitespace-nowrap 
                ${
                    activeCategory === category.name
                        ? "text-primary-3"
                        : "text-white hover:text-primary-3"
                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseFilter;