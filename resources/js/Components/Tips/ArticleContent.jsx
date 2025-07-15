import React from 'react'
import { Icon } from '@iconify/react'
import { Link } from '@inertiajs/react'

const ArticleContent = ({ article, author }) => {
    return (
        <section className="space-y-10">
            <div className="space-y-7">
                <h1 className="text-2xl font-bold">{article.category_name}</h1>
                <div>
                    <img
                        src={`/storage/${article.thumbnail}`}
                        alt={article.name}
                        className="w-full h-80 object-cover rounded-lg"
                    />
                </div>
                <div className="flex gap-7 justify-end">
                    <div className="flex items-center gap-2">
                        <Icon icon="mdi:eye-outline" className="w-5 h-5" />
                        <span>2.5m</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon icon="ic:outline-share" className="w-5 h-5" />
                        <span>2.5m</span>
                    </div>
                </div>
            </div>
            <div className="space-y-12">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">{article.name}</h1>
                    <p className="text-sm font-medium">
                        Oleh: {author.name} - {author.status}
                    </p>
                    <p className="text-xs">
                        {article.published_at} {article.published_time}
                    </p>
                </div>

                <div
                    className="prose prose-invert max-w-none font-medium leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </div>
            <div className="space-y-8">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Pelajari Lebih Dalam</h2>
                    <Link
                        href="/courses"
                        className="text-primary-500 hover:underline font-medium"
                    >
                        Lihat semua
                    </Link>
                </div>
                <div>ambil dari card course</div>
            </div>
            <div className="space-y-3">
                <h2 className="text-2xl font-bold">Content Editor</h2>
                <div className="flex gap-4 items-start">
                    <div className="w-20 h-20">
                        <img
                            src={`/storage/${author.photo}`}
                            alt="Foto Penulis"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div>
                        <p>{author.name}</p>
                        <p>{author.status}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArticleContent


// import React from 'react';

// export default function ArticleContent({ article }) {
//     return (
//         <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden p-6">
//             <img
//                 src={article.thumbnail || '/images/default-article.jpg'}
//                 alt={article.name}
//                 className="w-full h-80 object-cover rounded-lg mb-6"
//             />
//             <h1 className="text-4xl font-bold text-blue-400 mb-4">{article.name}</h1>
//             <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
//                 <span className="mr-4 mb-2">
//                     Kategori: <span className="font-semibold">{article.category_name}</span>
//                 </span>
//                 <span className="mr-4 mb-2">
//                     Penulis: <span className="font-semibold">{article.author_name}</span>
//                 </span>
//                 <span className="mb-2">
//                     Terbit: <span className="font-semibold">{article.published_at}</span>
//                 </span>
//             </div>
//             <div
//                 className="prose prose-invert max-w-none text-gray-300 leading-relaxed"
//                 dangerouslySetInnerHTML={{ __html: article.content }}
//             />
//         </div>
//     );
// }