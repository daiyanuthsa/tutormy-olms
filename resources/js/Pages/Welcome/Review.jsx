import PrimaryButton from "@/Components/PrimaryButton";
import React from "react";

const Review = () => {
    const testimonials = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla phasellus nisl ac commodo. Mi mattis amet interdum urna.",
            name: "Rania Yasmin",
            role: "Product Designer at BCC",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla phasellus nisl ac commodo. Mi mattis amet interdum urna.",
            name: "Rania Yasmin",
            role: "Product Designer at BCC",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla phasellus nisl ac commodo. Mi mattis amet interdum urna.",
            name: "Rania Yasmin",
            role: "Product Designer at BCC",
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        },
    ];
    const handleScrollToPricelist = () => {
        const section = document.getElementById("pricelist");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="text-white overflow-hidden flex items-center">
            <div className="container mx-auto py-16 lg:py-20 space-y-16">
                <div className=" ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="rounded-2xl p-1 shadow-2xl"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #8b5cf6, #a855f7, #c084fc)",
                                    padding: "2px",
                                }}
                            >
                                <div className="bg-neutral-5 rounded-2xl h-full xl:h-80 flex flex-col justify-between p-6 lg:p-12">
                                    <div className="flex-1 mb-10 xl:mb-0">
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {testimonial.text}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover "
                                        />
                                        <div>
                                            <h4 className="font-semibold text-sm mb-1">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-gray-400 text-xs">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-8">
                    <h2 className="text-center text-white text-2xl lg:text-4xl font-bold">
                        Hasil yang mereka dapatkan setelah belajar + terapin
                        beberapa materi praktikal!
                    </h2>
                    <PrimaryButton
                        onClick={handleScrollToPricelist}
                        variant="secondary"
                        className="rounded-2xl"
                    >
                        Langganan Sekarang
                    </PrimaryButton>
                    <img src="/assets/testimoni.webp" alt="image" />
                </div>
            </div>
        </section>
    );
};

export default Review;
