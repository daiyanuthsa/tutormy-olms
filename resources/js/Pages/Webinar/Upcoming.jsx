import PrimaryButton from "@/Components/PrimaryButton";
import MainLayout from "@/Layouts/MainLayout"
import { Icon } from "@iconify/react";

export default function Upcoming({ webinarDetail }) {
    if (!webinarDetail) return null;

    const formattedDate = new Date(webinarDetail.event_datetime).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const startTime = new Date(webinarDetail.event_datetime).toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    return (
        <MainLayout>
            <section className="text-white">
                <div className="container mx-auto py-28 lg:py-36 space-y-16">
                    <div className="flex flex-col md:flex-row lg:items-center gap-6 lg:gap-12">
                        <div className="md:w-1/2 xl:w-auto rounded-xl overflow-hidden bg-neutral-3">
                            <div className="lg:h-96 relative">
                                <img
                                    src={webinarDetail.thumbnail || "/assets/hero.png"}
                                    alt={webinarDetail.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="bg-gradient-light text-center text-xs lg:text-base font-semibold py-2.5">
                                DAFTAR SEKARANG & DAPATKAN DISKON KHUSUS
                            </div>
                        </div>

                        <div className="space-y-8 flex-1">
                            <div className="text-2xl lg:text-4xl font-semibold">{webinarDetail.name}</div>
                            <div className="space-y-3">
                                <div className='flex items-center gap-2 text-base lg:text-lg font-medium'>
                                    <Icon icon="mdi:calendar-month" className='text-lg' />
                                    <span>{formattedDate}</span>
                                </div>

                                <div className='flex items-center gap-2 text-base lg:text-lg font-medium'>
                                    <Icon icon="lets-icons:clock" className='text-lg' />
                                    <span>{startTime} WIB - Selesai</span>
                                </div>

                                <div className='flex items-center gap-2 text-base lg:text-lg font-medium'>
                                    <Icon icon="ic:outline-place" className='text-lg' />
                                    <span>Zoom Meeting</span>
                                </div>
                            </div>
                            <PrimaryButton className="rounded-full">
                                Daftar Sekarang
                                <Icon icon="solar:arrow-up-outline" className='rotate-45 text-lg ml-2' />
                            </PrimaryButton>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h6 className="lg:text-2xl font-bold">Deskripsi Webinar</h6>
                        <div className="space-y-1">
                            <p>{webinarDetail.description}</p>
                            <p>Yuk langsung aja daftar ke link berikut:
                                <a href={webinarDetail.registration_link} target="blank" className="ml-1 underline">{webinarDetail.registration_link}</a>
                            </p>
                            <p>BURUAN DAFTAR, soalnya kuota terbatas hehehe 🤭</p>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}