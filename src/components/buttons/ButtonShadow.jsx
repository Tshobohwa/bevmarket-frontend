import React from "react";

const ButtonShadow = ({ name, onClick }) => {
  return (
    <button
      className="h-[3rem] border-2 border-red-900 font-semibold text-black-900 text-xl"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ButtonShadow;
