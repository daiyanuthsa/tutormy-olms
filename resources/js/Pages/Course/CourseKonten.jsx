import React, { useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Breadcrumb from '@/Components/Course/Breadcrumb';
import { DUMMY_COURSES } from '../../../../public/js/data/DummyData';
import VideoPlayer from './Content/VideoPlayer';
import LessonNavigator from './Content/LessonNavigator';
import VideoDescription from './Content/VideoDescription';
import CourseMeta from './Content/CourseMeta';

const CourseKonten = () => {
    const { slug } = usePage().props;
    const course = DUMMY_COURSES.find(c => c.slug === slug);

    const allLessons = course?.curriculum?.flatMap(section =>
        section.lessons.map(lesson => ({
            ...lesson,
            sectionId: section.id,
            sectionTitle: section.title
        }))
    ) ?? [];

    const [activeLessonIndex, setActiveLessonIndex] = useState(0);
    const currentLesson = allLessons[activeLessonIndex];
    const currentSectionId = currentLesson?.sectionId;

    const isInvalid = !course || !currentLesson;
    const isFirst = activeLessonIndex === 0;
    const isLast = activeLessonIndex === allLessons.length - 1;

    const handleChangeLesson = offset => {
        setActiveLessonIndex(i => i + offset);
    };

    if (isInvalid) {
        return (
            <MainLayout>
                <Head title="Kelas Tidak Ditemukan" />
                <section className="text-white py-20 container text-center space-y-4">
                    <h1 className="text-3xl font-bold">Oops!</h1>
                    <p>Kelas dengan slug <code>{slug}</code> tidak ditemukan.</p>
                </section>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Head title={`Belajar: ${course.title}`} />
            <section className="text-white py-24 lg:py-28 container space-y-11">
                <Breadcrumb title={`Belajar: ${course.title}`} />

                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    <div className="w-full lg:w-2/3 space-y-5">
                        <div>
                            <p className="text-2xl font-bold">{course.title}</p>
                            <p className="font-semibold text-primary-1">
                                {currentLesson.sectionTitle} - {currentLesson.title}
                            </p>
                        </div>
                        <VideoPlayer />
                    </div>

                    <LessonNavigator
                        curriculum={course.curriculum}
                        activeLessonIndex={activeLessonIndex}
                        currentSectionId={currentSectionId}
                        allLessons={allLessons}
                        setActiveLessonIndex={setActiveLessonIndex}
                        handleChangeLesson={handleChangeLesson}
                        isFirst={isFirst}
                        isLast={isLast}
                    />
                </div>

                <VideoDescription description={currentLesson.description} />
                <CourseMeta course={course} />
            </section>
        </MainLayout>
    );
};

export default CourseKonten;