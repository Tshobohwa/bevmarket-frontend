import React from "react";

const ButtonHighlight = ({
  name,
  onClick,
  isActive = true,
  text = "1rem",
  height = "h-[3rem]",
}) => {
  return (
    <button
      className={`${height} w-full text-${text} font-poppins rounded-lg hover:bg-primary-800 text-white ${
        isActive ? "bg-primary-900" : "bg-red-900/20"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ButtonHighlight;
