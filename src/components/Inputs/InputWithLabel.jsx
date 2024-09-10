import React from "react";

const InputWithLabel = ({
  label,
  onChange,
  placeholder,
  type = "text",
  value,
}) => {
  return (
    <div>
      <p className="font-[500] font-poppins">{label}</p>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-[3rem] rounded-md border focus:outline-none focus:border-2 border-primary-500 placeholder:text-primary-400 px-4"
        // value={type !== "number" && value}
      />
    </div>
  );
};

export default InputWithLabel;
