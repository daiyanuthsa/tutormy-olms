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

const CourseDetails = () => {
    const { slug } = usePage().props;
    const course = DUMMY_COURSES.find(c => c.slug === slug);

    if (!course) {
        return (
            <MainLayout>
                <Head title="Kelas Tidak Ditemukan" />
                <NotFound message={`Kelas dengan slug "${slug}" tidak ditemukan.`} />
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Head title={course.title} />
            <section className="text-white py-24 lg:py-28 container space-y-11">
                <Breadcrumb title={course.title} />
                <CourseOverview course={course} />

                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="space-y-10">
                        <div className="space-y-5">
                            <h6 className="lg:text-2xl font-bold">Tentang Kelas ini</h6>
                            <p>{course.description}</p>
                        </div>
                        <div className="space-y-5">
                            <h6 className="lg:text-2xl font-bold">Apa yang Kamu pelajari ?</h6>
                            <BenefitList items={course.what_you_will_learn} />
                        </div>
                        <div className="space-y-5">
                            <h6 className="lg:text-2xl font-bold">Kurikulum</h6>
                            <CurriculumAccordion curriculum={course.curriculum} />
                        </div>
                    </div>

                    <aside className="w-full lg:w-2/5 space-y-10">
                        <div className="bg-neutral-4 rounded-xl p-6 space-y-4">
                            <div className="space-y-2">
                                <p className="text-3xl font-bold">Rp {course.price}</p>
                                <p className="text-xl font-medium">Paket {course.package_name}</p>
                            </div>
                            <p className="font-medium">Benefit</p>
                            <div className="space-y-2">
                                {course.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="p-1 w-6 h-6 flex items-center justify-center rounded-full bg-primary-1/20">
                                            <Icon icon="streamline-sharp:star-badge-solid" className="w-5 h-5" />
                                        </div>
                                        <p className="lg:text-base font-bold">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

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
};

export default CourseDetails;