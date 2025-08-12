import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import Faq from "../../../../public/js/data/Faq";
import { Icon } from "@iconify/react";
import AOS from "aos";
import GradientText from "@/Components/GradientText";

const Question = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section className="overflow-hidden flex justify-center">
            <div className=" container grid grid-cols-1 md:grid-cols-2 ">
                <div className="relative text-white py-16 lg:py-20 flex flex-col items-start gap-10">
                    <div
                        data-aos="zoom-in"
                        className="absolute left-[-190px] top-60 w-60 h-60 lg:w-80 lg:h-96 bg-purple-700 opacity-40 blur-3xl rounded-full z-0"
                    />
                    <div
                        data-aos="zoom-in"
                        className="absolute right-[-900px] top-10 w-60 h-60 lg:w-80 lg:h-96 bg-purple-700 opacity-40 blur-3xl rounded-full z-0"
                    />
                    <div className="text-left space-y-2 lg:space-y-4 max-w-3xl z-10">
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-white text-2xl lg:text-6xl font-semibold"
                        >
                            Frequently
                            <br />
                            <GradientText className="font-bold">Ask Question</GradientText>
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="lg:text-xl text-gray-300"
                        >
                            Punya pertanyaan lainnya? Silakan hubungi kami
                            melalui
                        </p>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            className="flex justify-start pt-4"
                        >
                            <button
                                onClick={() =>
                                    window.open(
                                        "https://wa.me/62895808209312?text=Halo%20saya%20ingin%20bertanya",
                                        "_blank"
                                    )
                                }
                                className="group inline-flex items-center gap-3 bg-gradient-light text-md lg:text-xl font-bold rounded-xl py-2 px-4 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/25 active:scale-95 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600"
                            >
                                <Icon
                                    icon="ic:baseline-whatsapp"
                                    className="w-6 h-6 lg:w-9 lg:h-9"
                                />
                                Langsung tanya admin!
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative  text-white py-16 lg:py-20 flex flex-col items-center gap-10">
                    <div className="space-y-4 max-w-3xl w-full z-10">
                        {Faq.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    key={index}
                                    className="bg-neutral-4 rounded-lg px-6 py-5 relative overflow-hidden transition-all duration-300"
                                >
                                    <div className="absolute left-3 top-5 bottom-5 w-[2px] bg-primary-1 rounded-full" />

                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="w-full flex items-center justify-between text-left"
                                    >
                                        <span className="lg:text-xl text-sm font-medium text-primary-2 pr-4">
                                            {item.question}
                                        </span>
                                        <div
                                            className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 ${
                                                isOpen
                                                    ? "bg-primary-2"
                                                    : "bg-neutral-6"
                                            }`}
                                        >
                                            <Plus
                                                className={`w-6 h-6 transition-colors duration-200 ${
                                                    isOpen
                                                        ? "text-white"
                                                        : "text-neutral-1"
                                                }`}
                                            />
                                        </div>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${
                                            isOpen
                                                ? "max-h-96 opacity-100 pt-4"
                                                : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        <p className="leading-relaxed text-xs md:text-sm lg:text-base">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Question;
