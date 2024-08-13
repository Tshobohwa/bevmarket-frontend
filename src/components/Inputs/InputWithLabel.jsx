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
      <p>{label}</p>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-[3rem] border-2 border-primary-500 placeholder:text-primary-400 px-4"
        value={value}
      />
    </div>
  );
};

export default InputWithLabel;
