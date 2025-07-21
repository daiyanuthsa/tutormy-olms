import React, { useMemo } from "react";
import MainLayout from "@/Layouts/MainLayout";
import ArticleCard from '@/Components/Tips/ArticleCard.jsx';
import SearchBar from "@/Components/Tips/SearchBar";
import CategoryFilter from "@/Components/Tips/CategoryFilter";
import { usePage, Head, router } from "@inertiajs/react";

const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

export default function Index({ articles, categories }) {
    const { url, props } = usePage();
    const queryParams = new URLSearchParams(window.location.search);
    const searchQuery = queryParams.get("search") || "";
    const selectedCategory = queryParams.get("category") || "";
    const currentPage = parseInt(queryParams.get("page")) || 1;

    const updateQueryParams = ({
        search = searchQuery,
        category = selectedCategory,
        page = 1,
    }) => {
        const params = new URLSearchParams();
        if (search) params.set("search", search);
        if (category) params.set("category", category);
        params.set("page", page);

        router.get(
            `${window.location.pathname}?${params.toString()}`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    };

    const displayedPages = useMemo(() => {
        const pages = [];
        if (articles.last_page <= 5) {
            for (let i = 1; i <= articles.last_page; i++) pages.push(i);
        } else {
            pages.push(1);
            if (currentPage > 3) pages.push("ellipsis-left");
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(articles.last_page - 1, currentPage + 1);
            for (let i = start; i <= end; i++) pages.push(i);
            if (currentPage < articles.last_page - 2)
                pages.push("ellipsis-right");
            pages.push(articles.last_page);
        }
        return pages;
    }, [currentPage, articles.last_page]);

    // const filteredArticles = articles.data.filter((a) => a.is_published);

    return (
        <MainLayout>
            <Head title="Tips" />
            <div className="container mx-auto py-24 lg:py-28 text-white space-y-12">
                <div className="space-y-10 pt-12">
                    <SearchBar
                        initialQuery={searchQuery}
                        onSearch={(q) => updateQueryParams({ search: q })}
                    />
                    <CategoryFilter
                        categories={categories}
                        activeCategory={selectedCategory}
                        onCategoryChange={(c) =>
                            updateQueryParams({ category: c })
                        }
                    />
                </div>

                <div className="space-y-3">
                    <h2 className="text-4xl font-bold">Tips Terbaru</h2>
                    <div>
                        Lorem ipsum dolor sit amet consectetur. Odio dolor arcu
                        ullamcorper dictum nulla ph
                    </div>
                </div>

                {searchQuery && (
                    <div className="mb-6 text-lg text-gray-300">
                        Hasil pencarian untuk: "
                        <span className="font-semibold text-primary-3">
                            {searchQuery}
                        </span>
                        "
                    </div>
                )}

                <div className="grid grid-rows-3 gap-12">
                    {articles?.data?.map((article) => (
                        <ArticleCard
                            key={article.id}
                            article={{
                                ...article,
                                published_at: formatDate(article.created_at),
                            }}
                        />
                    ))}
                </div>

                {articles.last_page > 1 && (
                    <div className="mt-8 flex flex-wrap gap-2">
                        {displayedPages.map((page, idx) => {
                            if (
                                page === "ellipsis-left" ||
                                page === "ellipsis-right"
                            ) {
                                return (
                                    <span
                                        key={idx}
                                        className="w-12 h-12 flex items-center justify-center text-gray-400"
                                    >
                                        ...
                                    </span>
                                );
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => updateQueryParams({ page })}
                                    className={`w-12 h-12 rounded-full font-bold ${
                                        page === currentPage
                                            ? "bg-primary-1 text-black"
                                            : "text-primary-1 border-2 border-primary-1"
                                    }`}
                                >
                                    {page}
                                </button>
                            );
                        })}
                    </div>
                )}

                {articles?.data?.length === 0 && (
                    <div className="text-center mt-10 text-xl text-gray-400">
                        {searchQuery || selectedCategory
                            ? "Tidak ada tips atau artikel yang ditemukan."
                            : "Belum ada tips atau artikel yang tersedia saat ini."}
                    </div>
                )}
            </div>
        </MainLayout>
    );
}
