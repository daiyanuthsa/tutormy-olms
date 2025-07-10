import React from "react";
import { Icon } from "@iconify/react";
import PrimaryButton from "@/Components/PrimaryButton";
import PopUpLayout from "@/Layouts/PopUpLayout";

const WelcomeClass = ({ course, studentName, sectionId, contentId }) => {
    return (
        <PopUpLayout>
            <div className="flex items-center justify-center">
                <div className="bg-neutral-4 w-full py-8 px-5 space-y-4 -rotate-1 flex flex-col items-center justify-center rounded-2xl text-center">
                    <img src="/assets/hand.webp" alt="icon" className="w-24 md:w-28" />

                    <div className="space-y-1">
                        <div className="text-2xl md:text-3xl font-bold text-white">
                            Waktunya Upgrade Skill!
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-white">
                            Welcome to Class
                        </div>
                    </div>

                    <div className="text-sm md:text-base font-medium text-gray-300 max-w-xl">
                        Yuk asah skill terbaru bareng mentor berpengalaman! 🚀
                        Gabung sekarang dan upgrade kemampuanmu ke level selanjutnya!
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full">
                        <div className="w-full md:w-24 h-24 md:h-28 rounded-2xl overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                            <img
                                src="/assets/hero-auth.webp"
                                alt="Course"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 text-left space-y-2 w-full">
                            <div>
                                <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                                    {course.category.name}
                                </span>
                            </div>
                            <div className="text-white text-base font-semibold">
                                {course.name}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <Icon icon="mdi:video-outline" className="w-4 h-4" />
                                <span>26 Video Pembelajaran</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 md:gap-6 w-full justify-center">
                        <PrimaryButton
                            onClick={() => {
                                window.location.href = "/courses";
                            }}
                            variant="outline"
                            className="rounded-full text-white w-full md:w-auto"
                        >
                            Lihat Kelas Lainnya
                        </PrimaryButton>
                        <PrimaryButton
                            onClick={() => {
                                window.location.href = `/courses/learning/${course.slug}/${sectionId}/${contentId}`;
                            }}
                            className="rounded-full w-full md:w-auto"
                        >
                            Mulai Belajar
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </PopUpLayout>
    );
};

export default WelcomeClass;