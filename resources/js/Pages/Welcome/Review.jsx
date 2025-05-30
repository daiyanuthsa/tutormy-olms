import React, { useState, useEffect, useMemo } from 'react';

const Review = () => {
    const testimonials = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla phasellus nisl ac commodo. Mi mattis amet interdum urna.",
            name: "Anak Budi",
            role: "Product Designer at BCC",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla phasellus nisl ac commodo. Mi mattis amet interdum urna.",
            name: "Ibu Budi",
            role: "Back-End Engineer at BCC",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla phasellus nisl ac commodo. Mi mattis amet interdum urna.",
            name: "Bapak Budi",
            role: "Product Manager at BCC",
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 4,
            text: "Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla phasellus nisl ac commodo. Mi mattis amet interdum urna.",
            name: "Budi Santoso",
            role: "UI/UX Designer at BCC",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 5,
            text: "Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla phasellus nisl ac commodo. Mi mattis amet interdum urna.",
            name: "Budiyono Siregar",
            role: "Frontend Developer at BCC",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width <= 1024) {
                setVisibleCount(2);
            } else {
                setVisibleCount(3);
            }
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    const maxIndex = useMemo(() => {
        return Math.ceil(testimonials.length / visibleCount) - 1;
    }, [testimonials.length, visibleCount]);

    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlay, maxIndex]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="bg-neutral-4 text-white overflow-hidden">
            <div className="container mx-auto py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

                    <div className="space-y-3 lg:w-1/3 xl:w-1/4">
                        <h2 className="text-4xl font-bold">Apa yang Mereka katakan tentang</h2>
                        <div className="text-2xl lg:text-4xl font-bold font-paytone">Tutormy.id</div>
                        <div className="flex items-center gap-2 flex-wrap">
                            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-orange-500 scale-125'
                                        : 'bg-orange-300 hover:bg-orange-400'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div
                        className="flex-1 overflow-hidden"
                        onMouseEnter={() => setIsAutoPlay(true)}
                    >
                        <div
                            className="flex gap-6 transition-transform duration-500 ease-in-out"
                            style={{
                                width: `${(testimonials.length / visibleCount) * 100}%`,
                                transform: `translateX(-${currentIndex * (100 / (testimonials.length / visibleCount))}%)`
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="bg-gray-700 rounded-lg flex flex-col justify-between basis-1/3">
                                    <p className="text-gray-200 px-3 py-5 text-sm leading-relaxed">
                                        {testimonial.text}
                                    </p>
                                    <div className="flex items-center gap-3 px-3 py-5 bg-neutral-4">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-white text-sm">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-gray-400 text-xs">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Review;