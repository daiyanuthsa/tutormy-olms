import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import CourseSearch from '@/Components/Course/CourseSearch';
import CourseFilter from '@/Components/Course/CourseFilter';
import CourseCard from '@/Components/Course/CourseCard';
import { DUMMY_COURSES, DUMMY_CATEGORIES } from '../../../../public/js/data/DummyData'; 

const Course = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('Discover');
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        let currentFilteredCourses = DUMMY_COURSES; 

        if (activeCategory && activeCategory !== 'Discover') {
            currentFilteredCourses = currentFilteredCourses.filter(course =>
                course.category && course.category.name === activeCategory
            );
        }

        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            currentFilteredCourses = currentFilteredCourses.filter(course =>
                course.title.toLowerCase().includes(lowerCaseSearchTerm) ||
                (course.description && course.description.toLowerCase().includes(lowerCaseSearchTerm))
            );
        }

        setFilteredCourses(currentFilteredCourses);
    }, [searchTerm, activeCategory]);

    const handleFilterChange = (category) => {
        setActiveCategory(category);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <MainLayout>
            <Head title='Course' />
            <main className="py-28 w-full text-white">
                <CourseSearch
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onSubmit={handleSearchSubmit}
                />

                <CourseFilter
                    categories={DUMMY_CATEGORIES} // Gunakan DUMMY_CATEGORIES dari import
                    activeCategory={activeCategory}
                    onCategoryChange={handleFilterChange}
                />

                <div>
                    <section className='py-12'>
                        <div className="container">
                            <h2 className="text-2xl font-bold">Popular Course</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla ph</p>
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
                </div>

                <div>
                    <section className='py-12'>
                        <div className="container">
                            <h2 className="text-2xl font-bold">Course Course</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla ph</p>
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
                </div>

                <section className="py-12 container">
                    <div className="px-12 text-white py-8 flex flex-col lg:flex-row gap-4 items-start lg:justify-between lg:items-center bg-primary-4 rounded-2xl">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">Akses Semua Materi Belajar Sekarang</h2>
                            <p className="text-neutral-1 font-semibold">Mulai dari Rp 150.000,- saja!</p>
                        </div>
                        <button className="py-2.5 px-16 bg-gradient-to-r from-zinc-800 to-slate-500 rounded-2xl inline-flex justify-center items-center">
                            Upgrade Premium
                        </button>
                    </div>
                </section>

            </main>
        </MainLayout>
    );
};

export default Course;