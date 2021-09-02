import React from "react";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Register = () => {
  return (
    <div className="flex h-screen box-border">
      <div className="flex-1 bg-red-500">
        <img
          src={RegisterBg}
          className="w-full h-full object-cover"
          alt="imageBg"
        />
      </div>
      <div className="w-2/6 p-8 flex flex-col justify-center box-border">
        <p className="font-bold text-xl text-gray-500">Register</p>
        <Input label="Full Name" placeholder="Full Name"/>
        <Gap height={18}/>
        <Input label="Email" placeholder="Email" />
        <Gap height={18}/>
        <Input label="Password" placeholder="Password" />
        <Gap height={50}/>
        <Button title="Register" />
        <Gap height={100}/>
        <Link title="Kembali ke Login"/>
      </div>
    </div>
  );
};

export default Register;
