import React, { useState, useEffect } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';

const Class = ( { courses }) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const coursesToShow = isMobile ? courses.slice(0, 6) : courses;

    return (
        <section>
            <div className="container mx-auto text-white py-16 lg:py-20">
                <div>
                    <div className="space-y-5 flex flex-col items-center mb-12">
                        <h2 className="text-center text-2xl lg:text-4xl font-bold lg:w-2/3">
                            Belajar Nggak Pernah Semudah Ini! Yuk Jelajahi
                            Ratusan Video di TutorMy.id!
                        </h2>
                        <p className="text-center lg:text-xl text-gray-300">
                            Ribuan pelajar sudah membuktikan, sekarang giliran
                            kamu belajar bareng TutorMy.id!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {coursesToShow.map((course) => (
                            <div
                                key={course.id}
                                className="bg-neutral-5 border-b-2 border-b-primary-2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="aspect-video">
                                    <img
                                        src={course.thumbnail ? `storage/${course.thumbnail}` : '/assets/placeholder.png'}
                                        alt={course.name}
                                        className="w-full h-full object-cover"
                                    ></img>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-xs lg:text-lg mb-2">
                                        {course.name}
                                    </h3>
                                    <p className="bg-neutral-700 px-2 py-1 font-bold rounded-full text-xs lg:text-sm inline-block max-w-max">
                                        {course.section_content_count + " Materi"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <div className="text-center text-2xl lg:text-4xl font-semibold">
                            Modul + materinya hingga seperti "NETFLIX" yang
                            tentunya sesuai kebutuhan indutri & tren!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Class;