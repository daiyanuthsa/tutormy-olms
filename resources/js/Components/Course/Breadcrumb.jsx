import React from 'react';
import { Link } from '@inertiajs/react';    

const Breadcrumb = ({ path }) => {
    return (
        <nav className="text-neutral-3 text-sm">
            <ol className="list-none p-0 inline-flex">
                {path.map((item, index) => (
                    <li key={item.label} className="flex items-center">
                        {index > 0 && <span className="mx-2">/</span>}
                        {item.url ? (
                            <Link href={item.url} className="hover:text-primary-3 transition-colors">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-primary-3">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;