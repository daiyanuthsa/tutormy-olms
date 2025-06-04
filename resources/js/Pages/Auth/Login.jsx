import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Icon } from '@iconify/react';

const Login = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const handleGoogleLogin = () => {
        // Implementasi Google login
        console.log('Google login clicked');
    };

    return (
        <AuthLayout>
            <Head title="Log in" />

            <section className='py-28 px-4 md:px-8 h-full'>
                <div className='max-w-7xl mx-auto text-white flex flex-col lg:flex-row items-center gap-12'>
                    <div className='w-full lg:w-2/3 hidden lg:block'>
                        <img src="/assets/hero-auth.webp" alt="image" className='w-full max-w-[600px] mx-auto' />
                    </div>

                    <div className="w-full lg:w-1/2 flex items-center justify-center border p-5 rounded-xl shadow-md shadow-primary-4 lg:border-none lg:shadow-none">
                        <div className="w-full max-w-md">
                            <div className="mb-8 space-y-2 text-center lg:text-left">
                                <h1 className="text-2xl lg:text-3xl font-bold">
                                    Masuk Sekarang!<br />
                                    Kembangkan Diri dengan
                                </h1>
                                <p className="text-xl font-normal font-['Paytone_One']">Tutormy.id</p>
                            </div>

                            {status && (
                                <div className="mb-4 text-sm font-medium text-green-400">
                                    {status}
                                </div>
                            )}

                            <div className="space-y-6">
                                <div className='space-y-4'>
                                    <div>
                                        <InputLabel htmlFor="email" value="Email" className="mb-1" />
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                                <Icon icon="mdi:email-outline" width="20" height="20" />
                                            </span>
                                            <TextInput
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                className="border-none w-full pl-10 bg-neutral-3"
                                                autoComplete="username"
                                                isFocused={true}
                                                placeholder="Tulis Email disini"
                                                onChange={(e) => setData('email', e.target.value)}
                                            />
                                        </div>
                                        <InputError message={errors.email} className="mt-1 text-red-400" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="password" value="Password" className="mb-1" />
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                                <Icon icon="mdi:lock-outline" width="20" height="20" />
                                            </span>
                                            <TextInput
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                value={data.password}
                                                className="border-none w-full pl-10 pr-12 bg-neutral-3"
                                                autoComplete="current-password"
                                                placeholder="••••••••••"
                                                onChange={(e) => setData('password', e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                            >
                                                <Icon icon={showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"} width="20" height="20" />
                                            </button>
                                        </div>
                                        <InputError message={errors.password} className="mt-1 text-red-400" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                        <span className="ml-2">Ingat saya</span>
                                    </label>
                                    {canResetPassword && (
                                        <Link href={route('password.request')} className="text-primary-2 font-medium">
                                            Lupa Password
                                        </Link>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <PrimaryButton
                                        className="w-full rounded-2xl transition-colors"
                                        disabled={processing}
                                        onClick={submit}
                                    >
                                        {processing ? 'Loading...' : 'Login'}
                                    </PrimaryButton>
                                    <PrimaryButton
                                        variant='outline'
                                        onClick={handleGoogleLogin}
                                        className="rounded-2xl w-full"
                                    >
                                        <Icon icon="logos:google-icon" width="20" height="20" className='mr-3'/>
                                        Continue with Google
                                    </PrimaryButton>
                                </div>
                            </div>

                            <div className="mt-6 text-center text-sm font-medium">
                                <span>Belum Punya akun? </span>
                                <Link href={route('register')} className="text-primary-2 hover:underline">Daftar Sekarang</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthLayout>


    )
}

export default Login