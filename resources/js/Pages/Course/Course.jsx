import React, { useState, useMemo } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import CourseSearch from '@/Components/Course/CourseSearch';
import CourseFilter from '@/Components/Course/CourseFilter';
import CourseCard from '@/Components/Course/CourseCard';
import { DUMMY_COURSES, DUMMY_CATEGORIES } from '../../../../public/js/data/DummyData';

const filterCourses = (courses, category, keyword) => {
    let result = courses;

    if (category && category !== 'Discover') {
        result = result.filter(course =>
            course.category?.name === category
        );
    }

    if (keyword) {
        const term = keyword.toLowerCase();
        result = result.filter(course =>
            course.title.toLowerCase().includes(term) ||
            course.description?.toLowerCase().includes(term)
        );
    }

    return result;
};

const Course = ({courses}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('Discover');

    const filteredCourses = useMemo(
        () => filterCourses(courses, activeCategory, searchTerm),
        [searchTerm, activeCategory]
    );

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handleSearchSubmit = (e) => e.preventDefault();
    const handleFilterChange = (category) => setActiveCategory(category);

    const renderCoursesSection = (title, desc) => (
        <>
            <section className="py-12">
                <div className="container">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p>{desc}</p>
                </div>
            </section>
            <section className="container grid grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))
                ) : (
                    <div className="col-span-full text-center">No courses found.</div>
                )}
            </section>
        </>
    );

    return (
        <MainLayout>
            <Head title="Course" />
            <main className="py-24 lg:py-28 w-full text-white">
                <CourseSearch
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onSubmit={handleSearchSubmit}
                />

                <CourseFilter
                    categories={DUMMY_CATEGORIES}
                    activeCategory={activeCategory}
                    onCategoryChange={handleFilterChange}
                />

                {searchTerm ? (
                    <section className="container py-12">
                        <h2 className="text-2xl font-bold mb-2">
                            Hasil dari pencarian untuk "{searchTerm}"
                        </h2>
                        {filteredCourses.length > 0 ? (
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                                {filteredCourses.map((course) => (
                                    <CourseCard key={course.id} course={course} />
                                ))}
                            </div>
                        ) : (
                            <div className='space-y-7 flex flex-col items-center justify-center mt-10'>
                                <p className="text-center lg:text-2xl font-bold">Ooops ! Kelas yang kamu cari belum ada</p>
                                <img src="/assets/404.webp" alt="image" className='w-40 lg:w-64'/>
                                <p className="text-center">Saat ini Kelas yang anda cari maish belum adanih, silakan periksa kembali Kelas yang kamu cari besok hari</p>
                            </div>
                        )}
                    </section>
                ) : (
                    <>
                        {renderCoursesSection("Popular Course", "Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla ph")}
                        {renderCoursesSection("Course Course", "Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla ph")}
                    </>
                )}

                <section className="py-12 container">
                    <div className="p-6 lg:px-12 text-white lg:py-8 flex flex-col lg:flex-row gap-4 items-start lg:justify-between lg:items-center bg-primary-4 rounded-2xl">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">Akses Semua Materi Belajar Sekarang</h2>
                            <p className="text-neutral-1 font-semibold">Mulai dari Rp 150.000,- saja!</p>
                        </div>
                        <button className="py-2.5 px-8 lg:px-16 bg-gradient-to-r from-zinc-800 to-slate-500 rounded-2xl inline-flex justify-center items-center">
                            Upgrade Premium
                        </button>
                    </div>
                </section>
            </main>
        </MainLayout>
    );
};

export default Course;