import React, { useState } from "react";
import { Icon } from "@iconify/react";
import PrimaryButton from "../PrimaryButton";
import { EmptyState, PortfolioGrid } from "./PortofolioComponents";
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

const Portofolio = ({ portfolio }) => {

    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        link: "",
        thumbnail: null,
    });


    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleOpenPopup = () => {
        if (portfolio) {
            // Mode "Ubah": isi form dengan data yang ada
            setFormData({
                name: portfolio.name,
                link: portfolio.link,
                thumbnail: null, // Reset thumbnail, karena user mungkin tidak ingin mengubahnya
            });
        } else {
            // Mode "Tambah": pastikan form kosong
            setFormData({ name: "", link: "", thumbnail: null });
        }
        setShowPopup(true);
    };

    const handleSavePortfolio = () => {
        const data = new FormData();
        data.append("name", formData.name);
        data.append("link", formData.link);

        // Hanya tambahkan thumbnail jika ada file baru yang dipilih
        if (formData.thumbnail) {
            data.append("thumbnail", formData.thumbnail);
        }
        // Inertia akan mengirim sebagai multipart/form-data
        router.post("/profile/portofolio/update", data, {

            onSuccess: (page) => {
                setShowPopup(false);
            },
            onError: (errors) => {
                console.error("Validation errors:", errors);
                alert(
                    "Terdapat kesalahan. Pastikan semua field terisi dengan benar."
                );
            },
        });
    };
console.log(portfolio);
    return (
        <section className="text-white min-h-screen">
            <div className="container mx-auto space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Portofolio Saya</h1>
                    <button
                        onClick={handleOpenPopup}
                        className="text-lg font-semibold flex items-center gap-2 transition-colors hover:text-purple-400"
                    >
                        {portfolio ? (
                            <>
                                Ubah{" "}
                                <Icon
                                    icon="ic:round-edit"
                                    className="w-6 h-6"
                                />
                            </>
                        ) : (
                            <>
                                Tambah{" "}
                                <Icon
                                    icon="ic:round-plus"
                                    className="w-6 h-6"
                                />
                            </>
                        )}
                    </button>
                </div>

                {portfolio ? (
                    <PortfolioGrid portfolio={portfolio} />
                ) : (
                    <EmptyState />
                )}

                {showPopup && (
                    <PortfolioPopup
                        formData={formData}
                        setFormData={setFormData}
                        onClose={() => setShowPopup(false)}
                        onSave={handleSavePortfolio}
                        onChange={handleInputChange}
                    />
                )}
            </div>
        </section>
    );
};

export default Portofolio;
