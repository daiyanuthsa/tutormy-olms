import Navbar from '@/Components/Navbar'
import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <div className='font-inter bg-neutral-6'>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout