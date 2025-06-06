import React from 'react';
import { Icon } from '@iconify/react';

const CourseSearch = ({ value, onChange, onSubmit }) => {
    return (
        <section>
            <div className='text-white container py-12'>
                <form onSubmit={onSubmit} className="flex items-center gap-4">
                    <div className="relative w-full">
                        <Icon
                            icon="gg:search"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl" 
                        />
                        <input
                            type="text"
                            placeholder="Cari kelas..."
                            value={value}
                            onChange={onChange}
                            className="pl-11 pr-4 py-2.5 rounded-2xl w-full placeholder:text-neutral-1 bg-transparent border-2 border-primary-3 focus:border-primary-3 focus:ring-primary-3 focus:outline-none text-white" // Added text-white for input value
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-light-left font-extrabold px-10 py-2.5 rounded-full text-white hover:opacity-90 transition-opacity"
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CourseSearch;