import React from "react";

const ButtonShadow = ({ name, onClick, height = "h-[3rem]", text = "" }) => {
  return (
    <button
      className={`${height} border border-red-900 rounded-lg hover:bg-black-100 font-[500] text-black-900 font-poppins w-full text-${text}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ButtonShadow;
