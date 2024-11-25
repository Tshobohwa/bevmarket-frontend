import React from "react";

const SelectWithLabel = ({ options, onChange, label, value }) => {
  return (
    <div>
      <p className="font-[500] font-poppins">{label}</p>
      <select
        onChange={onChange}
        className="w-full h-[3rem] rounded-md border focus:outline-none focus:border-2 border-primary-500 placeholder:text-primary-400 px-4"
        value={value}
      >
        {options.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectWithLabel;
