import React from 'react';
import ApplicationLogo from '../ApplicationLogo';

export default function CategorySidebar({ currentCategory, onCategorySelect }) {
    const categories = [
        { name: 'Discover', slug: 'discover' },
        { name: 'Design', slug: 'design' },
        { name: 'Code', slug: 'code' },
        { name: 'Soft Skills', slug: 'soft-skills' },
        { name: 'User-Interface', slug: 'user-interface' },
        { name: 'User-Experience', slug: 'user-experience' },
        { name: 'Front-End', slug: 'front-end' },
        { name: 'Back-End', slug: 'back-end' },
        { name: 'Software', slug: 'software' },
    ];

    const isActiveCategory = (categoryName) => {
        if (!currentCategory) return false;
        if (currentCategory === categoryName) return true;
        const normalizedCurrent = currentCategory.toLowerCase().replace(/[-\s]/g, '-');
        const normalizedCategory = categoryName.toLowerCase().replace(/[-\s]/g, '-');

        return normalizedCurrent === normalizedCategory;
    };

    return (
        <section className='space-y-9'>
            <ApplicationLogo />
            <div class="text-2xl font-bold">Kategori</div>
            <nav className="space-y-5">
                {categories.map((category) => {
                    const isActive = isActiveCategory(category.name);

                    return (
                        <button
                            key={category.slug}
                            onClick={() => onCategorySelect && onCategorySelect(category.slug)}
                            className={`
                                w-full text-left text-lg font-semibold transition-all duration-200
                                ${isActive
                                    ? 'text-white'
                                    : 'text-neutral-2'
                                }
                            `}
                        >
                            {category.name}
                        </button>
                    );
                })}
            </nav>
        </section>
    );
}