import React from 'react'
import { Icon } from '@iconify/react'

const Footer = () => {
    return (
        <footer className="bg-neutral-3 text-neutral-1">
            <div className="container mx-auto py-20">
                <div className="grid grid-cols-1  gap-4">
                    {/* Logo Section */}
                    <div className="flex flex-col justify-center items-center gap-5">
                        <div className="flex justify-center items-center">
                            <img
                                src="assets/logo-vertical.png"
                                alt="Logo"
                                className="w-1/2"
                            />
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex justify-center items-center mt-2">
                        <div className="flex gap-3">
                            {[
                                {
                                    icon: "simple-icons:tiktok",
                                    href: "https://www.tiktok.com/@tutormy.id",
                                },
                                {
                                    icon: "mdi:youtube",
                                    href: "https://www.youtube.com/@tutormy_id",
                                },
                                {
                                    icon: "ri:instagram-fill",
                                    href: "https://www.instagram.com/tutormy.id/",
                                },
                                {
                                    icon: "mdi:linkedin",
                                    href: "https://www.linkedin.com/company/tutormy-id/",
                                },
                                {
                                    icon: "ri:whatsapp-fill",
                                    href: "https://wa.me/62895808209312",
                                },
                            ].map((social, idx) => (
                                <button
                                    key={idx}
                                    onClick={() =>
                                        window.open(social.href, "_blank")
                                    }
                                    className="bg-primary-3 w-12 h-12 flex items-center justify-center rounded-full hover:bg-opacity-30 transition-colors"
                                >
                                    <Icon
                                        icon={social.icon}
                                        className="w-6 h-6 text-white "
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Contact Info */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
                    <div className="flex items-center gap-2 text-sm">
                        <Icon
                            icon="ic:baseline-local-post-office"
                            className="text-white w-4 h-4"
                        />
                        <a
                            href="mailto:support@tutormy.id"
                            className="hover:text-gray-300"
                        >
                            support@tutormy.id
                        </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">|</div>
                    <div className="flex items-center gap-2 text-sm">
                        <Icon
                            icon="material-symbols:call"
                            className="text-white w-4 h-4"
                        />
                        <a
                            href="tel:+62895808209312"
                            className="hover:text-gray-300"
                        >
                            +62 8958 0820 9312
                        </a>
                    </div>
                </div>

                {/* Terms & Privacy */}
                <div className="flex justify-center items-center mt-6">
                    <div className="flex gap-4 text-sm">
                        <a
                            href="/documents/terms-of-service"
                            className="hover:text-gray-300"
                        >
                            Terms & Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center lg:items-center mt-2">
                    <div className="text-center text-sm font-semibold">
                        ©Copyright 2025 Tutormy.id. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer