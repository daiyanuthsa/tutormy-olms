import React from 'react'

const PopUpLayout = ({ children }) => {
    return (
        <section className="relative w-full h-screen text-white font-inter overflow-hidden">
            <img
                src="/assets/header-popup.webp"
                alt="image"
                className="absolute top-0 left-0 w-full h-[50vh] object-cover z-0"
            />

            <div className="absolute w-60 h-60 lg:w-80 lg:h-80 bg-purple-700 blur-[250px] rounded-full left-[-100px] top-1/2 z-10" />

            <div className="absolute top-1/2 -translate-y-1/2 w-full z-50 container">
                <div className="flex justify-center">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default PopUpLayout