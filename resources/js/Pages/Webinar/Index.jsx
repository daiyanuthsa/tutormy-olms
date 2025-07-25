import React from "react";
import Hero from "@/Components/Webminar/Hero";
import MainLayout from "@/Layouts/MainLayout";
import WebminarCard from "@/Components/Webminar/WebminarCard";
import { Icon } from "@iconify/react";
import { useState, useMemo } from "react";
import { router } from "@inertiajs/react";
const Index = ({ webinars, categories }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("Semua Kategori");

    const onCategoryChange = (category) => {
        setActiveCategory(category);
    };

    // fungsi untuk handle submit form
    const handleSearchSubmit = (e) => {
        // Mencegah browser melakukan full page reload
        e.preventDefault();

        // 3. Kirim request ke backend menggunakan router Inertia
        router.get(
            route("webinar.search"), // Menggunakan helper `route()` dari Ziggy
            { keyword: searchTerm }, // Data yang dikirim sebagai query string
            { preserveState: true } // Opsi agar state lain di halaman tidak hilang
        );
    };

    // -- BAGIAN INTI: FILTERING DATA --
    // Gunakan useMemo untuk menghitung ulang data yang difilter hanya saat diperlukan
    const filteredWebinars = useMemo(() => {
        const upcoming = webinars.upcoming_agendas ?? [];
        const past = webinars.past_agendas ?? [];

        // Jika tidak ada filter atau "Semua Kategori" dipilih, kembalikan data asli
        if (activeCategory === "Semua Kategori") {
            return {
                upcoming_agendas: upcoming,
                past_agendas: past,
            };
        }

        // Jika ada kategori yang dipilih, filter kedua array
        const filteredUpcoming = upcoming.filter(
            (webinar) => webinar.category?.name === activeCategory
        );

        const filteredPast = past.filter(
            (webinar) => webinar.category?.name === activeCategory
        );

        return {
            upcoming_agendas: filteredUpcoming,
            past_agendas: filteredPast,
        };
    }, [webinars, activeCategory]); // Dependensi: jalankan ulang jika webinars atau activeCategory berubah


    return (
        <MainLayout>
            <section className="py-28 text-white space-y-12">
                <Hero />
                {/* <pre>{JSON.stringify(webinars, null, 2)}</pre> */}
                <section>
                    <div className="text-white container py-12">
                        <form
                            onSubmit={handleSearchSubmit}
                            className="flex items-center gap-4"
                        >
                            <div className="relative w-full">
                                <Icon
                                    icon="gg:search"
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl"
                                />
                                <input
                                    type="text"
                                    placeholder="Cari kelas..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    className="pl-11 pr-4 py-2.5 rounded-2xl w-full placeholder:text-neutral-1 bg-transparent border-2 border-primary-3 focus:border-primary-3 focus:ring-primary-3 focus:outline-none text-white" // Added text-white for input value
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-gradient-light-left font-extrabold px-10 py-2.5 rounded-full text-white hover:opacity-90 transition-opacity"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    <div className="container">
                        <div className="flex gap-6 lg:gap-12 whitespace-nowrap overflow-x-auto pb-2 scrollbar-hide">
                            <button
                                key={"semua-kategori"}
                                onClick={() =>
                                    onCategoryChange("Semua Kategori")
                                }
                                className={`text-base md:text-lg font-semibold transition-colors duration-200 whitespace-nowrap 
                                    ${
                                        activeCategory === "Semua Kategori"
                                            ? "text-primary-3"
                                            : "text-white hover:text-primary-3"
                                    }`}
                            >
                                Semua Kategori
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category.slug}
                                    onClick={() =>
                                        onCategoryChange(category.name)
                                    }
                                    className={`text-base md:text-lg font-semibold transition-colors duration-200 whitespace-nowrap 
                                    ${
                                        activeCategory === category.name
                                            ? "text-primary-3"
                                            : "text-white hover:text-primary-3"
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <main className="container mx-auto space-y-10">
                    {/* Webinar Mendatang */}
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="lg:text-2xl font-bold">
                                Webinar yang akan datang
                            </h2>
                            <p className="text-sm lg:text-base">
                                Lorem ipsum dolor sit amet consectetur. Odio
                                dolor arcu ullamcorper dictum nulla ph
                            </p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredWebinars.upcoming_agendas.length > 0 ? (
                                filteredWebinars.upcoming_agendas.map((item) => (
                                    <WebminarCard
                                        key={item.id}
                                        webinar={item}
                                    />
                                ))
                            ) : (
                                <p className="text-neutral-2">
                                    Tidak ada webinar yang mendatang.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Webinar Sebelumnya */}
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="lg:text-2xl font-bold">
                                Kumpulan Webinar
                            </h2>
                            <p className="text-sm lg:text-base">
                                Lorem ipsum dolor sit amet consectetur. Odio
                                dolor arcu ullamcorper dictum nulla ph
                            </p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredWebinars.past_agendas.length > 0 ? (
                                filteredWebinars.past_agendas.map((item) => (
                                    <WebminarCard
                                        key={item.id}
                                        webinar={item}
                                    />
                                ))
                            ) : (
                                <p className="text-neutral-2">
                                    Belum ada webinar sebelumnya.
                                </p>
                            )}
                        </div>
                    </div>
                </main>
            </section>
        </MainLayout>
    );
};

export default Index;
