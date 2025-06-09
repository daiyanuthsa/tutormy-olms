import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useCallback } from "react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;
    const STATUS_OPTIONS = [
        { value: "", label: "Pilih Statusmu", disabled: true },
        { value: "pelajar", label: "Pelajar" },
        { value: "mahasiswa", label: "Mahasiswa" },
        { value: "umum", label: "Umum" },
    ];

    const GENDER_OPTIONS = [
        { value: "laki-laki", label: "Laki-laki" },
        { value: "perempuan", label: "Perempuan" },
    ];

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            phone: user.phone || "",
            date_birth: user.date_birth,
            status: user.status ?? "",
            gender: user.gender,
        });
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;

        setData((prev) => ({ ...prev, [name]: value }));
        errors((prev) => ({ ...prev, [name]: "" }));
    }, []);

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>
                <div>
                    <InputLabel htmlFor="phone" value="Phone" />

                    <TextInput
                        id="phone"
                        type="text"
                        className="mt-1 block w-full"
                        placeholder="e.g. 08123456789"
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                        required
                        autoComplete="phone"
                    />

                    <InputError className="mt-2" message={errors.phone} />
                </div>
                <div>
                    <InputLabel htmlFor="date_birth" value="Tanggal Lahir" />

                    <TextInput
                        id="date_birth"
                        type="date"
                        className="mt-1 block w-full"
                        value={
                            data.date_birth
                                ? data.date_birth.substring(0, 10)
                                : ""
                        }
                        onChange={(e) => setData("date_birth", e.target.value)}
                        required
                        autoComplete="date_birth"
                    />

                    <InputError className="mt-2" message={errors.date_birth} />
                </div>

                <div>
                    <InputLabel htmlFor="status" value="Status" />

                    <select
                        id="status"
                        name="status"
                        value={data.status}
                        onChange={handleChange}
                        className="appearance-none w-full pl-12 pr-10 py-3 text-sm rounded-full border-none shadow-sm focus:ring-primary-2"
                    >
                        {STATUS_OPTIONS.map(({ value, label, disabled }) => (
                            <option
                                key={value}
                                value={value}
                                disabled={disabled}
                            >
                                {label}
                            </option>
                        ))}
                    </select>

                    <InputError className="mt-2" message={errors.date_birth} />
                </div>
                <div>
                    <InputLabel htmlFor="gender" value="Gender" />
                    <div className="flex space-x-4 mt-2">
                        {GENDER_OPTIONS.map(({ value, label }) => (
                            <label
                                key={value}
                                className="flex-1 flex items-center space-x-2 cursor-pointer py-3 bg-neutral-3 rounded-full px-7"
                            >
                                <input
                                    type="radio"
                                    name="gender"
                                    value={value}
                                    checked={data.gender === value}
                                    onChange={handleChange}
                                />
                                <span>{label}</span>
                            </label>
                        ))}
                    </div>

                    <InputError className="mt-2" message={errors.date_birth} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
