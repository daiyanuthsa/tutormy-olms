import React, { useMemo, useState } from "react";
import { Icon } from "@iconify/react";

const courses = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: "Product Development Series",
    lessons: "180",
    progress: i < 4 ? 50 : 100,
    status: i < 4 ? "ongoing" : "completed",
    image: "/api/placeholder/300/200",
}));

const FilterButton = ({ label, filter, activeFilter, setActiveFilter }) => {
    const isActive = filter === activeFilter;
    return (
        <button
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1 rounded-full text-sm lg:text-base transition-colors ${
                isActive ? "bg-primary-3" : "border-2 border-primary-3"
            }`}
        >
            {label}
        </button>
    );
};

const CourseCard = ({ course, isPublicView = false }) => {
    const isCompleted = !!course.certificate_path;
    const isOngoing = !isCompleted;

    const progressColor = isCompleted ? "bg-primary-4" : "bg-primary-4";

    const actionText = isPublicView
        ? isCompleted
            ? "Cek Kredensial"
            : "Lihat Kelas"
        : isCompleted
        ? "Unduh Sertifikat"
        : "Lanjutkan";

    const handleCertificate = () => {
        if (course?.certificate_path) {
            window.open('storage/' + course.certificate_path, "_blank"); // Buka di tab baru
        } else {
            console.warn("Path sertifikat tidak tersedia.");
        }
    };

    const handleNextCourses = () => {
        if (course?.next_course_path) {
            window.location.href = course.next_course_path; // Redirect ke path berikutnya
        } else {
            console.warn("Path course selanjutnya tidak tersedia.");
        }
    };

    return (
        <div className="bg-neutral-5 border-b-2 border-b-primary-2 rounded-b-xl overflow-hidden">
            <div className="aspect-video">
                <img
                    src={course.image}
                    alt="image"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4 space-y-3">
                <h3 className="font-semibold text-xs lg:text-lg">
                    {course.title}
                </h3>
                <div className="bg-neutral-700 px-2 py-1 font-bold rounded-full text-[10px] lg:text-sm inline-block max-w-max">
                    <span>{course.lessons || "N/A"} Pelajaran</span>
                </div>
                <div className="space-y-2">
                    <div className="font-semibold">
                        {course.progress}%{" "}
                        {isCompleted ? "Selesai" : "Progress belajarmu"}
                    </div>
                    <div className="w-full bg-zinc-300 rounded-full h-2">
                        <div
                            className={`h-2 rounded-full ${progressColor}`}
                            style={{ width: `${course.progress}%` }}
                        />
                    </div>
                </div>
                <button
                    className={`w-full py-2 px-4 rounded-xl font-medium ${
                        isCompleted
                            ? "bg-neutral-3 hover:bg-neutral-4"
                            : "bg-primary-3 hover:bg-primary-4"
                    } text-white`}
                    onClick={
                        isCompleted ? handleCertificate : handleNextCourses
                    }
                >
                    {actionText}
                </button>
            </div>
        </div>
    );
};

const ClassUser = ({ isPublicView = false, hideHeader = false, courses }) => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredCourses = useMemo(
        () =>
            activeFilter === "all"
                ? courses
                : courses.filter((c) => c.status === activeFilter),
        [activeFilter]
    );

    return (
        <section className="text-white min-h-screen">
            <div className="container mx-auto space-y-6">
                {!hideHeader && (
                    <>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <h1 className="text-xl font-semibold">
                                    {isPublicView
                                        ? "Kelas yang diikuti oleh pengguna ini"
                                        : "Kelas yang sedang diikuti"}
                                </h1>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <FilterButton
                                label="Sedang diikuti"
                                filter="ongoing"
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                            />
                            <FilterButton
                                label="Selesai"
                                filter="completed"
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                            />
                        </div>
                    </>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredCourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            isPublicView={isPublicView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClassUser;
