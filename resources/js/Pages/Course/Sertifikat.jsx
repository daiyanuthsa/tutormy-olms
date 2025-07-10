import PrimaryButton from '@/Components/PrimaryButton'
import { Head } from '@inertiajs/react'
import React from 'react'
import { Icon } from '@iconify/react'
import ApplicationLogo from '@/Components/ApplicationLogo'

const Sertifikat = () => {
    return (
        <section className="font-inter">
            <Head title="Raih Sertifikat" />

            <div className="absolute bottom-0 w-80 h-80 bg-purple-700 opacity-30 blur-3xl rounded-full left-[-100px] lg:top-1/4 z-0" />

            <div className="min-h-screen text-white px-4 sm:px-6 md:px-12 lg:px-20 py-7 md:py-14 relative flex flex-col">
                <div className="flex items-center justify-between mb-10 relative z-10">
                    <PrimaryButton
                        variant="outline"
                        className="rounded-xl md:rounded-2xl text-white px-3 py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 text-sm md:text-base"
                    >
                        <Icon
                            icon="basil:arrow-left-outline"
                            width="16"
                            height="16"
                            className="mr-1.5 md:mr-2 md:w-5 md:h-5"
                        />
                        <span className="hidden sm:inline">Kembali</span>
                    </PrimaryButton>

                    <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0">
                        <div className="scale-75 sm:scale-90 md:scale-100 lg:scale-110">
                            <ApplicationLogo />
                        </div>
                    </div>

                    <div className="w-[60px] sm:w-[100px] md:w-[120px] lg:w-[140px] flex-shrink-0"></div>
                </div>

                <div className="flex-grow flex items-start justify-center">
                    <div className="w-full space-y-14 lg:space-y-20 max-w-6xl">
                        <div className="space-y-4 lg:space-y-5">
                            <p className="text-center text-xl lg:text-3xl font-bold">
                                Raih Sertifikat Kelas Anda
                            </p>
                            <p className="text-center text-sm lg:text-xl font-medium">
                                Setelah sukses menuntaskan seluruh materi kelas, isi nama lengkap Anda di kolom yang tersedia.
                            </p>
                            <p className="text-center text-xs lg:text-base font-medium">
                                Kami akan segera mengirimkan sertifikat ke email Anda.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <div className="relative w-full md:w-2/3">
                                <input
                                    type="text"
                                    id="nama"
                                    name="nama"
                                    placeholder=" "
                                    className="block w-full px-4 pt-6 pb-2 text-white bg-transparent border border-white rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <label
                                    htmlFor="nama"
                                    className="absolute text-sm text-white bg-neutral-6 px-2.5 left-4 top-0 transform -translate-y-1/2 pointer-events-none"
                                >
                                    Nama Lengkap
                                </label>
                            </div>

                            <PrimaryButton className="rounded-full w-full md:w-1/3">
                                Submit
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sertifikat