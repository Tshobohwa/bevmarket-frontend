import React from "react";

const RoundedButton = ({ onClick, name }) => {
  return (
    <button
      className="h-[3rem] rounded-full px-[1.5rem] bg-primary-900 text-white font-semibold"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default RoundedButton;
