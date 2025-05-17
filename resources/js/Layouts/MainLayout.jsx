import NavLink from '@/Components/NavLink'
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default MainLayout