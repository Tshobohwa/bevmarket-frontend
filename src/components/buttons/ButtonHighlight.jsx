import React from "react";

const ButtonHighlight = ({ name, onClick, isActive }) => {
  return (
    <button
      className={`h-[3rem] font-semibold text-white text-xl ${
        !isActive ? "bg-primary-900" : "bg-red-900/20"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ButtonHighlight;
