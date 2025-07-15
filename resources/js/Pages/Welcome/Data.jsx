import React from 'react'
import { Icon } from '@iconify/react'
import PrimaryButton from '@/Components/PrimaryButton'
import Profile from "../../../../public/assets/teacher.png"

const MasterTeacherCard = ({ name, role }) => (
    <div className="relative h-36 md:h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200">
        <img
            src={Profile}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 w-32 md:w-40 lg:w-[130px] xl:w-44 z-10">
            <div className="bg-gradient-to-b from-[#A157E4] to-[#59307E] text-white rounded-full px-2 xl:px-7 py-2 text-center">
                <h3 className="font-semibold text-xs xl:text-sm">{name}</h3>
                <p className="text-xs font-medium opacity-90">{role}</p>
            </div>
        </div>
    </div>
)

const Data = () => {
    return (
        <section className="container mx-auto py-16 lg:py-20 text-white space-y-20">
            <button
                onClick={() =>
                    window.open(
                        "https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bertanya",
                        "_blank"
                    )
                }
                className="fixed bottom-10 right-5 md:right-8 lg:right-28 z-50 flex items-center gap-3 bg-success-2 text-lg lg:text-2xl font-bold rounded-xl py-2 px-4"
            >
                <Icon
                    icon="logos:whatsapp-icon"
                    className="w-6 h-6 lg:w-9 lg:h-9"
                />
                Whatsapp
            </button>

            <div className="relative bg-gradient-to-b from-[#24063A] to-[#11141D] rounded-3xl px-5 py-7 lg:px-16 lg:py-12 text-center overflow-hidden">
                <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-purple-700 opacity-30 blur-3xl rounded-full z-0" />
                <div className="relative z-10">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-6 xl:px-32 2xl:px-60">
                        Master Teacher yang akan membantu kamu selama proses
                        belajar!
                    </h2>
                    <p className="lg:text-xl mb-7 opacity-90 xl:px-40 2xl:px-80">
                        Yuk belajar bareng Master Teacher kami dan raih skill
                        yang kamu butuhkan untuk masa depan cerahmu!
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[...Array(5)].map((_, index) => (
                            <MasterTeacherCard
                                key={index}
                                name="Ratna Wijayanti"
                                role="Product Designer"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-6 lg:gap-8 text-center">
                <h5 className="text-xl lg:text-4xl font-semibold">
                    Kuota TERBATAS untuk dapatkan bonus senilai{" "}
                    <span className="font-bold">Rp10.500.000</span> + Diskon
                    hingga 98%.
                </h5>

                <h6 className="text-xl lg:text-3xl font-bold">
                    Berbagai manfaat + promo akan berubah setelah KAMU!
                </h6>

                <div className="w-screen py-2.5 bg-primary-4 text-center">
                    <p className="text-xl lg:text-4xl font-bold text-white">
                        Hitungan mundur 3 jam (Berulang)
                    </p>
                </div>

                <PrimaryButton className="rounded-2xl">
                    Langganan Sekarang
                </PrimaryButton>
            </div>
        </section>
    );
}

export default Data