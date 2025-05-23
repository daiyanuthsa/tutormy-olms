import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import NavLink from '@/Components/NavLink'
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <div className='font-inter bg-neutral-6'>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout