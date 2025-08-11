import React, { useEffect, useState, useMemo, useRef } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

const TESTIMONIALS_PER_SLIDE = 3;
const SLIDE_INTERVAL = 3000;

const ReviewCard = ({ content, image_url, name, ocupation }) => (
    <div className="rounded-2xl p-[2px] shadow-2xl bg-gradient-to-br from-primary-4 to-primary-2 w-full flex">
        <div className="bg-neutral-5 rounded-2xl h-full min-h-80 flex flex-col p-6 lg:p-12">
            {/* Content area - flexible height */}
            <div className="flex-1 mb-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                    {content}
                </p>
            </div>

            {/* Footer - always at bottom */}
            <div className="flex items-center gap-3 flex-shrink-0 mt-auto">
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
                    <p className="text-gray-400 text-xs">
                        {ocupation || "Role"}
                    </p>
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
    const plugin = useRef(
        Autoplay({
            delay: 3000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
        })
    );


    const scrollToPricelist = () => {
        const section = document.getElementById("pricelist");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="text-white overflow-hidden flex items-center">
            <div className="container mx-auto py-16 lg:py-20 space-y-16">
                <div className="space-y-5 flex flex-col items-left">
                    <h2 className="text-left text-2xl md:text-4xl lg:text-5xl font-bold">
                        Apa Kata <span className="text-primary-3">Member!</span>
                    </h2>
                    <p className="text-left lg:text-xl text-gray-300">
                        Review kepuasan dari para member yang telah bergabung
                    </p>
                </div>
                {/* Testimonials grid */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 transition-all duration-500 ease-in-out">
                    {displayedTestimonials.map((testimonial) => (
                        <ReviewCard key={testimonial.id} {...testimonial} />
                    ))}
                </div> */}
                {/* Testimonials Carousel */}
                <div className="w-full">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                            skipSnaps: false,
                        }}
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent className="-ml-6">
                            {testimonials.map((testimonial) => (
                                <CarouselItem
                                    key={testimonial.id}
                                    className="pl-6 md:basis-1/2 lg:basis-1/3 flex"
                                >
                                    <div className="w-full flex">
                                        <ReviewCard {...testimonial} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Navigation buttons */}
                        <CarouselPrevious className="left-2 bg-primary-3 border-primary-3 text-white hover:bg-primary-2 hover:border-primary-2" />
                        <CarouselNext className="right-2 bg-primary-3 border-primary-3 text-white hover:bg-primary-2 hover:border-primary-2" />
                    </Carousel>
                </div>

                <div className="flex flex-col items-center space-y-8">
                    {/* divider */}
                    <h2 className="text-center text-2xl lg:text-5xl font-bold">
                        <span className="text-primary-3">Bukti Nyata Member</span> Kami Setelah <br /> Bergabung Bersama Kami!
                    </h2>
                    <img src="/assets/testimoni.webp" alt="Testimoni" />
                    <PrimaryButton
                        onClick={scrollToPricelist}
                        variant="secondary"
                        className="rounded-2xl"
                    >
                        Langganan Sekarang
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Review;