import React from "react";

const ButtonHighlight = ({ name, onClick }) => {
  return (
    <button
      className="h-[3rem] bg-red-900 font-semibold text-white text-xl"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ButtonHighlight;
