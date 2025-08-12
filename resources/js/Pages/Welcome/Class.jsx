import React, { useState, useEffect } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import AOS from "aos";

const Class = ({ courses }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        AOS.init();
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();

        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const coursesToShow = isMobile ? courses.slice(0, 6) : courses;

    return (
        <section>
            <div className="container mx-auto text-white py-16 lg:py-20">
                <div>
                    <div className="space-y-5 flex flex-col items-center mb-12">
                        <h2
                            data-aos="zoom-in"
                            data-aos-delay="100"
                            className="text-center text-2xl lg:text-4xl font-bold lg:w-2/3"
                        >
                            Akses Modul Belajar Praktis Meningkatkan Omset
                            Bisnis dan Mendapatkan Penghasilan Tambahan
                        </h2>
                        <p
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            className="text-center lg:text-xl text-gray-300"
                        >
                            Ribuan pelajar dari berbagai daerah sudah
                            membuktikan, sekarang giliran kamu!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {coursesToShow.map((course) => (
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="500"
                                data-aos-delay={course.id * 200}
                                key={course.id}
                                className="bg-neutral-5 border-b-2 border-b-primary-2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="aspect-video">
                                    <img
                                        src={
                                            course.thumbnail
                                                ? `storage/${course.thumbnail}`
                                                : "/assets/placeholder.png"
                                        }
                                        alt={course.name}
                                        className="w-full h-full object-cover"
                                    ></img>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-base lg:text-2xl mb-2">
                                        {course.name}
                                    </h3>
                                    
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Class;
