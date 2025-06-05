import React from 'react'
import { Head, Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton'
import ApplicationLogo from '@/Components/ApplicationLogo'

const VerifyEmail = ({ status }) => {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <section className="min-h-screen text-white px-4 sm:px-6 md:px-12 lg:px-20 py-6 md:py-8 relative">
            <Head title="Email Verification" />

            <div className="absolute bottom-0 w-80 h-80 bg-purple-700 opacity-30 blur-3xl rounded-full left-[-100px] top-1/4 z-0" />

            <div className="flex items-center justify-between mb-7 mt-7">
                <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0">
                    <div className="scale-75 sm:scale-90 md:scale-100 lg:scale-110">
                        <ApplicationLogo />
                    </div>
                </div>

                <div className="w-[60px] sm:w-[100px] md:w-[120px] lg:w-[140px] flex-shrink-0"></div>
            </div>

            <div className='flex flex-col gap-8 md:gap-12 lg:gap-20 items-center justify-center'>
                <div className='flex flex-col text-center items-center w-full max-w-4xl px-4 gap-6 md:gap-7'>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold">Verifikasi Emailmu</div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-relaxed max-w-3xl">
                        Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? if you didn't receive the email, we will send you another
                    </div>
                </div>

                <div className='flex flex-col text-center items-center gap-6 md:gap-7'>
                    <img src="/assets/email-icon.webp" alt="icon" className='w-32 sm:w-40 md:w-48 lg:w-56 mb-4 md:mb-8' />

                    {status === 'verification-link-sent' && (
                        <div className="mb-4 p-4 bg-green-900/30 border border-green-700/50 rounded-lg max-w-md">
                            <p className="text-green-300 text-sm">
                                A new verification link has been sent to the email address you provided during registration.
                            </p>
                        </div>
                    )}

                    <form onSubmit={submit} className="w-full max-w-sm">
                        <PrimaryButton
                            type="submit"
                            disabled={processing}
                            className='rounded-xl md:rounded-2xl w-full py-3 md:py-3.5 lg:py-4 text-sm md:text-base font-medium'
                        >
                            {processing ? 'Sending...' : 'Resend Verification Email'}
                        </PrimaryButton>
                    </form>

                    <div>
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="text-base md:text-lg font-semibold hover:underline transition-all duration-200"
                        >
                            Log Out
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VerifyEmail;