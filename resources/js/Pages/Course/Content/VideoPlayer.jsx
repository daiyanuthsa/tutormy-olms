import React, {useState, useRef, useEffect} from "react";

const VideoPlayer = ({ video, thumbnail }) => {
    console.log("VideoPlayer component rendered with video:", video);
   
    const playerRef = useRef(null);

    const getYouTubeVideoId = (url) => {
        if (!url || typeof url !== "string") {
            console.log("Invalid URL provided:", url);
            return null;
        }
        const regex = /[?&]v=([^&#]*)/;
        const match = url.match(regex);
        return match && match[1] ? match[1] : null;
    };

    const videoId = getYouTubeVideoId(video);

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
        } else {
            console.log("Player not ready or does not exist.");
        }
    };
    return (
        <div className="aspect-video bg-black rounded-xl overflow-hidden">
            {videoId ? (
                <>
                    {/* Div ini akan menjadi target untuk IFrame Player */}
                    <div id="youtube-player" className="w-full h-full" />

                    {/* Overlay Thumbnail yang akan hilang setelah di-klik */}
                    
                </>
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <p className="text-neutral-2">Rekaman belum tersedia.</p>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
