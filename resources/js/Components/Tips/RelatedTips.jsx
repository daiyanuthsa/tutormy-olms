import React from 'react';
import { Link } from '@inertiajs/react';
import { Icon } from '@iconify/react';

export default function RelatedTips({ articles }) {
    return (
        <div className="rounded-lg shadow-md space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Tips Terkait</h2>
                <Link href="/tips" className="text-primary-500 hover:underline text-sm font-medium">
                    Lihat semua
                </Link>
            </div>

            <div className="space-y-5">
                {articles.length ? (
                    articles.map((a) => (
                        <Link
                            key={a.id}
                            href={`/tips/${a.slug}`}
                            className="flex flex-col rounded-lg bg-neutral-4"
                        >
                            <div className="flex-shrink-0 w-full h-28 overflow-hidden rounded-lg">
                                <img
                                    src={a.thumbnail}
                                    alt={a.name || 'Thumbnail Tips'}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 p-4 space-y-3">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm rounded-lg py-1 px-5 text-primary-2 font-semibold bg-primary-1">{a.category_name}</span>
                                    <div className="flex items-center gap-2 text-xs">
                                        <Icon icon="mdi:eye-outline" className="w-5 h-5" />
                                        <span>2.5m</span>
                                    </div>
                                </div>
                                <h3 className="text-base font-bold line-clamp-2">{a.name}</h3>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-sm">Tidak ada tips terkait.</p>
                )}
            </div>
        </div>
    );
}