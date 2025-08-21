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

const ReviewCard = ({ content, image_url, name, occupation }) => {
    return (
        <div className="rounded-2xl p-[2px] shadow-2xl bg-gradient-to-br from-primary-4 to-primary-2 w-full">
            <div className="bg-neutral-5 rounded-2xl h-full min-h-80 flex flex-col p-6 lg:p-12">
                <div className="flex-1 mb-6">
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {content}
                    </p>
                </div>

                <div className="flex items-center gap-3 mt-auto">
                    <img
                        src={
                            image_url
                                ? `/storage/${image_url}`
                                : "https://via.placeholder.com/48"
                        }
                        alt={name || "User"}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-semibold text-sm mb-1 text-white">
                            {name || "John Doe"}
                        </h4>
                        <p className="text-gray-400 text-xs">
                            {occupation || "Role"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const PhotoReviewCard = () => {
    const [photoUrl, setPhotoUrl] = useState("");
    const plugin = useRef(
        Autoplay({
            delay: 3000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
        })
    );
    useEffect(() => {
        setPhotoUrl("/assets/chat1.png");
    }, []);

    const scrollToPricelist = () =>
        document.getElementById("pricelist")?.scrollIntoView({ behavior: "smooth" });

    return (
        <section className="relative flex flex-col items-center space-y-8 min-h-screen px-4 md:px-8">
            <div className="absolute inset-0">
                <div className="absolute bottom-80 left-10 md:left-20 w-48 h-48 md:w-72 md:h-72 translate-y-full bg-purple-500/20 rounded-full blur-3xl" />
            </div>
            <div className="container relative flex flex-col items-center justify-center text-center space-y-6 z-10 text-white py-12">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
                    <GradientText>Bukti Nyata Member</GradientText> Kami Setelah{" "}
                    <br className="hidden md:block" /> Bergabung Bersama Kami!
                </h2>

                <div className="flex flex-col lg:flex-row w-full items-center gap-4 lg:gap-0">
                    <div className="flex-1 flex flex-col gap-8">
                        {[features[0], features[2]].map((f, i) => (
                            <div key={i} className="space-y-3 text-left">
                                <div className="w-12 h-12 border border-primary-3 rounded-2xl flex items-center justify-center">
                                    <Icon
                                        icon={f.icon}
                                        className="text-white text-2xl"
                                    />
                                </div>
                                <h3 className="text-lg font-bold">{f.title}</h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {f.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex-[2] flex justify-center items-center">
                        <Carousel
                            className="w-full max-w-lg"
                            opts={{
                                align: "center",
                                loop: true,
                                skipSnaps: false,
                            }}
                            plugins={[plugin.current]}
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                        >
                            <CarouselContent className="flex items-center">
                                <CarouselItem className="flex justify-center">
                                    <div className="flex justify-center w-full">
                                        <img
                                            src={photoUrl}
                                            alt="Member Testimonial"
                                            className="w-full max-w-sm h-auto object-contain rounded-2xl"
                                        />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="flex justify-center">
                                    <div className="flex justify-center w-full">
                                        <img
                                            src="/assets/chat2.png"
                                            alt="Member Testimonial"
                                            className="w-full max-w-sm h-auto object-contain rounded-2xl"
                                        />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="flex justify-center">
                                    <div className="flex justify-center w-full">
                                        <img
                                            src="/assets/chat3.png"
                                            alt="Member Testimonial"
                                            className="w-full max-w-sm h-auto object-contain rounded-2xl"
                                        />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>

                    <div className="flex-1 flex flex-col gap-8 text-right">
                        {[features[1], features[3]].map((f, i) => (
                            <div key={i} className="space-y-3">
                                <div className="flex justify-end">
                                    <div className="w-12 h-12 border border-primary-3 rounded-2xl flex items-center justify-center">
                                        <Icon
                                            icon={f.icon}
                                            className="text-white text-2xl"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold">{f.title}</h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {f.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <PrimaryButton
                        onClick={scrollToPricelist}
                        variant="secondary"
                        className="rounded-2xl px-6 py-3 text-base md:text-lg"
                    >
                        Langganan Sekarang
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
};

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

                            <CarouselPrevious className="left-2 bg-primary-3 border-primary-3 text-white hover:bg-primary-2 hover:border-primary-2" />
                            <CarouselNext className="right-2 bg-primary-3 border-primary-3 text-white hover:bg-primary-2 hover:border-primary-2" />
                        </Carousel>
                    </div>
                </div>
            </section>
            <div className="py-20">
                <PhotoReviewCard />
            </div>
        </>
    );
};

export default Review;