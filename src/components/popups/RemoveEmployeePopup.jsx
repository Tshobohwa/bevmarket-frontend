import React from "react";
import PopupContainer from "./PopupContainer";
import ButtonShadow from "../buttons/ButtonShadow";
import ButtonHighlight from "../buttons/ButtonHighlight";
import { IoClose } from "react-icons/io5";

const RemoveEmployeePopup = ({ closeHandler, employee }) => {
  const submitHandler = () => {};
  return (
    <PopupContainer>
      <div className="w-[500px] rounded-lg bg-white p-4 flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-semibold text-xl">Licencier le vendeur</h2>
          <button onClick={closeHandler}>
            <IoClose size={32} />
          </button>
        </div>
        <div>
          <p className="text-sm">
            Voulez vous licencier le vendeur{" "}
            <span className="font-semibold">{employee.user.name}</span> ? il ne
            sera plus a mesurer d'effectuer des ventes ou toute autre operation
            pour votre etablissement.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <ButtonShadow name={"Annuler"} onClick={closeHandler} />
          <ButtonHighlight name={"Licencier"} onClick={submitHandler} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default RemoveEmployeePopup;
