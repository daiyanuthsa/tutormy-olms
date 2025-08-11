import PrimaryButton from "@/Components/PrimaryButton";
import React, { useEffect } from "react";
import AOS from "aos";

const Benefit = () => {
    const handleScrollToPricelist = () => {
        const section = document.getElementById("pricelist");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        AOS.init(); 
    }, []);
    return (
        <>
            <section className="relative text-white py-16 lg:py-20">
                <div
                    data-aos="zoom-in"
                    className="absolute left-[-190px] top-16 w-60 h-60 lg:w-80 lg:h-96 bg-secondary-4 opacity-40 blur-3xl rounded-full z-0"
                />
                <div
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-center"
                    className="relative container w-full"
                >
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcSet="/assets/quote-lg.webp"
                        />
                        <img
                            src="/assets/quote-med.webp"
                            alt="benefit"
                            className="w-full h-auto object-cover"
                        />
                    </picture>

                    {/* <div className="absolute inset-0 flex flex-col gap-1 lg:gap-6 items-center justify-center text-center container z-20">
                        <h2 className="text-sm lg:text-4xl font-bold max-w-4xl">
                            "The people who are crazy enough to think they can
                            change the world are the ones who do."
                        </h2>
                        <p className="text-xs lg:text-2xl font-bold">
                            -Steve Jobs-
                        </p>

                        <PrimaryButton
                            onClick={handleScrollToPricelist}
                            className="rounded-2xl"
                        >
                            Langganan Sekarang
                        </PrimaryButton>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Benefit;
