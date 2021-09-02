import React from 'react'
import { LoginBg } from '../../assets'
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
    return (
      <div className="flex h-screen box-border">
      <div className="flex-1 bg-red-500">
        <img
          src={LoginBg}
          className="w-full h-full object-cover"
          alt="imageBg"
        />
      </div>
      <div className="w-2/6 p-8 flex flex-col justify-center box-border">
        <p className="font-bold text-xl text-gray-500">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18}/>
        <Input label="Password" placeholder="Password" />
        <Gap height={50}/>
        <Button title="Login" />
        <Gap height={100}/>
        <Link title="Belum punya akun, silahkan daftar"/>
      </div>
    </div>
    )
}

export default Login
