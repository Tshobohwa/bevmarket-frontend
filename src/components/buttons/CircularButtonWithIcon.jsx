import React from "react";

// eslint-disable-next-line react/prop-types
const CircularButtonWithIcon = ({ onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className="w-[2rem] h-[2rem] border border-primary-400 text-secondary-900 flex items-center justify-center rounded-full hover:text-white hover:bg-secondary-900"
    >
      {icon}
    </button>
  );
};

export default CircularButtonWithIcon;
