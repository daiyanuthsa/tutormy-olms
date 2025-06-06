import React from "react";



export default function CourseSearch({ courses, keyword }) {
    return (
        <div className="text-white">
            <h1 className="text-white">Daftar Artikel</h1>
            <h2>Hasil pencarian untuk: {keyword}</h2>
            <pre>{JSON.stringify(courses, null, 2)}</pre>
        </div>
    );
}

