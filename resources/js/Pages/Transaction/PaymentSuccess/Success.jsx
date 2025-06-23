import PopUpLayout from '@/Layouts/PopUpLayout'
import React from 'react'
import ImageSuccess from '../../../../../public/assets/payment-terminal.webp'
import ImageLoad from '../../../../../public/assets/loading.webp'
import PrimaryButton from '@/Components/PrimaryButton'

const Success = () => {
    const isLoading = true 

    return (
        <PopUpLayout>
            <div className='flex items-center justify-center'>
                <div className='bg-neutral-4 w-[320px] lg:w-[520px] h-[380px] lg:h-[420px] py-10 px-5 lg:p-16 space-y-4 flex flex-col items-center justify-center rounded-2xl -rotate-1'>
                    {isLoading ? (
                        <>
                            <img
                                src={ImageLoad}
                                alt="loading"
                                className="w-24 lg:w-44 animate-spin"
                                style={{ animationDuration: '2s' }}
                            />
                            <h2 className="text-center lg:text-2xl font-bold">
                                Pembayaran masih dalam proses
                            </h2>
                            <p className="text-center text-xs lg:text-sm font-medium">
                                Mohon tunggu sebentar, kami sedang memuat pembayaran anda.
                            </p>
                        </>
                    ) : (
                        <>
                            <img src={ImageSuccess} alt="success" className='w-24 lg:w-44' />
                            <h2 className="text-center lg:text-2xl font-bold">Pembayaran Paket Berhasil !</h2>
                            <p className="text-center text-xs lg:text-sm font-medium">Yuk mulai langkah pertama menuju kesuksesanmu disini ! </p>
                            <PrimaryButton className='rounded-full'>Mulai Belajar</PrimaryButton>
                        </>
                    )}
                </div>
            </div>
        </PopUpLayout>
    )
}

export default Success