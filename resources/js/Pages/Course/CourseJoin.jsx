import React from "react";

const CourseJoin = (course) => {
    return (
        <div className="text-white ">
            <h1 className="text-white text-2xl font-bold mb-4">
                Halaman Join Kelas
            </h1>
            <pre>{JSON.stringify(course, null, 2)}</pre>

        </div>
    );
};

export default CourseJoin;
