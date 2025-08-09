import React, { useState } from "react";
import { Plus } from "lucide-react";
import Faq from "../../../../public/js/data/Faq";
import { Icon } from "@iconify/react";

const Question = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="overflow-hidden flex justify-center">
            <div className="relative container mx-auto text-white py-16 lg:py-20 flex flex-col items-center gap-10">
                <div className="absolute right-[-190px] top-16 w-60 h-60 lg:w-80 lg:h-96 bg-purple-700 opacity-40 blur-3xl rounded-full z-0" />

                <div className="text-center space-y-2 lg:space-y-4 max-w-3xl z-10">
                    <p className="text-primary-2 text-sm font-semibold">
                        Frequently Ask Question
                    </p>
                    <h2 className="text-primary-1 text-2xl lg:text-4xl font-bold">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="lg:text-xl text-gray-300">
                        Punya pertanyaan lainnya? Silakan hubungi kami melalui
                    </p>
                    <div className="flex justify-center pt-4">
                        <button
                            onClick={() =>
                                window.open(
                                    "https://wa.me/62895808209312?text=Halo%20saya%20ingin%20bertanya",
                                    "_blank"
                                )
                            }
                            className="inline-flex items-center gap-3 bg-gradient-light text-md lg:text-xl font-bold rounded-xl py-2 px-4"
                        >
                            <Icon
                                icon="ic:baseline-whatsapp"
                                className="w-6 h-6 lg:w-9 lg:h-9"
                            />
                            Langsung tanya admin!
                        </button>
                    </div>
                </div>

                <div className="space-y-4 max-w-3xl w-full z-10">
                    {Faq.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-neutral-4 rounded-lg px-6 py-5 relative overflow-hidden transition-all duration-300"
                            >
                                <div className="absolute left-3 top-5 bottom-5 w-[2px] bg-primary-1 rounded-full" />

                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full flex items-center justify-between text-left"
                                >
                                    <span className="lg:text-xl text-sm font-medium text-primary-1 pr-4">
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
        </section>
    );
};

export default Question;
