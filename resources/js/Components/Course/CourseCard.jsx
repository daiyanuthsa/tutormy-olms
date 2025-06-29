import { Link } from '@inertiajs/react';

const CourseCard = ({ course }) => {
    return (
        <Link href={`/courses/${course.slug}`}>
            <div className="text-white bg-neutral-5 border-b-2 border-b-primary-2 rounded-b-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 hover:scale-105">
                <div className="aspect-video">
                    <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4">
                    <h3 className="font-semibold text-xs lg:text-lg mb-2">{course.name}</h3>
                    <div className="bg-neutral-700 px-2 py-1 font-bold rounded-full text-xs lg:text-sm inline-block max-w-max">
                        <span>{course.section_content_count || 'N/A'} Pelajaran</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;