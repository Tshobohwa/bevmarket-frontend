import React, { useState } from "react";
import bgImg from "../assets/images/bg-image.jpg";
import AuthInput from "../components/Inputs/AuthInput";
import { LuUser2 } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import AuthButton from "../components/buttons/AuthButton";
import { useDispatch } from "react-redux";
import { signup } from "../redux/slices/user/userSlice";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const submitHandler = () => {
    // if ()
    const user = {
      email,
      password,
      name,
    };
    dispatch(signup({ user }));
  };
  return (
    <div className="w-full h-[100vh] bg-red-50 flex items-center justify-center">
      <div className="w-[50%] h-full flex flex-col items-center justify-center p-4">
        <h1 className="font-semibold text-primary-700 text-2xl font-poppins">
          S'enregistrer
        </h1>
        <div className="w-[70%] grid grid-flow-row gap-4">
          <AuthInput
            name={"Nom"}
            placeholder={"Entrer votre nom complet"}
            type="text"
            icon={<LuUser2 size={24} />}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthInput
            name={"email"}
            placeholder={"Entrer votre email"}
            type="email"
            icon={<MdEmail size={24} />}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthInput
            name={"Mot de passe"}
            placeholder={"Entrer votre mot de passe"}
            icon={<RiLockPasswordFill size={24} />}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <AuthInput
            name={"Confirmer le mot de passe"}
            placeholder={"Entrer votre mot de passe encore"}
            icon={<RiLockPasswordFill size={24} />}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <AuthButton name={"s'enregistrer"} onClick={submitHandler} />
          <div className="flex justify-between w-full">
            <p>Vous avez deja un compte?</p>
            <Link
              className="font-semibold text-red-600 hover:underline"
              to={"/login"}
            >
              connectez vous ici
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

export default SignUp;
