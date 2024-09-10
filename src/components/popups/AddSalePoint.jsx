import React from "react";
import PopupContainer from "./PopupContainer";
import InputWithLabel from "../Inputs/InputWithLabel";
import ButtonShadow from "../buttons/ButtonShadow";
import ButtonHighlight from "../buttons/ButtonHighlight";
import { IoClose } from "react-icons/io5";

const AddSalePoint = ({ closeHandler }) => {
  const submitHandler = () => {};
  return (
    <PopupContainer>
      <div className="w-[30rem] p-4 bg-white flex flex-col gap-4 rounded-md">
        <div className="w-full flex justify-between items-start">
          <h2 className="font-semibold text-xl font-poppins">
            Nouveau point de vente
          </h2>
          <button onClick={closeHandler}>
            <IoClose size={32} />
          </button>
        </div>
        <InputWithLabel label={"Nom"} placeholder={"Entrer le nom"} />
        <InputWithLabel label={"Addresse"} placeholder={"Entrer l'addresse"} />
        <div className="grid grid-cols-2 gap-4">
          <ButtonShadow name={"annuler"} onClick={closeHandler} />
          <ButtonHighlight name={"ajouter"} onClick={submitHandler} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default AddSalePoint;
