import React from "react";

const AuthInput = ({ name, icon, placeholder, onChange, type = "text" }) => {
  return (
    <div className="w-full font-poppins">
      <p>{name}</p>
      <div className="w-full flex items-center justify-center border border-red-200 h-[3rem] rounded-lg focus-within:border-2 focus-within:border-red-600">
        <p className="pr-4 pl-2">{icon}</p>
        <input
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className="w-[85%] focus:outline-none h-full text-lg bg-transparent"
        />
      </div>
    </div>
  );
};

export default AuthInput;
