import React, { useState } from "react";

const RoundedInputWithIcon = ({
  icon,
  type = "text",
  onChange,
  placeholder,
  value,
}) => {
  return (
    <div
      className={`w-[20rem] h-[2.2rem] border border-primary-400 px-[1.5rem] rounded-lg flex bg-white text-black-700 items-center justify-between  pr-[0.2rem]`}
    >
      <div className="w-[2.2rem] h-[2.2rem] rounded-lg flex items-center justify-center text-primary-900">
        {icon}
      </div>
      <input
        type={type}
        className={` w-[15rem] focus:outline-none`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default RoundedInputWithIcon;
