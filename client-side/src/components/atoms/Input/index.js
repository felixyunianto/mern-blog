import React from 'react'

const Input = ({label, ...rest}) => {
    return (
        <div>
            <p className="text-base text-gray-700">{label}</p>
            <input className="w-full outline-none rounded-lg p-3 border border-gray-500 box-border" {...rest}/>
        </div>
    )
}

export default Input
