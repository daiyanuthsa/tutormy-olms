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
import GradientText from "@/Components/GradientText";
import { Icon } from "@iconify/react";

const TESTIMONIALS_PER_SLIDE = 3;
const SLIDE_INTERVAL = 3000;
const features = [
    {
        icon: "mdi:flash",
        title: "Akses Cepat",
        description:
            "Belajar Mudah dengan mentor terpercaya dengan akses yang cepat dan mudah hanya dalam satu genggaman tangan",
    },
    {
        icon: "mdi:account-group",
        title: "Belajar dengan Expert",
        description:
            "Mentor dan pengajar yang sudah nyata hingga sosial yang sesuai, cocok buat kamu langsung praktik dan lihat hasilnya",
    },
    {
        icon: "mdi:infinity",
        title: "Kemampuan Belajar Seumur Hidup",
        description:
            "Kami bisa mengakses konekatan tanpa batas waktu untuk focus berkembang bareng orang-orang yang punya satu tujuan sama!",
    },
    {
        icon: "mdi:book-open-page-variant",
        title: "Modul Pembelajaran hingga Materi",
        description:
            "Materi dan dasar yang mudah dipahami hingga video yang bisa diakses kapan saja",
    },
];

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

const PhotoReviewCard = () => {
    const scrollToPricelist = () => {
        const section = document.getElementById("pricelist");
        section?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section className="flex flex-col items-center space-y-8 h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute bottom-20 left-20 w-72 h-72 translate-y-full bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>
            {/* Content */}
            <div className="container h-full flex flex-col items-center justify-center text-center space-y-6 z-10 text-white">
                {/* divider */}
                <h2 className="text-center text-2xl lg:text-5xl font-bold">
                    <GradientText>Bukti Nyata Member</GradientText> Kami Setelah{" "}
                    <br /> Bergabung Bersama Kami!
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 h-full w-full">
                    <div className="flex flex-col justify-evenly ">
                        <div className="space-y-3">
                            <div className="w-12 h-12 border border-primary-3 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                <Icon
                                    icon={features[0].icon}
                                    className="text-white text-2xl"
                                ></Icon>
                            </div>
                            <h3 className="text-lg font-bold text-white text-left">
                                {features[0].title}
                            </h3>
                            <p className="text-gray-200 text-sm leading-relaxed text-left">
                                {features[0].description}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="w-12 h-12 border border-primary-3 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                <Icon
                                    icon={features[2].icon}
                                    className="text-white text-2xl"
                                ></Icon>
                            </div>
                            <h3 className="text-lg font-bold text-white text-left">
                                {features[2].title}
                            </h3>
                            <p className="text-gray-200 text-sm leading-relaxed text-left">
                                {features[2].description}
                            </p>
                        </div>
                    </div>

                    <div className=" w-full overflow-hidden">
                        <img
                            src="/assets/wa-hand-1.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col  text-right justify-evenly ">
                        <div className="space-y-3 items-end">
                            <div className="flex flex-col items-end">
                                <div className="w-12 h-12 border border-primary-3 rounded-2xl flex items-center justify-center self-end group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    <Icon
                                        icon={features[1].icon}
                                        className="text-white text-2xl"
                                    ></Icon>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white ">
                                {features[1].title}
                            </h3>
                            <p className="text-gray-200 text-sm leading-relaxed">
                                {features[1].description}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex flex-col items-end">
                                <div className="w-12 h-12 border border-primary-3 rounded-2xl flex items-center justify-center self-end group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    <Icon
                                        icon={features[3].icon}
                                        className="text-white text-2xl"
                                    ></Icon>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white ">
                                {features[3].title}
                            </h3>
                            <p className="text-gray-200 text-sm leading-relaxed">
                                {features[3].description}
                            </p>
                        </div>
                    </div>
                </div>
                {/* <img src="/assets/testimoni.webp" alt="Testimoni" /> */}

                <div className="flex mt-0 pt-0 h-32">
                    <div>
                        <PrimaryButton
                            onClick={scrollToPricelist}
                            variant="secondary"
                            className="rounded-2xl mb-4"
                        >
                            Langganan Sekarang
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

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


    

    return (
        <>
            <section className="text-white overflow-hidden flex items-center">
                <div className="container mx-auto py-16 lg:py-20 space-y-16">
                    <div className="space-y-5 flex flex-col items-left">
                        <h2 className="text-left text-2xl md:text-4xl lg:text-5xl font-bold">
                            Apa Kata <GradientText>Member!</GradientText>
                        </h2>
                        <p className="text-left lg:text-xl text-gray-300">
                            Review kepuasan dari para member yang telah
                            bergabung
                        </p>
                    </div>
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
                </div>
            </section>
            {/* <PhotoReviewCard /> */}
        </>
    );
};

export default Review;