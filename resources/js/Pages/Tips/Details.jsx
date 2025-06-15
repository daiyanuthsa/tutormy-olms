import React, { useState, useEffect, useMemo } from 'react';
import { Link, usePage } from '@inertiajs/react';
import RelatedTips from '@/components/tips/RelatedTips';
import ArticleContent from '@/components/tips/ArticleContent';
import CategorySidebar from '@/components/tips/CategorySidebar';
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';

const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

const formatTime = (dateStr) =>
    new Date(dateStr).toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

export default function Details() {
    const { props } = usePage();
    const { article: articleProps } = props;

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch('/data/articles.json')
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => setArticles(data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    const currentArticle = useMemo(() => {
        if (!articles.length) return null;
        const slug = articleProps?.slug || window.location.pathname.split('/').pop();
        const article = articles.find((a) => a.slug === slug && a.is_published);
        return article
            ? {
                ...article,
                published_at: formatDate(article.created_at),
                published_time: formatTime(article.created_at),
            }
            : null;
    }, [articles, articleProps]);

    const relatedArticles = useMemo(() => {
        if (!articles.length || !currentArticle) return [];
        return articles
            .filter(
                (a) =>
                    a.category_name === currentArticle.category_name &&
                    a.slug !== currentArticle.slug &&
                    a.is_published
            )
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 3)
            .map((a) => ({
                ...a,
                short_description:
                    a.short_description ||
                    (a.content ? a.content.replace(/<[^>]*>/g, '').slice(0, 80) + '...' : ''),
            }));
    }, [articles, currentArticle]);

    useEffect(() => {
        if (currentArticle) {
            setSelectedCategory(currentArticle.category_name.toLowerCase().replace(' ', '-'));
        }
    }, [currentArticle]);

    const handleCategorySelect = (categorySlug) => {
        setSelectedCategory(categorySlug);
    };

    if (loading || error || !currentArticle) {
        const message = error
            ? `Error memuat artikel: ${error.message}`
            : !currentArticle
                ? 'Maaf, artikel tidak ditemukan atau tidak dipublikasikan.'
                : 'Memuat artikel...';

        return (
            <main>
                <div className="container mx-auto p-6 bg-gray-900 min-h-screen text-white text-center">
                    {error || !currentArticle ? (
                        <>
                            <h1 className="text-4xl font-bold text-red-500 mb-4">
                                {error ? 'Gagal Memuat' : '404 - Artikel Tidak Ditemukan'}
                            </h1>
                            <p className="text-gray-300">{message}</p>
                            <Link
                                href="/tips"
                                className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Kembali ke Daftar Tips
                            </Link>
                        </>
                    ) : (
                        <p className="text-xl">{message}</p>
                    )}
                </div>
            </main>
        );
    }

    return (
        <main className='font-inter'>
            <Head title='Tips' />
            <div className="container mx-auto py-14 text-white">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Kategori */}
                    <div className="hidden lg:block lg:w-1/5">
                        <CategorySidebar
                            currentCategory={selectedCategory}
                            onCategorySelect={handleCategorySelect}
                        />
                    </div>

                    <div className="absolute w-60 h-60 lg:w-96 lg:h-96 bg-purple-700 blur-[250px] rounded-full left-[-100px] top-1/2 z-0" />

                    {/* Konten Artikel */}
                    <div className="w-full lg:w-3/5">
                        <ArticleContent
                            article={currentArticle}
                            allArticles={articles}
                        />
                    </div>

                    {/* Tips Terkait */}
                    <div className="w-full lg:w-1/5">
                        <RelatedTips articles={relatedArticles} />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}