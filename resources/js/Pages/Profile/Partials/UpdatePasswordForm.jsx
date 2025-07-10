import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

const PasswordField = ({ id, label, value, onChange, error, inputRef, autoComplete }) => (
    <div>
        <InputLabel htmlFor={id} value={label} />
        <TextInput
            id={id}
            ref={inputRef}
            value={value}
            onChange={onChange}
            type="password"
            className="mt-1 block w-full bg-transparent border-primary-1"
            autoComplete={autoComplete}
        />
        <InputError message={error} className="mt-2" />
    </div>
);

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInputRef = useRef();
    const currentPasswordInputRef = useRef();

    const {
        data: { current_password, password, password_confirmation },
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const handleChange = (field) => (e) => setData(field, e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInputRef.current?.focus();
                }
                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInputRef.current?.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-white-900">
                    Update Password
                </h2>
                <p className="mt-1 text-sm text-gray-200">
                    Ensure your account is using a long, random password to stay secure.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6 text-white">
                <PasswordField
                    id="current_password"
                    label="Current Password"
                    value={current_password}
                    onChange={handleChange("current_password")}
                    error={errors.current_password}
                    inputRef={currentPasswordInputRef}
                    autoComplete="current-password"
                />

                <PasswordField
                    id="password"
                    label="New Password"
                    value={password}
                    onChange={handleChange("password")}
                    error={errors.password}
                    inputRef={passwordInputRef}
                    autoComplete="new-password"
                />

                <PasswordField
                    id="password_confirmation"
                    label="Confirm Password"
                    value={password_confirmation}
                    onChange={handleChange("password_confirmation")}
                    error={errors.password_confirmation}
                    autoComplete="new-password"
                />

                <div className="flex items-center gap-4">
                    <PrimaryButton className="rounded-full" disabled={processing}>
                        Save
                    </PrimaryButton>

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