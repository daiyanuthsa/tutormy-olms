import React from 'react';
import { Icon } from '@iconify/react';

const CourseHero = ({ course, isEnrolled, isJoinedGroup, onEnroll, onJoinGroup }) => {
    const handleMainActionButtonClick = () => {
        if (!isEnrolled) {
            onEnroll(); // Trigger enroll jika belum enroll
        } else if (isEnrolled && !isJoinedGroup) {
            onJoinGroup(); // Trigger gabung grup jika sudah enroll tapi belum gabung grup
        }
        // Jika sudah enroll dan sudah gabung grup, tombol ini bisa jadi "Lanjutkan Belajar"
        // Logika ini bisa ditambahkan di sini atau di CourseDetails jika ada halaman lain untuk belajar
    };

    const mainButtonText = !isEnrolled
        ? 'Gabung Kelas'
        : (isEnrolled && !isJoinedGroup)
            ? 'Gabung Grup'
            : 'Lanjutkan Belajar'; // Atau "Belajar Sekarang" seperti di gambar

    const mainButtonClass = `
        bg-gradient-light-left font-extrabold px-8 py-3 rounded-full text-white text-lg
        hover:opacity-90 transition-opacity flex items-center justify-center gap-2
        ${!isEnrolled && 'w-full'} // Jika belum enroll, tombol Gabung Kelas full width
    `;

    return (
        <div className="rounded-2xl overflow-hidden bg-primary-dark-3 shadow-lg">
            <img
                src={course.cover_image_url}
                alt={course.title}
                className="w-full h-auto max-h-[350px] object-cover"
            />
            <div className="p-6">
                <h1 className="text-3xl font-extrabold text-white mb-3">{course.title}</h1>
                <div className="flex items-center text-neutral-3 text-sm mb-4">
                    <img
                        src="https://via.placeholder.com/40x40" // Placeholder for mentor avatar
                        alt="Mentor Avatar"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <p className="font-semibold">{course.mentor_name}</p>
                        <p>{course.mentor_title}</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 text-neutral-3 text-sm mb-6">
                    <div className="flex items-center gap-1">
                        <Icon icon="ic:round-play-circle" className="text-xl" />
                        <span>{course.total_videos} Video Pembelajaran</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Icon icon="fluent:people-community-20-filled" className="text-xl" />
                        <span>{course.students_joined} Siswa</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    {/* Main Action Button */}
                    <button
                        onClick={handleMainActionButtonClick}
                        className={mainButtonClass}
                    >
                        {mainButtonText}
                        {/* Contoh ikon jika diperlukan */}
                        {isEnrolled && !isJoinedGroup && <Icon icon="ic:baseline-telegram" className="text-xl" />}
                        {isEnrolled && isJoinedGroup && <Icon icon="material-symbols:play-arrow" className="text-xl" />}
                    </button>

                    {/* Secondary Button - Visible only if enrolled and not joined group */}
                    {isEnrolled && isJoinedGroup && (
                        <button
                            onClick={() => alert('Melihat Grup!')} // Ganti dengan logika navigasi ke grup
                            className="bg-primary-dark-1 border-2 border-primary-3 px-8 py-3 rounded-full text-primary-3 text-lg font-semibold
                                hover:bg-primary-3 hover:text-white transition-colors flex items-center justify-center gap-2"
                        >
                            <Icon icon="ic:baseline-telegram" className="text-xl" />
                            Lihat Grup
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseHero;