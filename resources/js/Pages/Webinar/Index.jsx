import React from 'react'
import Hero from '@/Components/Webminar/Hero'
import MainLayout from '@/Layouts/MainLayout'
import WebminarCard from '@/Components/Webminar/WebminarCard'

const Index = ({ webinars }) => {
    const upcoming = webinars.upcoming_agendas ?? []
    const past = webinars.past_agendas ?? []

    return (
        <MainLayout>
            <section className='py-28 text-white space-y-12'>
                <Hero />

                <main className='container mx-auto space-y-10'>
                    {/* Webinar Mendatang */}
                    <div className='space-y-8'>
                        <div className='space-y-3'>
                            <h2 className="lg:text-2xl font-bold">Webinar yang akan datang</h2>
                            <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla ph</p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {upcoming.length > 0 ? (
                                upcoming.map((item) => (
                                    <WebminarCard key={item.id} webinar={item} />
                                ))
                            ) : (
                                <p className="text-neutral-2">Tidak ada webinar yang mendatang.</p>
                            )}
                        </div>
                    </div>

                    {/* Webinar Sebelumnya */}
                    <div className='space-y-8'>
                        <div className='space-y-3'>
                            <h2 className="lg:text-2xl font-bold">Kumpulan Webinar</h2>
                            <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla ph</p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {past.length > 0 ? (
                                past.map((item) => (
                                    <WebminarCard key={item.id} webinar={item} />
                                ))
                            ) : (
                                <p className="text-neutral-2">Belum ada webinar sebelumnya.</p>
                            )}
                        </div>
                    </div>
                </main>
            </section>
        </MainLayout>
    )
}

export default Index