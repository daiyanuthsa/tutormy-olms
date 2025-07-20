import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import PrimaryButton from '../PrimaryButton';
import { EmptyState, PortfolioGrid, } from './PortofolioComponents';
import { router } from "@inertiajs/react";

const PortfolioPopup = ({
    formData,
    setFormData,
    onClose,
    onSave,
    onChange,
}) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-neutral-3 rounded-2xl p-6 w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Tambahkan Portofolio</h2>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <Icon icon="material-symbols:close" className="w-6 h-6" />
                </button>
            </div>

            <div className="space-y-4">
                {["name", "link"].map((field, idx) => (
                    <div key={idx}>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            {field === "name"
                                ? "Masukkan Nama"
                                : "Salin atau ketikan link"}
                        </label>
                        <input
                            type={field === "name" ? "text" : "url"}
                            value={formData[field]}
                            onChange={(e) => onChange(field, e.target.value)}
                            className="w-full bg-neutral-5 border border-primary-3 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder={
                                field === "name"
                                    ? "ex: Project UI Landing Page"
                                    : "https://github.com/username/project"
                            }
                        />
                    </div>
                ))}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Upload Thumbnail (Max 2MB)
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                            onChange("thumbnail", e.target.files[0])
                        }
                        className="w-full bg-neutral-5 border border-primary-3 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                </div>

                <div className="flex justify-end">
                    <PrimaryButton className="rounded-full" onClick={onSave}>
                        Simpan
                    </PrimaryButton>
                </div>
            </div>
        </div>
    </div>
);

const Portofolio = ({ portofolios }) => {
    console.log(portofolios);
    // const [portfolios, setPortfolios] = useState([]);
    const [portfolios, setPortfolios] = useState(portofolios || []);
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        link: "",
        thumbnail: null,
    });

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleAddPortfolio = () => {
        if (
            formData.name.trim() &&
            formData.link.trim() &&
            formData.thumbnail
        ) {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("link", formData.link);
            data.append("thumbnail", formData.thumbnail);

            router.post("/profile/portofolio/update", data, {
                forceFormData: true,
                onSuccess: (page) => {
                    const result = page.props.flash?.portfolio || {}; // atau dari response session

                    const newPortfolio = {
                        id: Date.now(),
                        name: formData.name,
                        link: formData.link,
                        thumbnailUrl:
                            result.thumbnail_url ||
                            URL.createObjectURL(formData.thumbnail),
                    };

                    setPortfolios([...portfolios, newPortfolio]);
                    setFormData({ name: "", link: "", thumbnail: null });
                    setShowPopup(false);
                },
                onError: (errors) => {
                    console.error("Validation errors:", errors);
                    alert("Terdapat kesalahan validasi.");
                },
                onFinish: () => {
                    // Opsional: loading selesai
                },
            });
        }
    };

    return (
        <section className="text-white min-h-screen">
            <div className="container mx-auto space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Portofolio Saya</h1>
                    <button
                        onClick={() => setShowPopup(true)}
                        disabled={portfolios.length > 0}
                        className={`text-lg font-semibold flex items-center gap-2 transition-colors ${
                            portfolios.length > 0
                                ? "text-gray-500 cursor-not-allowed"
                                : "hover:text-purple-400"
                        }`}
                    >
                        Tambah <Icon icon="ic:round-plus" className="w-6 h-6" />
                    </button>
                </div>

                {portfolios.length === 0 ? (
                    <EmptyState />
                ) : (
                    <PortfolioGrid portfolios={portfolios} />
                )}

                {showPopup && (
                    <PortfolioPopup
                        formData={formData}
                        setFormData={setFormData}
                        onClose={() => setShowPopup(false)}
                        onSave={handleAddPortfolio}
                        onChange={handleInputChange}
                    />
                )}
            </div>
        </section>
    );
};

export default Portofolio;