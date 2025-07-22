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
            <div>
                <div className='h-40 md:h-60 bg-neutral-3 rounded-t-xl overflow-hidden'>
                    <img
                        src={'storage/'+webinar.thumbnail}
                        alt={webinar.name}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='p-4 lg:px-7 lg:py-5 space-y-2 border-2 rounded-b-xl border-primary-3'>
                    <div className="text-sm lg:text-lg font-bold">{webinar.name}</div>

                    <div className='flex items-center gap-2 text-xs lg:text-sm font-medium'>
                        <Icon icon="mdi:calendar-month" className='text-lg' />
                        <span>{formattedDate}</span>
                    </div>

                    <div className='flex items-center gap-2 text-xs lg:text-sm font-medium'>
                        <Icon icon={accessIcon} className='text-lg' />
                        <span>{accessLabel}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default WebminarCard