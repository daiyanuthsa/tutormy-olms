import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import ApplicationLogo from './ApplicationLogo';
import { Icon } from '@iconify/react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Course', href: '/course' },
    { name: 'Tips', href: '/tips' },
];

export default function Navbar() {
    const { props, url } = usePage();
    const user = props.auth?.user;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed px-2 md:px-5 w-full z-50 text-white py-4">
            <div className="container mx-auto bg-neutral-3 rounded-full py-3 flex items-center justify-between shadow-lg transition-all duration-300">
                <ApplicationLogo />

                <div className="hidden md:flex items-center gap-10 lg:gap-20">
                    <ul className="flex gap-6 lg:gap-12 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`hover:text-primary-2 transition-colors duration-200 ${url === link.href ? 'text-primary-500 font-bold' : ''
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center gap-4 lg:gap-6">
                        {user ? (
                            <Link
                                href={route('dashboard')}
                                className="hover:text-primary-2 font-semibold transition-colors"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('register')}
                                    className="hover:text-primary-2 font-semibold transition-colors"
                                >
                                    Daftar
                                </Link>
                                <PrimaryButton>
                                    <Link href={route('login')}>Masuk</Link>
                                </PrimaryButton>
                            </>
                        )}
                    </ul>
                </div>

                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Icon icon={menuOpen ? 'mdi:close' : 'mdi:menu'} className="w-7 h-7" />
                </button>
            </div>

            <div
                className={`md:hidden container bg-neutral-3 mt-2 rounded-xl shadow-lg py-4 transition-all duration-300 ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                    }`}
            >
                <ul className="flex flex-col gap-4 text-center font-medium container">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`block py-1 transition-colors ${url === link.href ? 'text-primary-500 font-bold' : 'hover:text-primary-500'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    {user ? (
                        <li>
                            <Link
                                href={route('dashboard')}
                                className="block py-1 font-semibold hover:text-primary-500"
                            >
                                Dashboard
                            </Link>
                        </li>
                    ) : (
                        <>
                            <div className="flex gap-2 items-center justify-center">
                                <li>
                                    <PrimaryButton variant='outline'>
                                        <Link href={route('register')}>Daftar</Link>
                                    </PrimaryButton>
                                </li>
                                <li>
                                    <PrimaryButton>
                                        <Link href={route('login')}>Masuk</Link>
                                    </PrimaryButton>
                                </li>
                            </div>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
