import React from 'react';
import { Link } from '@inertiajs/react';
import { Icon } from '@iconify/react';

const ArticleCard = ({ article }) => {
    const truncateText = (text, maxLength = 200) =>
        text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    
    return (
        <Link
            href={`/tips/${article.slug}`}
            className="flex gap-8 items-center"
        >
            <div className="w-72 h-52 flex-shrink-0">
                <img
                    src={`/storage/${article.thumbnail}`}
                    alt={article.name}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            <main className="space-y-1">
                <div className="py-1 px-5 bg-primary-2 rounded-full inline-flex justify-center items-center">
                    <span className="font-semibold text-sm">
                        {article.category_name}
                    </span>
                </div>

                <h2 className="text-3xl font-bold">{article.name}</h2>

                <p className="text-lg font-medium">
                    {truncateText(article.content)}
                </p>

                <div className="flex gap-4 items-center pt-1">
                    <div className="flex items-center gap-1">
                        <Icon icon="mdi:eye-outline" className="w-4 h-4" />
                        <span className="text-primary-1 text-sm font-semibold">
                            2.5m
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Icon icon="mdi:calendar-outline" className="w-4 h-4" />
                        <span className="text-primary-1 text-sm font-semibold">
                            {article.published_at}
                        </span>
                    </div>
                </div>
            </main>
        </Link>
    );
};

export default ArticleCard;