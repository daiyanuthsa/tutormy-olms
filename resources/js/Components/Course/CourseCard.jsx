import React from 'react';

const CourseCard = ({ course }) => {
    if (!course) {
        return null;
    }

    return (
        <div className="text-white bg-neutral-5 border-b-2 border-b-primary-2 rounded-b-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 hover:scale-105">
            <div className="aspect-video">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover">
                </img>
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-xs lg:text-lg mb-2">{course.title}</h3>
                <div className="bg-neutral-700 px-2 py-1 font-bold rounded-full text-xs lg:text-sm inline-block max-w-max">
                    <span>{course.lessons || 'N/A'} Pelajaran</span>
                </div>

            </div>
        </div>
    );
};

export default CourseCard;