import React from "react";

const ButtonHighlight = ({
  name,
  onClick,
  isActive = true,
  height = "h-[3rem]",
}) => {
  return (
    <button
      className={`${height} w-full font-[500] font-poppins rounded-lg hover:bg-primary-800 text-white ${
        isActive ? "bg-primary-900" : "bg-red-900/20"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ButtonHighlight;
