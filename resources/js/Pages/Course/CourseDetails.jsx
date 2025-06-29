import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { DUMMY_COURSES } from '../../../../public/js/data/DummyData';
import Breadcrumb from '@/Components/Course/Breadcrumb';
import CourseOverview from '@/Components/Course/CourseOverview';
import BenefitList from '@/Components/Course/BenefitList';
import CurriculumAccordion from '@/Components/Course/CurriculumAccordion';
import NotFound from '@/Components/Course/NotFound';
import { Icon } from '@iconify/react';


const CourseDetails = ({ course }) => {
    // const { slug } = usePage().props;
    // const course = course.find(c => c.slug === slug);

    // if (!course) {
    //     return (
    //         <MainLayout>
    //             <Head title="Kelas Tidak Ditemukan" />
    //             <NotFound message={`Kelas dengan slug "${slug}" tidak ditemukan.`} />
    //         </MainLayout>
    //     );
    // }

    return (
        <MainLayout>
            <Head title={course.name} />
            <section className="text-white py-24 lg:py-28 container space-y-11">
                <Breadcrumb title={course.name} />
                <CourseOverview course={course} />

                <div className="flex flex-col lg:flex-row w-full items-start gap-16">
                    <div className="space-y-10 flex-1 w-full">
                        <div className="space-y-5">
                            <h6 className="lg:text-2xl font-bold">Tentang Kelas ini</h6>
                            <p>{course.about}</p>
                        </div>
                        <div className="space-y-5">
                            <h6 className="lg:text-2xl font-bold">Apa yang Kamu pelajari ?</h6>
                            <BenefitList items={course.benefits} />
                        </div>
                        <div className="space-y-5">
                            <h6 className="lg:text-2xl font-bold">Kurikulum</h6>
                            <CurriculumAccordion curriculum={course.sections} />
                        </div>
                    </div>

                    <aside className="lg:w-2/5 w-1/10 space-y-10">
                        {/* ...aside content... */}
                        <div
                            className="relative rounded-xl overflow-hidden bg-primary-3 text-white"
                            style={{
                                backgroundImage: "url('/assets/hero-auth.webp')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="backdrop-brightness-75 bg-primary-4/70 p-6 space-y-4">
                                <p className="text-lg font-semibold">Punya Pertanyaan?</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum.</p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <Icon icon="mdi:phone" className="w-4 h-4 text-white" />
                                        +62-1234-5678
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Icon icon="mdi:web" className="w-4 h-4 text-white" />
                                        Tutormy.domain.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </MainLayout>
    );
    // return (
    //     <pre>{JSON.stringify(course, null, 2)}</pre>
    // );
};

export default CourseDetails;