import React, { useState } from "react";
import bgImg from "../assets/images/bg-image.jpg";
import AuthInput from "../components/Inputs/AuthInput";
import { LuUser2 } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import AuthButton from "../components/buttons/AuthButton";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/user/userSlice";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {

    if (!email || !password) {
      toast.warning("Remplisser toutes les donnees");
      return;
    }

    setIsLoading(true);
    const user = {
      email,
      password,
    };

    dispatch(login({ user }))
        .then(() => setIsLoading(false));
  };

  return (
    <div className="w-full h-[100vh] bg-red-50 flex items-center justify-center">
      <div className="w-[50%] h-full flex flex-col items-center justify-center p-4">
        <h1 className="font-semibold text-primary-700 text-2xl font-poppins">
          Se connecter
        </h1>
        <div className="w-[70%] grid grid-flow-row gap-4">
          <AuthInput
            name={"email"}
            placeholder={"Entrer votre email"}
            type="email"
            icon={<LuUser2 size={24} />}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthInput
            name={"Mot de passe"}
            placeholder={"Entrer votre mot de passe"}
            icon={<RiLockPasswordFill size={24} />}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <AuthButton name={"se connecter"} onClick={submitHandler} loading={isLoading} />

          <div className="w-full flex justify-between">
            <p>N'avez-vous pas de compte?</p>
            <Link
              className="text-red-600 font-semibold hover:underline"
              to={"/signup"}
            >
              Enregistrez-vous ici
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full">
        <img src={bgImg} className="h-full w-full object-center" />
      </div>
    </div>
  );
};

export default Login;
