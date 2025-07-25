import React from 'react'
import { Icon } from '@iconify/react'
import { Link } from '@inertiajs/react'

const WebminarCard = ({ webinar }) => {
    const formattedDate = new Date(webinar.event_datetime).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const isUpcoming = new Date(webinar.event_datetime) > new Date()

    const accessLabel = isUpcoming ? 'Gratis' : 'Akses terbatas'
    const accessIcon = isUpcoming ? 'mdi:ticket-percent-outline' : 'mdi:lock'

    const link = `/webinar${isUpcoming ? '/register' : ''}/${webinar.slug}`

    return (
        <Link href={link} className="block hover:opacity-90 transition">
            <div className="flex flex-col h-full">
                <div className="h-32 md:h-52 bg-neutral-3 rounded-t-2xl overflow-hidden flex-shrink-0 ">
                    <img
                        src={"storage/" + webinar.thumbnail}
                        alt={webinar.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4 h-full lg:px-7 lg:py-5 space-y-2 border-b-2 border-l-2 border-r-2 rounded-b-2xl border-primary-3 flex-grow flex flex-col">
                    <div className="text-sm lg:text-lg font-bold">
                        {webinar.name}
                    </div>

                    <div className="space-y-2 flex-shrink-0">
                        <div className="flex items-center gap-2 text-xs lg:text-sm font-medium">
                            <Icon
                                icon="mdi:calendar-month"
                                className="text-lg"
                            />
                            <span>{formattedDate}</span>
                        </div>

                        <div className="flex items-center gap-2 text-xs lg:text-sm font-medium">
                            <Icon icon={accessIcon} className="text-lg" />
                            <span>{accessLabel}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default WebminarCard