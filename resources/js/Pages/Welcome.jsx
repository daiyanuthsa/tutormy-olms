import { Head, Link } from '@inertiajs/react';
import React from 'react'
import MainLayout from '@/Layouts/MainLayout';
import HeroComponents from './Welcome/HeroComponents';
import Data from './Welcome/Data';
import Class from './Welcome/Class';
import Benefit from './Welcome/Benefit';
import Question from './Welcome/Question';
import Pricelist from './Welcome/Pricelist';
import Review from './Welcome/Review';

const Welcome = ({ pricing, testimonials }) => {
    return (
        <MainLayout>
            <Head title="Welcome" />
            <main className="py-28 w-full">
                <HeroComponents />
                <Data />
                <Class />
                <Benefit />
                <Pricelist />
                <Question />
                <Review />
            </main>
        </MainLayout>
    );
};

export default Welcome