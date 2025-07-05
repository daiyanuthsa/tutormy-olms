import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Icon } from "@iconify/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";

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


const ProfilePhoto = () => (
    <div className="flex flex-col items-center gap-5">
        <img
            src="/assets/teacher.png"
            alt="profile"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
        />
        <button className="border px-4 py-2.5 text-xs rounded-full">
            Upload foto baru
        </button>
    </div>
);

const AboutSection = () => (
    <div className="space-y-4">
        <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">About</p>
            <button className="text-sm md:text-base font-semibold flex items-center hover:text-primary-3 gap-2">
                Edit{" "}
                <Icon icon="tabler:edit" className="w-5 h-5 md:w-6 md:h-6" />
            </button>
        </div>
        <div className="bg-neutral-5 rounded-2xl p-6 md:p-8">
            <p className="text-sm font-medium text-neutral-1 text-justify leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Odio dolor arcu
                ullamcorper dictum nulla phasellus nisi ac commodo. Mi mattis
                amet interdum urna. Egestas amet id tincidunt nascetur
                imperdiet...
            </p>
        </div>
    </div>
);

const FormSection = ({ data, setData, errors, processing, handleSubmit }) => (
    <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
    >
        <div className="col-span-1 lg:col-span-2">
            <p className="text-xl font-semibold mb-4">About</p>
            <textarea
                value={data.about}
                onChange={(e) => setData("about", e.target.value)}
                placeholder="Deskripsikan dirimu secara singkat"
                className="w-full h-40 px-4 py-3 bg-neutral-5 rounded-2xl resize-none text-sm"
                maxLength={MAX_CHARS}
            />
            {errors.about && (
                <div className="text-red-500 text-sm">{errors.about}</div>
            )}
        </div>
        <FormInput
            label="Nama Lengkap"
            type="text"
            icon="tabler:x"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            errors={errors.name}
        />

        <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>
            <div className="relative">
                <select
                    value={data.status}
                    onChange={(e) => setData("status", e.target.value)}
                    name="status"
                    className="w-full bg-transparent border border-primary-1 rounded-full px-4 py-3 text-white focus:outline-none focus:border-primary-3 appearance-none"
                >
                    <option
                        className="bg-neutral-4 text-white"
                        value="mahasiswa"
                    >
                        Mahasiswa
                    </option>
                    <option className="bg-neutral-4 text-white" value="pelajar">
                        Pelajar
                    </option>
                    <option className="bg-neutral-4 text-white" value="pekerja">
                        Pekerja
                    </option>
                </select>
                <Icon
                    icon="tabler:chevron-down"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                />
            </div>
        </div>

        <FormInput
            label="Email"
            type="email"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            errors={errors.email}
        />
        <FormInput
            label="Tanggal Lahir"
            type="date"
            value={data.date_birth}
            onChange={(e) => setData("date_birth", e.target.value)}
            errors={errors.date_birth}
            icon="tabler:calendar"
        />
        <FormInput
            label="Nomor WhatsApp"
            type="tel"
            defaultValue="+62 1234-5678"
            icon="tabler:x"
            value={data.phone}
            onChange={(e) => setData("phone", e.target.value)}
            errors={errors.phone}
        />

        <div className="space-y-2">
            <label className="text-sm font-medium">Jenis Kelamin</label>
            <div className="flex gap-4">
                <RadioOption
                    name="gender"
                    value="M"
                    label="Laki-Laki"
                    checked={data.gender === "M"}
                    onChange={(e) => setData("gender", e.target.value)}
                />
                <RadioOption
                    name="gender"
                    value="F"
                    label="Perempuan"
                    checked={data.gender === "F"}
                    onChange={(e) => setData("gender", e.target.value)}
                />
            </div>
        </div>
        {/* tampilkan error jika ada */}
        {Object.keys(errors).length > 0 && (
            <div className="col-span-2 text-red-500 text-sm">
                {Object.values(errors).map((err, i) => (
                    <div key={i}>{err}</div>
                ))}
            </div>
        )}
        <div className="col-span-2 flex items-center justify-center">
            <PrimaryButton
                className="rounded-2xl w-80"
                type="submit"
                disabled={processing}
            >
                Simpan
            </PrimaryButton>
        </div>
    </form>
);

const Edit = ({ auth, errors: serverErrors }) => {
    const user = auth?.user || {};
    function formatDate(dateString) {
        if (!dateString) return "";
        // Ambil hanya bagian tanggal dari ISO string
        return dateString.split("T")[0];
    }
    const { data, setData, post, patch, processing, errors, reset } = useForm({
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
            onSuccess: () => {
                alert("Profil berhasil diperbarui!");
            },
        });
    };
    return (
        <MainLayout>
            <main className="py-28 w-full space-y-7">
                <section className="text-white">
                    <div className="container mx-auto space-y-6">
                        <div className="space-y-2">
                            <h6 className="text-2xl font-bold">
                                Selamat Datang kembali, {user.name}!
                            </h6>
                            
                        </div>

                        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
                            <ProfilePhoto />

                            <div className="flex-1 space-y-6">
                               
                                <FormSection
                                    data={data}
                                    setData={setData}
                                    errors={errors}
                                    processing={processing}
                                    handleSubmit={handleSubmit}
                                />

                                {/* <div className="flex items-center justify-center">
                                    <PrimaryButton className="rounded-2xl w-80">
                                        Simpan
                                    </PrimaryButton>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    );
};

export default Edit;
