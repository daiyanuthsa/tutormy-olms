import React from "react";

const CourseFinished = (course) => {
    return (
        <div className="text-white ">
            <h1 className="text-white text-2xl font-bold mb-4">
                Kelas Selesai
            </h1>
            <pre>{JSON.stringify(course, null, 2)}</pre>
        </div>
    );
};

export default CourseFinished;
