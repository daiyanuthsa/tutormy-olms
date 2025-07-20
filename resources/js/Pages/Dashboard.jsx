import ClassUser from '@/Components/ProfileDashboard/ClassUser'
import Hero from '@/Components/ProfileDashboard/Hero'
import Portofolio from '@/Components/ProfileDashboard/Portofolio'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Dashboard = ({ profiledata, courses, portofolios }) => {

    return (
        <MainLayout>
            <Head title="Dashboard" />

            <main className="pt-28 w-full space-y-7">
                <Hero profiledata={profiledata} />
                <ClassUser courses={courses} />
                <Portofolio portofolios={portofolios} />
            </main>
        </MainLayout>
    );
};

export default Dashboard