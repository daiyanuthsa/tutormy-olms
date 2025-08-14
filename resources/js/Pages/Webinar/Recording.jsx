import MainLayout from "@/Layouts/MainLayout";
import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";

export default function Recording({ webinarDetail }) {
    // if (!webinarDetail) return null;
console.log(webinarDetail);
    const formattedDate = new Date(
        webinarDetail.event_datetime
    ).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const startTime = new Date(webinarDetail.event_datetime).toLocaleTimeString(
        "id-ID",
        {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        }
    );
    const [showOverlay, setShowOverlay] = useState(true); // State untuk mengontrol overlay
    const playerRef = useRef(null);

    const getYouTubeVideoId = (url) => {
        if (!url) return null;
        const regex = /[?&]v=([^&#]*)/;
        const match = url.match(regex);
        return match && match[1] ? match[1] : null;
    };

    const videoId = getYouTubeVideoId(webinarDetail.recording_url);

    useEffect(() => {
        // Jangan lakukan apa-apa jika tidak ada videoId
        if (!videoId) return;

        // Fungsi untuk menginisialisasi player
        const createPlayer = () => {
            // Hancurkan player lama jika ada (misalnya jika videoId berubah)
            if (playerRef.current) {
                playerRef.current.destroy();
            }

            playerRef.current = new window.YT.Player("youtube-player", {
                videoId: videoId,
                width: "100%",
                height: "100%",
                playerVars: {
                    autoplay: 0, // Jangan autoplay saat load, tunggu user klik
                    controls: 1, // Tampilkan kontrol video
                    rel: 0, // Jangan tampilkan video terkait di akhir
                },
                events: {
                    onReady: (event) => {
                        // Player siap
                        console.log("YouTube Player is ready.");
                    },
                },
            });
        };

        // Periksa apakah YouTube IFrame API sudah dimuat
        if (!window.YT) {
            console.log("Loading YouTube IFrame API...");
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api"; // URL yang benar
            document.body.appendChild(tag);
            window.onYouTubeIframeAPIReady = createPlayer;
        } else {
            // Jika sudah ada, langsung buat player
            createPlayer();
        }

        // Cleanup function untuk menghapus player saat komponen unmount
        return () => {
            if (
                playerRef.current &&
                typeof playerRef.current.destroy === "function"
            ) {
                console.log("Destroying YouTube player");
                playerRef.current.destroy();
            }
        };
    }, [videoId]); // Hanya bergantung pada videoId

    const handlePlay = () => {
        if (
            playerRef.current &&
            typeof playerRef.current.playVideo === "function"
        ) {
            console.log("Playing video...");
            playerRef.current.playVideo();
            setShowOverlay(false); // Sembunyikan overlay saat video diputar
        } else {
            console.log("Player not ready or does not exist.");
        }
    };


    return (
        <MainLayout>
            <section className="text-white">
                <div className="container mx-auto py-28 lg:py-36 space-y-16">
                    <div className="flex flex-col md:flex-row lg:items-center gap-6 lg:gap-12">
                        <div className="md:w-1/2 xl:w-auto rounded-xl overflow-hidden bg-neutral-3">
                            <div className="lg:h-96 relative">
                                <img
                                    src={`/storage/${
                                        webinarDetail.thumbnail ||
                                        "assets/hero.png"
                                    }`}
                                    alt={webinarDetail.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="bg-gradient-light text-center text-xs lg:text-base font-semibold py-2.5">
                                TONTON REKAMAN WEBINAR DI BAWAH INI
                            </div>
                        </div>

                        <div className="space-y-8 flex-1">
                            <div className="text-2xl lg:text-4xl font-semibold">
                                {webinarDetail.name}
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-base lg:text-lg font-medium">
                                    <Icon
                                        icon="mdi:folder"
                                        className="text-lg"
                                    />
                                    <span>{webinarDetail.category.name}</span>
                                </div>

                                <div className="flex items-center gap-2 text-base lg:text-lg font-medium">
                                    <Icon
                                        icon="mdi:access-time"
                                        className="text-lg"
                                    />
                                    <span>
                                        {webinarDetail.duration_minutes} menit
                                    </span>
                                </div>

                                {/* <div className="flex items-center gap-2 text-base lg:text-lg font-medium">
                                    <Icon
                                        icon="ic:outline-place"
                                        className="text-lg"
                                    />
                                    <span>Zoom Meeting</span>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5">
                        {/* Player */}
                        {/* Player */}
                        <div className="space-y-4">
                            {/* <h2 className="font-semibold text-lg">
                                Rekaman Webinar
                            </h2> */}
                            <div className="relative w-full h-64 md:h-96 lg:h-[500px] xl:h-[600px] rounded-xl overflow-hidden bg-black">
                                {videoId ? (
                                    <>
                                        {/* Div ini akan menjadi target untuk IFrame Player */}
                                        <div
                                            id="youtube-player"
                                            className="w-full h-full"
                                        />

                                        {/* Overlay Thumbnail yang akan hilang setelah di-klik */}
                                        {showOverlay && (
                                            <div
                                                className="absolute inset-0 w-full h-full cursor-pointer group"
                                                onClick={handlePlay}
                                                style={{
                                                    backgroundImage: `url("/storage/${
                                                        webinarDetail.thumbnail ||
                                                        "assets/hero.png"
                                                    }")`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition:
                                                        "center",
                                                }}
                                            >
                                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
                                                    <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition">
                                                        ▶ Tonton Rekaman
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <p className="text-neutral-2">
                                            Rekaman belum tersedia.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <h6 className="lg:text-2xl font-bold">
                            Deskripsi Webinar
                        </h6>
                        <p className="text-neutral-2">
                            {webinarDetail.description}
                        </p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
