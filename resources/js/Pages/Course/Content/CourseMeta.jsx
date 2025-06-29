import React from 'react';
import { Icon } from '@iconify/react';

const CourseMeta = ({ course }) => (
    <div>
        <h6 className="lg:text-2xl font-bold">Mentor & Info</h6>
        <div className="flex items-center gap-5 mt-4">
            <img src="/assets/teacher.png" alt="mentor" className="w-14 h-14 rounded-full object-cover" />
            <div className="space-y-1 font-bold">
                <p className="text-base lg:text-2xl">{course.mentor_name}</p>
                <p className="text-sm">{course.mentor_title}</p>
            </div>
        </div>
        <div className="space-y-2 text-base mt-3">
            <p className="flex items-center gap-3">
                <Icon icon="tabler:video-filled" className="w-5 h-5" />
                {course.total_videos} Video Pembelajaran
            </p>
            <p className="flex items-center gap-3">
                <Icon icon="icons8:student" className="w-5 h-5" />
                {course.students_joined} Siswa
            </p>
        </div>
    </div>
);

export default CourseMeta;
