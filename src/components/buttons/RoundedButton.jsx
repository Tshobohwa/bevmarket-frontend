import React from "react";

const RoundedButton = ({ onClick, name }) => {
  return (
    <button
      className="h-[2.2rem] rounded-lg px-[0.5rem] text-primary-900 hover:bg-primary-900 hover:text-white text-sm border border-primary-900 font-poppins"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default RoundedButton;
