import React from 'react'

const Header = () => {
    return (
        <div className="flex justify-between items-center py-5 px-10 bg-blue-500">
            <p className="text-xl font-bold m-0 text-white">Header Logo</p>
            <p className="text-lg text-white cursor-pointer underline m-0">Logout</p>
        </div>
    )
}

export default Header
