import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
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
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
                                    className={`hover:text-primary-2 transition-colors duration-200 ${url === link.href ? 'text-primary-1 font-bold' : ''
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center gap-4 lg:gap-6 relative">
                        {user ? (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="bg-gradient-light px-4 py-2 rounded-full font-semibold hover:bg-gradient-dark flex items-center gap-2"
                                >
                                    <Icon icon="mdi:account-circle" className="text-xl" />
                                    {user.name}
                                    <Icon icon="icon-park-solid:down-one" />
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-40 font-semibold bg-gradient-light rounded-md shadow-lg z-50">
                                        <Link
                                            href={route('dashboard')}
                                            className="block px-4 py-2 hover:bg-gradient-dark"
                                        >
                                            Dashboard
                                        </Link>
                                        <Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="w-full text-left block px-4 py-2 hover:bg-gradient-dark"
                                        >
                                            Logout
                                        </Link>
                                    </div>
                                )}
                            </div>
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
                <ul className="flex flex-col gap-4 text-center items-center font-medium container">
                    <li className='flex items-center w-max px-3 justify-center gap-2 bg-gradient-light rounded-full py-1'>
                        <Icon icon="mdi:account-circle" className="text-xl" />
                        {user.name}
                    </li>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`block py-1 transition-colors ${url === link.href ? 'text-primary-1 font-bold' : 'hover:text-primary-1'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    {user ? (
                        <>

                            <li>
                                <Link
                                    href={route('dashboard')}
                                    className="block py-1 font-semibold hover:text-primary-1"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="block w-full py-1 font-semibold hover:text-primary-1"
                                >
                                    Logout
                                </Link>
                            </li>
                        </>
                    ) : (
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
                    )}
                </ul>
            </div>
        </nav>
    );
}