import React from "react";

const ButtonHighlight = ({ name, onClick, isActive = true }) => {
  return (
    <button
      className={`h-[3rem] w-full font-[500] font-poppins rounded-lg hover:bg-primary-800 text-white text-lg ${
        isActive ? "bg-primary-900" : "bg-red-900/20"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ButtonHighlight;
