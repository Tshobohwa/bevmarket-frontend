import React from "react";

const AuthButton = ({ name, onClick }) => {
  return (
    <button
      className="w-full h-[3rem] bg-red-600 text-white font-semibold font-poppins text-lg rounded-lg hover:bg-red-700"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default AuthButton;
