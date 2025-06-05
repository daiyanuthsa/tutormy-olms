import React, { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import Checkbox from '@/Components/Checkbox';
import TextInput from '@/Components/TextInput';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head, useForm } from '@inertiajs/react';
import { Icon } from '@iconify/react';

const FormField = ({ id, label, icon, type = "text", placeholder, value, onChange, error, showToggle, toggleValue, onToggle }) => (
    <div>
        <InputLabel htmlFor={id} value={label} className="mb-1" />
        <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Icon icon={icon} width="20" height="20" />
            </span>
            <TextInput
                id={id}
                name={id}
                type={showToggle ? (toggleValue ? "text" : "password") : type}
                value={value}
                className={`w-full ${showToggle ? "pr-12" : ""} pl-10 bg-neutral-3 border-none`}
                placeholder={placeholder}
                onChange={onChange}
                required
            />
            {showToggle && (
                <button
                    type="button"
                    onClick={onToggle}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                    <Icon icon={toggleValue ? "mdi:eye-outline" : "mdi:eye-off-outline"} width="20" height="20" />
                </button>
            )}
        </div>
        <InputError message={error} className="mt-2 text-red-400" />
    </div>
);

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [checkboxError, setCheckboxError] = useState('');

    const handleChange = (field) => (e) => setData(field, e.target.value);

    const submit = (e) => {
        e.preventDefault();

        if (!data.remember) {
            setCheckboxError('Kamu harus menyetujui Syarat dan Kebijakan Privasi.');
            return;
        }

        setCheckboxError('');
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const handleGoogleLogin = () => {
        console.log('Google login clicked');
    };

    return (
        <AuthLayout>
            <Head title="Register" />
            <section className='py-28 px-4 md:px-8 h-full'>
                <div className='max-w-7xl mx-auto text-white flex flex-col lg:flex-row items-center gap-12'>
                    <div className="w-full lg:w-1/2 flex items-center justify-center border p-5 rounded-xl shadow-md shadow-primary-4 lg:border-none lg:shadow-none">
                        <div className="w-full max-w-md">
                            <form onSubmit={submit} className="space-y-4">
                                <FormField
                                    id="name"
                                    label="Nama Lengkap"
                                    icon="mdi:account-outline"
                                    placeholder="Tulis Namamu disini"
                                    value={data.name}
                                    onChange={handleChange('name')}
                                    error={errors.name}
                                />
                                <FormField
                                    id="email"
                                    label="Email"
                                    icon="mdi:email-outline"
                                    placeholder="Tulis Email disini"
                                    value={data.email}
                                    onChange={handleChange('email')}
                                    error={errors.email}
                                />
                                <FormField
                                    id="phone"
                                    label="Nomor WhatsApp"
                                    icon="mdi:phone-outline"
                                    placeholder="+62"
                                    value={data.phone}
                                    onChange={handleChange('phone')}
                                    error={errors.phone}
                                />
                                <FormField
                                    id="password"
                                    label="Kata Sandi"
                                    icon="mdi:lock-outline"
                                    placeholder="**********"
                                    value={data.password}
                                    onChange={handleChange('password')}
                                    error={errors.password}
                                    showToggle
                                    toggleValue={showPassword}
                                    onToggle={() => setShowPassword(!showPassword)}
                                />
                                <FormField
                                    id="password_confirmation"
                                    label="Konfirmasi Kata Sandi"
                                    icon="mdi:lock-outline"
                                    placeholder="**********"
                                    value={data.password_confirmation}
                                    onChange={handleChange('password_confirmation')}
                                    error={errors.password_confirmation}
                                    showToggle
                                    toggleValue={showConfirmPassword}
                                    onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
                                />
                                <div>
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                        <span className="ml-3">
                                            Dengan melanjutkan, kamu menyetujui <a href="#" className="underline">Syarat</a> dan <a href="#" className="underline">Kebijakan Privasi</a> Tutormy.id
                                        </span>
                                    </label>
                                    {checkboxError && (
                                        <p className="text-red-400 mt-2">{checkboxError}</p>
                                    )}
                                </div>
                                <PrimaryButton
                                    className="w-full rounded-2xl transition-colors"
                                    disabled={processing}
                                    onClick={submit}
                                >
                                    {processing ? 'Loading...' : 'Create My Account'}
                                </PrimaryButton>
                                <PrimaryButton
                                    variant='outline'
                                    onClick={handleGoogleLogin}
                                    className="rounded-2xl w-full"
                                >
                                    <Icon icon="logos:google-icon" width="20" height="20" className='mr-3' />
                                    Continue with Google
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                    <div className='w-full lg:w-2/3 hidden lg:block'>
                        <img src="/assets/hero-auth.webp" alt="image" className='w-full max-w-[600px] mx-auto' />
                    </div>
                </div>
            </section>
        </AuthLayout>
    );
};

export default Register;