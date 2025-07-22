import React from "react";
import { Link, Head } from "@inertiajs/react";
import RelatedTips from "@/Components/Tips/RelatedTips";
import ArticleContent from "@/Components/Tips/ArticleContent";
import MainLayout from "@/Layouts/MainLayout";

const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

const formatTime = (dateStr) =>
    new Date(dateStr).toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

export default function Details({ article, writer }) {
    const currentArticle = {
        ...article,
        published_at: formatDate(article.created_at),
        published_time: formatTime(article.created_at),
    };

    const selectedCategory = `category-${article.category_id}`;

    return (
        <>
            <MainLayout>
                <Head title="Tips" />
                <div className="container  mx-auto py-14 text-white">
                    <div className="flex flex-col mt-10 lg:flex-row gap-8">
                        {/* Sidebar Kategori */}
                        <div className="hidden lg:block lg:w-1/5">
                            {/* <CategorySidebar
                            currentCategory={selectedCategory}
                            onCategorySelect={() => {}}
                        /> */}
                        </div>

                        <div className="absolute w-60 h-60 lg:w-96 lg:h-96 bg-purple-700 blur-[250px] rounded-full left-[-100px] top-1/2 z-0" />

                        {/* Konten Artikel */}
                        <div className="w-full lg:w-3/5">
                            <ArticleContent
                                article={currentArticle}
                                author={writer}
                                allArticles={[]}
                            />
                        </div>

                        {/* Tips Terkait (kosong karena tidak ambil semua data) */}
                        <div className="w-full lg:w-1/5 pt-6">
                            <RelatedTips articles={[]} />
                        </div>
                    </div>
                </div>
                
            </MainLayout>
            {/* <main className="font-inter">
                
            </main> */}
        </>
    );
}
