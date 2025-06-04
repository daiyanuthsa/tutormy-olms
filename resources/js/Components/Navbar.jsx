import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import ApplicationLogo from './ApplicationLogo';
import { Icon } from '@iconify/react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Course', href: '/courses' },
    { name: 'Webinar', href: '/webinar' },
    { name: 'Tips', href: '/tips' },
];

export default function Navbar() {
    const { props, url } = usePage();
    const user = props.auth?.user;
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    return (
        <>
            <nav className="fixed w-full z-50 text-white md:px-5 md:py-5">
                <div className="px-4 sm:px-10 md:container mx-auto bg-neutral-5 md:rounded-full py-5 flex items-center justify-between shadow-lg transition-all duration-300 relative">
                    <div className="hidden md:block">
                        <ApplicationLogo />
                    </div>

                    <div className="md:hidden flex items-center gap-3">
                        <button
                            className="menu-button text-white focus:outline-none bg-gradient-dark-down p-1 rounded-lg"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <Icon icon="mdi:menu" className="w-7 h-7" />
                        </button>
                    </div>

                    <div className="md:hidden">
                        <ApplicationLogo />
                    </div>

                    <div className="flex items-center gap-10 lg:gap-11">
                        <ul className="hidden md:flex gap-4 lg:gap-12 font-medium">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`hover:text-primary-2 transition-colors duration-200 ${url === link.href ? 'text-primary-2 font-bold' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="relative" ref={dropdownRef}>
                            {user ? (
                                <>
                                    <button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="bg-gradient-light px-2 md:px-4 py-2 rounded-full font-semibold hover:bg-gradient-dark flex items-center gap-2"
                                    >
                                        <Icon icon="mdi:account-circle" className="text-xl" />
                                        <span className="hidden md:inline">{user.name}</span>
                                        <Icon icon="icon-park-solid:down-one" className='hidden md:block' />
                                    </button>
                                    {dropdownOpen && (
                                        <div className="absolute right-0 mt-6 w-52 font-medium bg-neutral-5 rounded-md shadow-lg z-[60]">
                                            <Link
                                                href={route('dashboard')}
                                                className="block px-4 py-3 hover:bg-gradient-dark rounded-t-md"
                                            >
                                                <Icon icon="mdi:account" className="inline mr-2" />
                                                Profil
                                            </Link>
                                            <Link
                                                className="block px-4 py-3 hover:bg-gradient-dark"
                                            >
                                                <Icon icon="mdi:history" className="inline mr-2" />
                                                Riwayat Pembelian
                                            </Link>
                                            <Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                                className="w-full text-left block px-4 py-2 hover:bg-gradient-dark rounded-b-md text-error-1"
                                            >
                                                <Icon icon="mdi:logout" className="inline mr-2" />
                                                Logout
                                            </Link>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                                    <Link
                                        href={route('register')}
                                        className="hover:text-primary-2 font-semibold transition-colors"
                                    >
                                        Daftar
                                    </Link>
                                    <Link href={route('login')}>
                                        <PrimaryButton>Masuk</PrimaryButton>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </nav>

            {menuOpen && (
                <div className="fixed inset-0 bg-neutral-6 bg-opacity-50 z-40 md:hidden" />
            )}

            <div
                className={`mobile-menu fixed top-0 left-0 h-full w-full bg-neutral-5 z-50 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                        <ApplicationLogo />
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-white hover:text-primary-2"
                        >
                            <Icon icon="mdi:close" className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`block py-3 px-4 rounded-lg transition-colors font-medium ${url === link.href
                                    ? 'text-primary-2 bg-primary-2 bg-opacity-10'
                                    : 'text-white hover:text-primary-2 hover:bg-white hover:bg-opacity-5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {!user && (
                        <div className="mt-8 pt-6 border-t border-gray-600 space-y-3">
                            <PrimaryButton className="w-full justify-center">
                                <Link href={route('register')} className="block w-full text-center">
                                    Daftar
                                </Link>
                            </PrimaryButton>
                            <PrimaryButton variant="outline" className="w-full justify-center">
                                <Link href={route('login')} className="block w-full text-center">
                                    Masuk
                                </Link>
                            </PrimaryButton>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}