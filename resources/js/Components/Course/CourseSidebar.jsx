import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import CheckoutForm from './CheckoutForm'; // Import CheckoutForm

const CourseSidebar = ({ course, isEnrolled, isJoinedGroup, onEnroll, onJoinGroup }) => {
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);

    const handleMainActionButtonClick = () => {
        if (!isEnrolled) {
            setShowCheckoutForm(true); // Tampilkan form checkout
        } else if (isEnrolled && !isJoinedGroup) {
            onJoinGroup(); // Gabung grup jika sudah enroll tapi belum gabung
        }
        // Jika sudah enroll dan sudah gabung, tidak ada aksi dari tombol utama di sidebar
    };

    const mainButtonText = !isEnrolled
        ? 'Gabung Kelas'
        : (isEnrolled && !isJoinedGroup)
            ? 'Gabung Grup'
            : 'Sudah Gabung Kelas'; // Teks tombol jika sudah enroll & gabung

    const mainButtonClass = `
        w-full font-extrabold px-8 py-3 rounded-full text-white text-lg
        hover:opacity-90 transition-opacity flex items-center justify-center gap-2
        ${!isEnrolled ? 'bg-gradient-light-left' : 'bg-neutral-6 cursor-not-allowed'}
    `;

    return (
        <div className="bg-primary-dark-3 rounded-2xl p-6 shadow-lg">
            {/* Harga */}
            <div className="mb-6">
                <p className="text-neutral-3 text-lg mb-1">Rp</p>
                <p className="text-white text-4xl font-extrabold">
                    {course.price.toLocaleString('id-ID')}
                </p>
            </div>

            {/* Detail Paket */}
            <div className="mb-6">
                <h3 className="text-white text-xl font-bold mb-3">Detail</h3>
                <div className="flex items-center gap-3 text-neutral-3 mb-2">
                    <Icon icon="ph:package-fill" className="text-xl" />
                    <span>Paket {course.package_name}</span>
                </div>
                {course.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 text-neutral-3 mb-2">
                        <Icon icon="ic:round-check-circle" className="text-primary-3 text-xl" />
                        <span>{benefit}</span>
                    </div>
                ))}
            </div>

            {/* Tombol Aksi Utama */}
            {!showCheckoutForm && ( // Sembunyikan tombol jika form checkout tampil
                <button
                    onClick={handleMainActionButtonClick}
                    className={mainButtonClass}
                    disabled={isEnrolled && isJoinedGroup} // Disable jika sudah semua
                >
                    {mainButtonText}
                    {isEnrolled && !isJoinedGroup && <Icon icon="ic:baseline-telegram" className="text-xl" />}
                </button>
            )}

            {/* Kondisi Tombol "Gabung Grup" jika sudah enroll tapi belum gabung grup */}
            {isEnrolled && !isJoinedGroup && (
                <button
                    onClick={onJoinGroup}
                    className="mt-4 w-full bg-primary-dark-1 border-2 border-primary-3 px-8 py-3 rounded-full text-primary-3 text-lg font-semibold
                                hover:bg-primary-3 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                    <Icon icon="ic:baseline-telegram" className="text-xl" />
                    Gabung Grup
                </button>
            )}

            {/* Form Checkout (Tampil jika belum enroll dan tombol Gabung Kelas diklik) */}
            {showCheckoutForm && (
                <CheckoutForm
                    onClose={() => setShowCheckoutForm(false)}
                    onCheckoutSuccess={onEnroll} // Ketika checkout berhasil, set isEnrolled jadi true
                />
            )}

            {/* Punya Pertanyaan? */}
            <div className="mt-8 bg-gradient-to-br from-primary-3 to-primary-6 rounded-xl p-5 text-white text-center">
                <h3 className="text-lg font-bold mb-2">Punya Pertanyaan?</h3>
                <p className="text-sm mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark-1 font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
                    <Icon icon="ri:whatsapp-fill" className="text-xl" />
                    Hubungi Kami
                </a>
                <p className="text-xs mt-3">tutormy.domain.com</p>
            </div>
        </div>
    );
};

export default CourseSidebar;