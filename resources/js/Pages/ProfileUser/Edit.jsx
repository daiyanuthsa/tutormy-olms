import { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import MainLayout from "@/Layouts/MainLayout";
import { Icon } from "@iconify/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm";

const MAX_CHARS = 1000;

const FormInput = ({ label, type, value, onChange, icon }) => (
    <div className="space-y-2">
        <label className="text-sm font-medium">{label}</label>
        <div className="relative">
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="w-full bg-transparent border border-primary-1 rounded-full px-4 py-3 focus:outline-none focus:border-primary-3"
            />
            {icon && (
                <Icon
                    icon={icon}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                />
            )}
        </div>
    </div>
);

const RadioOption = ({ name, value, label, checked, onChange }) => (
    <label className="flex items-center gap-2 cursor-pointer bg-transparent border border-primary-1 rounded-full px-8 lg:px-10 py-3">
        <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            className="w-4 h-4 text-primary-3 bg-transparent border-primary-1 focus:ring-primary-3"
        />
        <span className="text-sm">{label}</span>
    </label>
);

const ProfilePhoto = () => {
    const [showModal, setShowModal] = useState(false);
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef();
    const { data, setData, put, processing, reset, recentlySuccessful } = useForm({ photo: null });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData("photo", file);

        if (!file) return setPreview(null);

        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("profile.photo.update"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setPreview(null);
                setShowModal(false);
            },
        });
    };

    return (
        <>
            <div className="flex flex-col items-center gap-5">
                <img
                    src="/assets/teacher.png"
                    alt="profile"
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
                />
                <button className="border px-4 py-2.5 text-xs rounded-full" onClick={() => setShowModal(true)}>
                    Upload foto baru
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-neutral-4 border-primary-3 border rounded-2xl p-6 w-[90%] max-w-md">
                        <h2 className="text-lg font-semibold mb-4">Upload Foto Baru</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                ref={fileInputRef}
                                className="text-sm"
                            />
                            {preview && (
                                <div className="mt-4">
                                    <p className="text-sm mb-2">Preview:</p>
                                    <img src={preview} alt="Preview" className="w-28 h-28 rounded-full object-cover" />
                                </div>
                            )}
                            <div className="flex justify-end gap-2 mt-6">
                                <PrimaryButton
                                    type="button"
                                    className="px-4 py-2 rounded-full"
                                    onClick={() => {
                                        setShowModal(false);
                                        reset();
                                        setPreview(null);
                                    }}
                                >
                                    Batal
                                </PrimaryButton>
                                <PrimaryButton type="submit" disabled={processing} className="rounded-full px-4 py-2">
                                    Simpan
                                </PrimaryButton>
                            </div>
                            <Transition
                                show={recentlySuccessful}
                                enter="transition-opacity duration-300"
                                enterFrom="opacity-0"
                                leave="transition-opacity duration-300"
                                leaveTo="opacity-0"
                            >
                                <p className="text-green-600 text-sm mt-2">Foto berhasil diubah!</p>
                            </Transition>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

const FormSection = ({ data, setData, errors, processing, handleSubmit }) => (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
            <p className="text-xl font-semibold mb-4">About</p>
            <textarea
                value={data.about}
                onChange={(e) => setData("about", e.target.value)}
                placeholder="Deskripsikan dirimu secara singkat"
                className="w-full h-40 px-4 py-3 bg-neutral-5 rounded-2xl resize-none text-sm"
                maxLength={MAX_CHARS}
            />
            {errors.about && <p className="text-red-500 text-sm mt-2">{errors.about}</p>}
        </div>

        <FormInput label="Nama Lengkap" type="text" icon="tabler:x" value={data.name} onChange={(e) => setData("name", e.target.value)} />

        <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>
            <div className="relative">
                <select
                    name="status"
                    value={data.status}
                    onChange={(e) => setData("status", e.target.value)}
                    className="w-full bg-transparent border border-primary-1 rounded-full px-4 py-3 text-white focus:outline-none focus:border-primary-3 appearance-none"
                >
                    {["mahasiswa", "pelajar", "pekerja"].map((status) => (
                        <option key={status} value={status} className="bg-neutral-4 text-white capitalize">
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                    ))}
                </select>
                <Icon icon="tabler:chevron-down" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
            </div>
        </div>

        <FormInput label="Email" type="email" value={data.email} onChange={(e) => setData("email", e.target.value)} />
        <FormInput label="Tanggal Lahir" type="date" value={data.date_birth} onChange={(e) => setData("date_birth", e.target.value)} icon="tabler:calendar" />
        <FormInput label="Nomor WhatsApp" type="tel" value={data.phone} onChange={(e) => setData("phone", e.target.value)} icon="tabler:x" />

        <div className="space-y-3">
            <label className="text-sm font-medium">Jenis Kelamin</label>
            <div className="flex flex-wrap gap-4">
                {[
                    { value: "M", label: "Laki-Laki" },
                    { value: "F", label: "Perempuan" },
                ].map(({ value, label }) => (
                    <RadioOption
                        key={value}
                        name="gender"
                        value={value}
                        label={label}
                        checked={data.gender === value}
                        onChange={(e) => setData("gender", e.target.value)}
                    />
                ))}
            </div>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>

        {Object.keys(errors).length > 0 && (
            <div className="md:col-span-2 text-red-500 text-sm space-y-1">
                {Object.values(errors).map((err, i) => (
                    <div key={i}>{err}</div>
                ))}
            </div>
        )}

        <div className="md:col-span-2 flex justify-center">
            <PrimaryButton className="rounded-2xl w-full md:w-80" type="submit" disabled={processing}>
                Simpan
            </PrimaryButton>
        </div>
    </form>
);

const Edit = ({ auth }) => {
    const user = auth?.user || {};
    const formatDate = (date) => (date ? date.split("T")[0] : "");
    const { data, setData, patch, processing, errors } = useForm({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        date_birth: formatDate(user.date_birth),
        status: user.status || "",
        gender: user.gender || "",
        about: user.about || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route("profile.update"), {
            preserveScroll: true,
            onSuccess: () => alert("Profil berhasil diperbarui!"),
        });
    };

    return (
        <MainLayout>
            <main className="py-28 w-full space-y-7">
                <section className="text-white">
                    <div className="container mx-auto space-y-6">
                        <h6 className="text-2xl font-bold">Selamat Datang kembali, {user.name}!</h6>
                        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
                            <ProfilePhoto />
                            <div className="flex-1 space-y-20">
                                <FormSection data={data} setData={setData} errors={errors} processing={processing} handleSubmit={handleSubmit} />
                                <div className="shadow sm:rounded-lg">
                                    <UpdatePasswordForm className="max-w-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    );
};

export default Edit;