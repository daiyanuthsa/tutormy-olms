import { Head } from '@inertiajs/react'
import React, { useEffect } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import HeroComponents from './Welcome/HeroComponents'
import Data from './Welcome/Data'
import Class from './Welcome/Class'
import Benefit from './Welcome/Benefit'
import Question from './Welcome/Question'
import Pricelist from './Welcome/Pricelist'
import Review from './Welcome/Review'
import Get from './Welcome/Get'
import Bonus from './Welcome/Bonus'
import AOS from "aos";

const Divider = () => (
    <div className="flex justify-center">
        <div className="w-96 lg:w-[973px] h-[5px] bg-gradient-to-r from-zinc-900 via-warning-3 to-zinc-900"></div>
    </div>
)

const Welcome = ({ pricing, testimonials, courses }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <MainLayout>
            <Head title="Welcome" />
            <main className="py-28 w-full">
                <HeroComponents />
                <Divider />
                <Review testimonials={testimonials} />
                <Divider />
                <Get />
                <Divider />
                <Bonus />
                <Divider />
                <Class courses={courses} />
                <Divider />
                <Data />
                <Divider />
                <Pricelist pricings={pricing} />
                <Divider />
                <Benefit />
                <Divider />
                <Question />
            </main>
        </MainLayout>
    );
}

export default Welcome