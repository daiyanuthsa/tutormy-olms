import ClassUser from '@/Components/ProfileDashboard/ClassUser'
import Hero from '@/Components/ProfileDashboard/Hero'
import Portofolio from '@/Components/ProfileDashboard/Portofolio'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Dashboard = ({ profiledata, courses, portofolio }) => {
    return (
        <MainLayout>
            <Head title="Dashboard" />

            <main className="pt-28 w-full space-y-7">
                <Hero profiledata={profiledata} />
                <ClassUser courses={courses} />
                {/* <Portofolio portfolio={portofolio} /> */}
            </main>
        </MainLayout>
    );
};

export default Dashboard