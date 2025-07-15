import React from "react";

const Learning = (course) => {
    return (
        <div className="text-white ">
            <h1 className="text-white text-2xl font-bold mb-4">
                Detail Kursus
            </h1>
            <pre>{JSON.stringify(course, null, 2)}</pre>
        </div>
    );
};

export default Learning;
