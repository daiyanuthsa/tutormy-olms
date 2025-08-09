import React, { useEffect, useState, useMemo } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

const TESTIMONIALS_PER_SLIDE = 3;
const SLIDE_INTERVAL = 3000;

const ReviewCard = ({ content, image_url, name, ocupation }) => (
    <div className="rounded-2xl p-[2px] shadow-2xl bg-gradient-to-br from-primary-4 to-primary-2">
        <div className="bg-neutral-5 rounded-2xl h-full min-h-80 flex flex-col p-6 lg:p-12">
            {/* Content area - flexible height */}
            <div className="flex-grow min-h-0 mb-6">
                <p className="text-gray-300 text-sm leading-relaxed h-full">
                    {content}
                </p>
            </div>

            {/* Footer - always at bottom */}
            <div className="flex items-center gap-3 flex-shrink-0">
                <img
                    src={
                        "storage/" + image_url ||
                        "https://via.placeholder.com/48"
                    }
                    alt={name || "User"}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h4 className="font-semibold text-sm mb-1 text-white">
                        {name || "John Doe"}
                    </h4>
                    <p className="text-gray-400 text-xs">{ocupation || "Role"}</p>
                </div>
            </div>
        </div>
    </div>
);

const Review = ({ testimonials }) => {
    const [startIndex, setStartIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + TESTIMONIALS_PER_SLIDE) % testimonials.length);
        }, SLIDE_INTERVAL);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const displayedTestimonials = useMemo(() => {
        const endIndex = startIndex + TESTIMONIALS_PER_SLIDE;
        const current = testimonials.slice(startIndex, endIndex);
        const remaining = TESTIMONIALS_PER_SLIDE - current.length;
        return remaining > 0
            ? [...current, ...testimonials.slice(0, remaining)]
            : current;
    }, [startIndex, testimonials]);

    const scrollToPricelist = () => {
        const section = document.getElementById("pricelist");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="text-white overflow-hidden flex items-center">
            <div className="container mx-auto py-16 lg:py-20 space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 transition-all duration-500 ease-in-out">
                    {displayedTestimonials.map((testimonial) => (
                        <ReviewCard key={testimonial.id} {...testimonial} />
                    ))}
                </div>

                <div className="flex flex-col items-center space-y-8">
                    <h2 className="text-center text-2xl lg:text-4xl font-bold">
                        Hasil yang mereka dapatkan setelah belajar + terapin beberapa materi praktikal!
                    </h2>
                    <PrimaryButton
                        onClick={scrollToPricelist}
                        variant="secondary"
                        className="rounded-2xl"
                    >
                        Langganan Sekarang
                    </PrimaryButton>
                    <img src="/assets/testimoni.webp" alt="Testimoni" />
                </div>
            </div>
        </section>
    );
};

export default Review;