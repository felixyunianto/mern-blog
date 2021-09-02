import React from 'react'

const Link = ({title, onClick}) => {
    return (
        <p onClick={onClick} className="text-center text-base underline text-gray-400 cursor-pointer">{title}</p>
    )
}

export default Link
