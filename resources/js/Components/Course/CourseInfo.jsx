import React from 'react';
import { Icon } from '@iconify/react';

const CourseInfo = ({ description, whatYouWillLearn }) => {
    // State untuk "Lihat Selengkapnya" (opsional)
    const [showFullDescription, setShowFullDescription] = useState(false);

    return (
        <div className="bg-primary-dark-3 rounded-2xl p-6 shadow-lg">
            {/* Deskripsi */}
            <p className="text-neutral-3 text-base leading-relaxed mb-6">
                {description.length > 300 && !showFullDescription ?
                    `${description.substring(0, 300)}...` : description}
                {description.length > 300 && (
                    <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        className="text-primary-3 ml-2 hover:underline"
                    >
                        {showFullDescription ? 'Ciutkan' : 'Lihat Selengkapnya'}
                    </button>
                )}
            </p>

            {/* Apa yang Kamu Pelajari */}
            <h3 className="text-white text-xl font-bold mb-4">Apa yang Kamu pelajari?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-3">
                {whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <Icon icon="ic:round-check-circle" className="text-primary-3 text-xl mt-1 flex-shrink-0" />
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseInfo;