import React from 'react'
import { ICDiscord, ICFacebook, ICGithub, ICInstagram } from '../../../assets'

const Icon = ({img}) => {
    return (
        <div className="bg-white p-2.5 rounded-full my-0 mx-2.5">
            <img src={img} alt="icon" className="w-7 h-7"/>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="flex justify-between items-center py-5 px-10 bg-blue-500">
                <div className="">
                    <img className="w-16 h-16 object-contain" src="https://res.cloudinary.com/plugin007/image/upload/v1603734215/logoPLUGIN_qsovpm.png" alt="logo" />
                </div>
                <div className="flex">
                  <Icon img={ICFacebook}/>
                  <Icon img={ICInstagram}/>
                  <Icon img={ICGithub}/>
                  <Icon img={ICDiscord}/>
                </div>
            </div>
            <div className="bg-blue-700 py-2.5 p-0">
                <p className="text-sm text-white text-center m-0">Copyright</p>
            </div>
        </div>
    )
}

export default Footer
