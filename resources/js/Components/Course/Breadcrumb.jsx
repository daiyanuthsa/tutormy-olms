import React from 'react';
import { Link } from '@inertiajs/react';

const Breadcrumb = ({ title }) => (
    <nav className="text-sm text-primary-1 flex gap-2 items-center">
        <Link href="/courses" className="hover:text-white">Course</Link>
        <span>/</span>
        <span className="text-white font-semibold">{title}</span>
    </nav>
);

export default Breadcrumb;