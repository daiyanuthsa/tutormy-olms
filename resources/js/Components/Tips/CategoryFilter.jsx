import React, { useRef } from 'react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const handleMouseLeave = () => (isDragging.current = false);
    const handleMouseUp = () => (isDragging.current = false);
    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    return (
        <div
            ref={scrollRef}
            className="flex gap-6 lg:gap-12 overflow-x-auto no-scrollbar cursor-grab select-none"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <button
                onClick={() => onCategoryChange("")}
                className={`text-lg whitespace-nowrap transition ${
                    activeCategory === "" ? "text-primary-3" : "text-white"
                }`}
            >
                Semua
            </button>
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => onCategoryChange(cat.id)}
                    className={`text-lg whitespace-nowrap transition ${
                        activeCategory === cat.id
                            ? "text-primary-3"
                            : "text-white"
                    }`}
                >
                    {cat.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;