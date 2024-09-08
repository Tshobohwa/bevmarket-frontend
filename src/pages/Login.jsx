import React from "react";
import bgImg from "../assets/images/bg-image.jpg";
import AuthInput from "../components/Inputs/AuthInput";
import { LuUser2 } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import AuthButton from "../components/buttons/AuthButton";

const Login = () => {
  return (
    <div className="w-full h-[100vh] bg-red-50 flex items-center justify-center">
      <div className="w-[50%] h-full flex flex-col items-center  p-4">
        <h1 className="w-full text-start font-semibold text-primary-700 text-3xl font-poppins">
          Se connecter
        </h1>
        <div className="w-[70%] grid grid-flow-row gap-4">
          <AuthInput
            name={"email"}
            placeholder={"Entrer votre email"}
            type="email"
            icon={<LuUser2 size={24} />}
          />
          <AuthInput
            name={"Mot de passe"}
            placeholder={"Entrer votre mot de passe"}
            icon={<RiLockPasswordFill size={24} />}
            type="password"
          />
          <AuthButton name={"se connecter"} onClick={() => {}} />
        </div>
      </div>
      <div className="w-[50%] h-full">
        <img src={bgImg} alt="" className="h-full w-full object-center" />
      </div>
    </div>
  );
};

export default Login;
