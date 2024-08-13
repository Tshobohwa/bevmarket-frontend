import React, { useState } from "react";

const RoundedInputWithIcon = ({
  icon,
  type = "text",
  onChange,
  placeholder,
}) => {
  return (
    <div
      className={`w-[20rem] h-[3rem] border border-primary-400 px-[1.5rem] rounded-full flex bg-white text-black-700 items-center justify-between  pr-[0.2rem]`}
    >
      <input
        type={type}
        className={` w-[15rem] focus:outline-none`}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className="w-[2.6rem] h-[2.6rem] rounded-full flex items-center justify-center text-white bg-red-800">
        {icon}
      </div>
    </div>
  );
};

export default RoundedInputWithIcon;
