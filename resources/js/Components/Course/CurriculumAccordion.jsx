import React, { useState } from "react";
import { Icon } from "@iconify/react";

const CurriculumAccordion = ({ curriculum }) => {
    // const [openSections, setOpenSections] = useState(new Set());
     const [openSections, setOpenSections] = useState(
         new Set(curriculum?.map((section) => section.id) || [])
     );
    const toggle = (id) => {
        setOpenSections((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id); // Tutup jika sudah terbuka
            } else {
                newSet.add(id); // Buka jika masih tertutup
            }
            return newSet;
        });
    };
    const secondsToMinutesString = (seconds) => {
        if (!seconds || seconds <= 0) return "0 Menit";

        const minutes = Math.round(seconds / 60);
        return `${minutes} Menit`;
    };
    return (
        <div className="space-y-4">
            {curriculum.map((section) => (
                <div
                    key={section.id}
                    className="bg-primary-5 rounded-xl overflow-hidden"
                >
                    <button
                        onClick={() => toggle(section.id)}
                        className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left"
                    >
                        <span>{section.name}</span>
                        <Icon
                            icon="tabler:chevron-down"
                            className={`w-5 h-5 transition-transform ${
                                openSections.has(section.id) ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    {openSections.has(section.id) && (
                        <ul className="bg-neutral-3 p-2 lg:p-5 space-y-3">
                            {section.contents.map((lesson) => (
                                <li
                                    key={lesson.id}
                                    className={`flex items-center justify-between px-3 lg:px-5 py-3 rounded-2xl 
                                        ${
                                            lesson.free_access === 0
                                                ? "bg-neutral-5"
                                                : "bg-primary-4 text-white"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            icon={
                                                lesson.free_access === 0
                                                    ? "mdi:lock"
                                                    : "mdi:play-circle"
                                            }
                                            className="w-6 h-6"
                                        />
                                        <div>
                                            <p className="font-medium">
                                                {lesson.name}
                                            </p>
                                            <span className="text-sm">
                                                {lesson.duration
                                                    ? secondsToMinutesString(
                                                          lesson.duration
                                                      )
                                                    : "Tidak ada durasi"}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CurriculumAccordion;
