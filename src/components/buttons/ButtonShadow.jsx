import React from "react";

const ButtonShadow = ({ name, onClick }) => {
  return (
    <button
      className="h-[3rem] border border-red-900 rounded-lg hover:bg-black-100 font-[500] text-black-900 text-lg font-poppins"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ButtonShadow;
