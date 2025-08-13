import React, { useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import Breadcrumb from "@/Components/Course/Breadcrumb";
import { DUMMY_COURSES } from "../../../../public/js/data/DummyData";
import VideoPlayer from "./Content/VideoPlayer";
import LessonNavigator from "./Content/LessonNavigator";
import VideoDescription from "./Content/VideoDescription";
import CourseMeta from "./Content/CourseMeta";
import { router } from "@inertiajs/react";

const CourseKonten = ({ course, sectionId, contentId }) => {

    const allLessons =
        course?.sections?.flatMap((section) =>
            (section.contents || []).map((content) => ({
                ...content,
                sectionId: section.id,
                sectionTitle: section.name,
            }))
        ) ?? [];

    // Hitung index aktif berdasarkan sectionId dan contentId dari URL
    const activeLessonIndex = allLessons.findIndex(
        (l) =>
            String(l.sectionId) === String(sectionId) &&
            String(l.id) === String(contentId)
    );
    const currentLesson = allLessons[activeLessonIndex];
    const currentSectionId = currentLesson?.sectionId;

    const isInvalid = !course || !currentLesson;
    const isFirst = activeLessonIndex === 0;
    const isLast = activeLessonIndex === allLessons.length - 1;
    console.log("Current Lesson:", currentLesson);
    // handleChangeLesson hanya untuk tombol navigasi
    const handleChangeLesson = (offset) => {
        const newIndex = activeLessonIndex + offset;
        if (newIndex >= 0 && newIndex < allLessons.length) {
            const lesson = allLessons[newIndex];
            // Navigasi ke slug baru
            router.visit(
                `/courses/learning/${course.slug}/${lesson.sectionId}/${lesson.id}`
            );
        }
    };

    if (isInvalid) {
        return (
            <MainLayout>
                <Head title="Kelas Tidak Ditemukan" />
                <section className="text-white py-20 container text-center space-y-4">
                    <h1 className="text-3xl font-bold">Oops!</h1>
                    <p>Kelas tidak ditemukan.</p>
                </section>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Head title={`Belajar: ${course.name}`} />
            <section className="text-white py-24 lg:py-28 container space-y-11">
                <Breadcrumb title={`Belajar: ${course.name}`} />

                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    <div className="w-full lg:w-2/3 space-y-5">
                        <div>
                            <p className="text-2xl font-bold">{course.name}</p>
                            <p className="font-semibold text-primary-1">
                                {currentLesson.sectionTitle} -{" "}
                                {currentLesson.name}
                            </p>
                        </div>
                        <VideoPlayer video={currentLesson.content} thumbnail={course.thumbnail} />
                    </div>

                    <LessonNavigator
                        sections={course.sections}
                        activeLessonIndex={activeLessonIndex}
                        currentSectionId={currentSectionId}
                        allLessons={allLessons}
                        handleChangeLesson={handleChangeLesson}
                        isFirst={isFirst}
                        isLast={isLast}
                        courseSlug={course.slug}
                    />
                </div>

                <VideoDescription description={course.about} />
                {/* <CourseMeta course={course} /> */}
            </section>
        </MainLayout>
    );
};

export default CourseKonten;
