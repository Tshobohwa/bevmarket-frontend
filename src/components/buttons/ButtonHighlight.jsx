import React from "react";
import { ClipLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const ButtonHighlight = ({
  name,
  onClick,
  isActive = true,
  text = "1rem",
  height = "h-[3rem]",
  isLoading = false,
}) => {
  return (
    <button
      className={`${height} w-full text-${text} font-poppins rounded-lg hover:bg-primary-800 text-white ${
        isActive ? "bg-primary-900" : "bg-red-900/20"
      }`}
      onClick={onClick}
    >
      {isLoading ? <ClipLoader size={25} color={"#fff"} /> : name}
    </button>
  );
};

export default ButtonHighlight;
