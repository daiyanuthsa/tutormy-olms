import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const CurriculumAccordion = ({ curriculum }) => {
    const [open, setOpen] = useState(null);
    const toggle = id => setOpen(prev => (prev === id ? null : id));

    return (
        <div className="space-y-4">
            {curriculum.map(section => (
                <div key={section.id} className="bg-primary-5 rounded-xl overflow-hidden">
                    <button
                        onClick={() => toggle(section.id)}
                        className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left"
                    >
                        <span>{section.title}</span>
                        <Icon
                            icon="tabler:chevron-down"
                            className={`w-5 h-5 transition-transform ${open === section.id ? 'rotate-180' : ''}`}
                        />
                    </button>
                    {open === section.id && (
                        <ul className="bg-neutral-3 p-2 lg:p-5 space-y-3">
                            {section.lessons.map(lesson => (
                                <li
                                    key={lesson.id}
                                    className={`flex items-center justify-between px-3 lg:px-5 py-3 rounded-2xl 
                                        ${lesson.is_locked ? 'bg-neutral-5' : 'bg-primary-4 text-white'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            icon={lesson.is_locked ? 'mdi:lock' : 'mdi:play-circle'}
                                            className="w-6 h-6"
                                        />
                                        <div>
                                            <p className="font-medium">{lesson.title}</p>
                                            <span className="text-sm">{lesson.duration}</span>
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
