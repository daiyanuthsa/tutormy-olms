import React from "react";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";

const LessonNavigator = ({
    sections,
    activeLessonIndex,
    currentSectionId,
    handleChangeLesson,
    allLessons,
    isFirst,
    isLast,
    courseSlug,
}) => (
    <div className="w-full lg:w-1/3 space-y-4">
        <h4 className="text-2xl font-bold">Materi Pembelajaran</h4>

        {sections.map((chapter, idx) => {
            const isCurrentSection = chapter.id === currentSectionId;
            return (
                <div key={chapter.id} className="rounded-xl overflow-hidden">
                    <button
                        className={`w-full px-4 py-3 text-left font-semibold flex justify-between items-center 
                            ${
                                isCurrentSection
                                    ? "bg-primary-4"
                                    : "bg-neutral-5"
                            }`}
                    >
                        <span>
                            {idx + 1}. {chapter.name}
                        </span>
                        <Icon
                            icon="tabler:chevron-down"
                            className={`w-5 h-5 transition-transform ${
                                isCurrentSection ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    {isCurrentSection && (
                        <div className="bg-neutral-3 space-y-2 px-4 py-3">
                            {chapter.contents.map((lesson) => {
                                const index = allLessons.findIndex(
                                    (l) => l.id === lesson.id
                                );
                                const isActive = index === activeLessonIndex;

                                return (
                                    <button
                                        key={lesson.id}
                                        onClick={() => {
                                            router.visit(
                                                `/courses/learning/${courseSlug}/${chapter.id}/${lesson.id}`
                                            );
                                        }}
                                        className={`flex w-full items-center gap-2 text-sm px-3 py-2 rounded-2xl 
                ${
                    isActive
                        ? "bg-neutral-5 text-white"
                        : "text-white hover:bg-neutral-3"
                }`}
                                    >
                                        <Icon
                                            icon={
                                                lesson.is_locked
                                                    ? "mdi:lock"
                                                    : "mdi:play-circle"
                                            }
                                            className="w-5 h-5"
                                        />
                                        <div className="flex flex-col items-start">
                                            <p>{lesson.name}</p>
                                            <p className="text-xs text-neutral-2">
                                                {lesson.duration}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
            );
        })}

        <div className="flex justify-between pt-3">
            <button
                onClick={() => handleChangeLesson(-1)}
                disabled={isFirst}
                className={`text-sm font-medium px-4 py-2 rounded-xl
        ${
            isFirst
                ? "bg-neutral-4 cursor-not-allowed"
                : "border border-primary-2"
        }`}
            >
                ← Sebelum
            </button>
            {isLast ? (
                <button
                    onClick={() => router.visit(`/courses/finished/${courseSlug}`)}
                    className="text-sm font-medium px-4 py-2 rounded-xl border border-primary-2"
                >
                    Selesai
                </button>
            ) : (
                <button
                    onClick={() => handleChangeLesson(1)}
                    disabled={isLast}
                    className={`text-sm font-medium px-4 py-2 rounded-xl
        ${
            isLast
                ? "bg-neutral-4 cursor-not-allowed"
                : "border border-primary-2"
        }`}
                >
                    Sesudah →
                </button>
            )}
        </div>
    </div>
);

export default LessonNavigator;
