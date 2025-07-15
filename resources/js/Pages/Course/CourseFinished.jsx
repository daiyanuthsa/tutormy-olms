import PopUpLayout from "@/Layouts/PopUpLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Icon } from "@iconify/react";
import React from "react";

const CourseFinished = ({ course }) => {
    return (
        <PopUpLayout>
            <div className="flex items-center text-white justify-center">
                <div className="bg-neutral-4 w-full py-8 px-5 space-y-4 flex flex-col items-center justify-center rounded-2xl text-center">
                    <img
                        src="/assets/winner-cup.webp"
                        alt="icon"
                        className="w-24 md:w-28"
                    />

                    <div className="space-y-1">
                        <div className="text-2xl md:text-3xl font-bold ">
                            Selamat !
                        </div>
                        <div className="text-2xl md:text-3xl font-bold ">
                            Anda telah menyelesaikan kelas
                        </div>
                    </div>

                    <div className="text-sm md:text-base font-medium text-gray-300 max-w-md">
                        Anda telah menyelesaikan course ini dengan baik. Yuk,
                        claim sertifikat Anda sekarang sebagai bukti pencapaian
                        dan tambahan portofolio yang keren!
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-4 w-full">
                        <div className="w-full md:w-36 h-24 md:h-28 rounded-2xl overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                            <img
                                src={course.thumbnail}
                                alt={course.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 text-left space-y-2">
                            <div>
                                <span className="bg-purple-500  text-xs px-3 py-1 rounded-full font-medium">
                                    {course.category.name}
                                </span>
                            </div>
                            <div className=" text-base font-semibold">
                                {course.name}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <Icon
                                    icon="mdi:video-outline"
                                    className="w-4 h-4"
                                />
                                <span>
                                    {course.contentsCount} Video Pembelajaran
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 md:gap-5 w-full justify-center">
                        <PrimaryButton
                            variant="outline"
                            className="rounded-full text-white w-full md:w-auto"
                            onClick={() => {
                                window.location.href = `/courses/certificate/${course.slug}`;
                            }}
                        >
                            Download Sertifikat
                        </PrimaryButton>
                        <PrimaryButton
                            className="rounded-full w-full md:w-auto"
                            onClick={() => {
                                window.location.href = "/courses";
                            }}
                        >
                            Course Lainnya
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </PopUpLayout>
    );
};

export default CourseFinished;

// import MainLayout from "@/Layouts/MainLayout";
// import React from "react";

// const CourseFinished = (course) => {
//     return (
//         <MainLayout className=" ">
//             <h1 className=" text-2xl font-bold mb-4">
//                 Kelas Selesai
//             </h1>
//             <pre>{JSON.stringify(course, null, 2)}</pre>
//         </MainLayout>
//     );
// };

// export default CourseFinished;
