import React, { useState, useEffect, useMemo } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import ArticleCard from '@/components/tips/ArticleCard';
import SearchBar from '@/components/tips/SearchBar';
import CategoryFilter from '@/components/tips/CategoryFilter';
import { usePage, Head } from '@inertiajs/react';

const getQueryParams = (url) => {
    const params = new URLSearchParams(url.split('?')[1]);
    return {
        search: params.get('search') || '',
        category: params.get('category') || '',
        page: parseInt(params.get('page')) || 1
    };
};

const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

const categories = [
    'Discover', 'Design', 'Code', 'Soft Skills', 'User-Interface',
    'User-Experience', 'Front-End', 'Back-End', 'Softdev'
];

export default function Index() {
    const { url } = usePage();
    const { search, category, page } = useMemo(() => getQueryParams(url), [url]);

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState(search);
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [currentPage, setCurrentPage] = useState(page);
    const articlesPerPage = 3;

    useEffect(() => {
        fetch('/data/articles.json')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error ${res.status}`);
                return res.json();
            })
            .then(data => setArticles(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    const filteredArticles = useMemo(() => {
        return articles
            .filter(a => a.is_published)
            .filter(a =>
                (!searchQuery || a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    a.content.toLowerCase().includes(searchQuery.toLowerCase())) &&
                (!selectedCategory || a.category_name === selectedCategory)
            )
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }, [articles, searchQuery, selectedCategory]);

    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    const paginatedArticles = useMemo(() => {
        const start = (currentPage - 1) * articlesPerPage;
        return filteredArticles.slice(start, start + articlesPerPage);
    }, [filteredArticles, currentPage]);

    const updateQueryParams = ({ search = searchQuery, category = selectedCategory, page = 1 }) => {
        setSearchQuery(search);
        setSelectedCategory(category);
        setCurrentPage(page);

        const params = new URLSearchParams();
        if (search) params.set('search', search);
        if (category) params.set('category', category);
        params.set('page', page);
        window.history.pushState({}, '', `?${params.toString()}`);
    };

    const displayedPages = useMemo(() => {
        const pages = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            if (currentPage > 3) pages.push('ellipsis-left');

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) pages.push('ellipsis-right');
            pages.push(totalPages);
        }

        return pages;
    }, [currentPage, totalPages]);

    useEffect(() => {
        const { search, page, category } = getQueryParams(url);
        setSearchQuery(search);
        setSelectedCategory(category);
        setCurrentPage(page);
    }, [url]);

    if (loading || error) {
        return (
            <MainLayout>
                <div className="container mx-auto p-6 min-h-screen text-white text-center">
                    <p className="text-xl">
                        {error ? `Error memuat tips: ${error.message}` : 'Memuat tips...'}
                    </p>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Head title="Tips" />
            <div className="container mx-auto py-28 text-white space-y-12">
                <div className="space-y-10 pt-12">
                    <SearchBar initialQuery={searchQuery} onSearch={(q) => updateQueryParams({ search: q })} />
                    <CategoryFilter
                        categories={categories}
                        activeCategory={selectedCategory}
                        onCategoryChange={(c) => updateQueryParams({ category: c })}
                    />
                </div>

                <div className='space-y-3'>
                    <h2 className="text-4xl font-bold">Tips Terbaru</h2>
                    <div>Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla ph</div>
                </div>

                {searchQuery && (
                    <div className="mb-6 text-lg text-gray-300">
                        Hasil pencarian untuk: "<span className="font-semibold text-primary-3">{searchQuery}</span>"
                    </div>
                )}

                <div className="grid grid-rows-3 gap-12">
                    {paginatedArticles.map(article => (
                        <ArticleCard
                            key={article.id}
                            article={{ ...article, published_at: formatDate(article.created_at) }}
                        />
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="mt-8 flex flex-wrap gap-2">
                        {displayedPages.map((page, idx) => {
                            if (page === 'ellipsis-left' || page === 'ellipsis-right') {
                                return (
                                    <span key={idx} className="w-12 h-12 flex items-center justify-center text-gray-400">
                                        ...
                                    </span>
                                );
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => updateQueryParams({ page })}
                                    className={`w-12 h-12 rounded-full font-bold ${page === currentPage
                                            ? 'bg-primary-1 text-black'
                                            : 'text-primary-1 border-2 border-primary-1'
                                        }`}
                                >
                                    {page}
                                </button>
                            );
                        })}
                    </div>
                )}

                {paginatedArticles.length === 0 && (
                    <div className="text-center mt-10 text-xl text-gray-400">
                        {searchQuery || selectedCategory
                            ? 'Tidak ada tips atau artikel yang ditemukan.'
                            : 'Belum ada tips atau artikel yang tersedia saat ini.'}
                    </div>
                )}
            </div>
        </MainLayout>
    );
}