import React from "react";
import { IoAdd } from "react-icons/io5";

const AddCardButton = ({ onClick }) => {
  return (
    <div
      className="w-full bg-white border border-primary-200 flex flex-col items-center h-[9rem] justify-center hover:cursor-pointer hover:shadow-lg rounded-2xl font-poppins"
      onClick={onClick}
    >
      <IoAdd size={56} />
      <p>Ajouter</p>
    </div>
  );
};

export default AddCardButton;
