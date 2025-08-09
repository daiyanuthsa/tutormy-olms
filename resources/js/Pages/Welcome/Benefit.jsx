import PrimaryButton from "@/Components/PrimaryButton";
import React from "react";

const Benefit = () => {
    const handleScrollToPricelist = () => {
        const section = document.getElementById("pricelist");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <section className="relative text-white py-16 lg:py-20">
                <div className="relative container w-full">

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
