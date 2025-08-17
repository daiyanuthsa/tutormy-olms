import React from "react";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { Icon } from "@iconify/react";

const CourseOverview = ({ course }) => (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
        <img
            src={`/storage/${course.thumbnail || "assets/hero.png"}`}
            alt={course.name}
            className="w-full max-w-lg h-44 lg:h-80 object-cover rounded-2xl"
        />
        <div className="space-y-5 w-full">
            <h1 className="text-2xl xl:text-4xl font-bold">{course.name}</h1>
            {/* <div className="flex items-center gap-5">
                <img
                    src="/assets/teacher.png"
                    alt="mentor"
                    className="w-14 h-14 rounded-full object-cover"
                />
                <div className="space-y-1 font-bold">
                    <p className="text-base lg:text-2xl">
                        {course.mentor_name}
                    </p>
                    <p className="text-sm">{course.mentor_title}</p>
                </div>
            </div> */}
            <div className="space-y-2 text-base">
                <p className="flex items-center gap-3">
                    <Icon icon="tabler:video-filled" className="w-5 h-5" />
                    {course.content_count} Video Pembelajaran
                </p>
                <p className="flex items-center gap-3">
                    <Icon icon="icons8:student" className="w-5 h-5" />
                    {course.student_count} Siswa
                </p>
            </div>
            <div className="flex flex-wrap gap-3">
                {course.is_enrolled ? (
                    <>
                        <Link href={`/courses/join/${course.slug}`}>
                            <PrimaryButton className="rounded-full">
                                Belajar Sekarang
                            </PrimaryButton>
                        </Link>
                        
                            <PrimaryButton
                                onClick={() =>
                                    window.open(course.group_url, "_blank")
                                }
                                className="rounded-full"
                            >
                                <Icon
                                    icon="logos:whatsapp-icon"
                                    className="w-6 h-6 mr-2"
                                />
                                Gabung Grup
                            </PrimaryButton>
                    </>
                ) : (
                    <Link href={`/courses/join/${course.slug}`}>
                        <PrimaryButton className="rounded-full">
                            Gabung Kelas
                        </PrimaryButton>
                    </Link>
                )}
            </div>
        </div>
    </div>
);

export default CourseOverview;
