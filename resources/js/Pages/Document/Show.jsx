import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
export default function Show({ document }) {
    // Helper function to format date as "Hari, DD MMMM YYYY"
    function formatDate(dateString) {
        const days = [
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu",
        ];
        const months = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];
        const date = new Date(dateString);
        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${dayName}, ${day} ${month} ${year}`;
    }

    return (
        <MainLayout>
            <Head title={document.name} />
            <div className="absolute w-60 h-60 lg:w-96 lg:h-96 bg-purple-700 blur-[250px] rounded-full left-[-100px] top-1/2 z-0" />
            <div className="container mx-auto px-16 py-40 text-white">
                <section className="space-y-10">
                    <div className="space-y-12">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold">
                                {document.name}
                            </h1>
                            <p className="text-sm font-medium">
                                {document.description}
                            </p>
                            <p className="text-xs">
                                {'Last Updated: ' + formatDate(
                                    document.active_version.effective_date
                                )}
                            </p>
                        </div>

                        <div
                            className="prose prose-invert max-w-none font-medium leading-relaxed
                                [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-purple-300
                                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-purple-200
                                [&_p]:mb-4 [&_p]:text-white [&_p]:text-justify
                                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
                                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
                                [&_li]:mb-2 [&_li]:text-white"
                            dangerouslySetInnerHTML={{
                                __html: document.active_version.content,
                            }}
                        />
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
