import React from 'react'
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import ApplicationLogo from '@/Components/ApplicationLogo'
import { Icon } from '@iconify/react';

const ForgotPassword = ({ status }) => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <section className="min-h-screen text-white px-4 sm:px-6 md:px-12 lg:px-20 py-6 md:py-8 relative">
            <Head title="Forgot Password" />

            <div className="absolute bottom-0 w-80 h-80 bg-purple-700 opacity-30 blur-3xl rounded-full left-[-100px] top-1/4 z-0" />

            <div className="flex items-center justify-between mb-8 md:mb-12 lg:mb-20">
                <Link href={route('login')} className="flex-shrink-0">
                    <PrimaryButton variant='outline' className='rounded-xl md:rounded-2xl text-white px-3 py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 text-sm md:text-base'>
                        <Icon icon="basil:arrow-left-outline" width="16" height="16" className='mr-1.5 md:mr-2 md:w-5 md:h-5' />
                        <span className="hidden sm:inline">Kembali</span>
                    </PrimaryButton>
                </Link>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0">
                    <div className="scale-75 sm:scale-90 md:scale-100 lg:scale-110">
                        <ApplicationLogo />
                    </div>
                </div>

                <div className="w-[60px] sm:w-[100px] md:w-[120px] lg:w-[140px] flex-shrink-0"></div>
            </div>

            <div className='flex flex-col gap-8 md:gap-12 lg:gap-20 items-center justify-center'>
                <div className='flex flex-col text-center items-center w-full max-w-4xl px-4 gap-6 md:gap-7'>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold">Reset Password</div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-relaxed max-w-3xl">
                        Forgot your password? No Problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
                    </div>
                </div>

                <div className='flex flex-col text-center items-center gap-6 md:gap-8 w-full max-w-md'>
                    {status && (
                        <div className="p-4 bg-green-900/30 border border-green-700/50 rounded-lg w-full">
                            <p className="text-green-300 text-sm">
                                {status}
                            </p>
                        </div>
                    )}

                    <form onSubmit={submit} className="w-full space-y-6">
                        <div className="space-y-2">
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="Enter your email address"
                                className="w-full pr-12 bg-transparent border-white rounded-lg"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="text-red-400 text-sm" />
                        </div>

                        <PrimaryButton
                            type="submit"
                            disabled={processing}
                            className='rounded-2xl'
                        >
                            {processing ? 'Sending...' : 'Email Password Reset Link'}
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword