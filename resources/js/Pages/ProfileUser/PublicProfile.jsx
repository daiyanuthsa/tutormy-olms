import Details from '@/Components/ProfileDashboard/PublicProfile/Details'
import Hero from '@/Components/ProfileDashboard/PublicProfile/Hero'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const PublicProfile = () => {
    return (
        <MainLayout>
            <main className='py-28 w-full space-y-7'>
                <section className='text-white'>
                    <div className='space-y-10'>
                        <Hero />
                        <Details />
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default PublicProfile