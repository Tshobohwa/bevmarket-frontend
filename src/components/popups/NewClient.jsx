import React, { useState } from "react";
import PopupContainer from "./PopupContainer";
import { IoClose } from "react-icons/io5";
import InputWithLabel from "../Inputs/InputWithLabel";
import ButtonHighlight from "../buttons/ButtonHighlight";
import ButtonShadow from "../buttons/ButtonShadow";

const NewClient = ({ closeHandler }) => {
  const [names, setNames] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <PopupContainer>
      <div className="bg-white w-[500px] flex flex-col gap-4 p-4">
        <div className="flex w-full justify-between text-black-900">
          <h2 className="text-lg font-semibold">Noveau client</h2>
          <button
            className="h-[2.5rem] w-[2.5rem] items-center justify-center text-black-900"
            onClick={closeHandler}
          >
            <IoClose size={32} />
          </button>
        </div>
        <div className="w-full">
          <InputWithLabel
            label={"Noms"}
            onChange={(e) => setNames(e.target.value)}
            placeholder={"Entrer les noms"}
          />
          <InputWithLabel
            label={"Numero de telephone"}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={"Entrer les noms"}
            type=""
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <ButtonShadow name={"annuler"} onClick={closeHandler} />
          <ButtonHighlight name={"ajouter"} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default NewClient;
