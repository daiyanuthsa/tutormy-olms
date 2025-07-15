import React from 'react'
import { Icon } from '@iconify/react'

const Footer = () => {
    return (
        <footer className="bg-neutral-3 text-neutral-1">
            <div className="container mx-auto py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-5">
                        <div>INI LOGO</div>
                        <address className="not-italic text-sm space-y-2">
                            <div className="flex items-center gap-2">
                                <Icon
                                    icon="vaadin:office"
                                    className="text-white"
                                />
                                <span>
                                    Jl. Ilmu No. 123, Jakarta, Indonesia 10230
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon
                                    icon="ic:baseline-local-post-office"
                                    className="text-white"
                                />
                                <a href="mailto:support@tutormy.id">
                                    support@tutormy.id
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon
                                    icon="material-symbols:call"
                                    className="text-white"
                                />
                                <a href="tel:+6281234567890">
                                    +62 812 3456 7890
                                </a>
                            </div>
                        </address>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                        <nav aria-label="Tentang Kami">
                            <h2 className="font-semibold mb-2 text-white">
                                Tentang Kami
                            </h2>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <a href="#">Tentang Tutormy.id</a>
                                </li>
                                <li>
                                    <a href="#">Karier</a>
                                </li>
                                <li>
                                    <a href="#">Kontak Kami</a>
                                </li>
                                <li>
                                    <a href="#">Testimoni</a>
                                </li>
                            </ul>
                        </nav>
                        <nav aria-label="Panduan">
                            <h2 className="font-semibold mb-2 text-white">
                                Panduan
                            </h2>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <a href="/documents/terms-of-service">
                                        Syarat & Ketentuan
                                    </a>
                                </li>
                                <li>
                                    <a href="/documents/privacy-policy">
                                        Kebijakan Privasi
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav aria-label="Fitur">
                            <h2 className="font-semibold mb-2 text-white">
                                Fitur
                            </h2>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <a href="#">Kelas Online</a>
                                </li>
                                <li>
                                    <a href="#">Daftar Tutor</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Hubungi Kami</a>
                                </li>
                                <li>
                                    <a href="/documents/privacy-policy">
                                        Kebijakan Privasi
                                    </a>
                                </li>
                                <li>
                                    <a href="/documents/terms-of-service">
                                        Syarat & Ketentuan
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between lg:items-center mt-12 gap-4">
                    <div className="flex gap-2 text-white">
                        {[
                            "ic:baseline-facebook",
                            "mdi:youtube",
                            "ri:instagram-fill",
                            "mdi:pinterest",
                            "ri:whatsapp-fill",
                        ].map((icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="bg-white bg-opacity-50 w-11 h-11 flex items-center justify-center rounded-full"
                            >
                                <Icon icon={icon} className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                    <div className="text-left md:text-right text-sm ">
                        Copyright 2024 Tutormy.id. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer