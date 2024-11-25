import React from "react";
import PopupContainer from "./PopupContainer";
import { useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import ButtonShadow from "../buttons/ButtonShadow";
import ButtonHighlight from "../buttons/ButtonHighlight";

const UpdateEmployeePopup = ({ closeHandler, employee }) => {
  const dispatch = useDispatch();

  const submitHandler = () => {};

  return (
    <PopupContainer>
      <div className="w-[550px] rounded-lg bg-white p-4">
        <div className="w-full flex justify-between">
          <h2 className="text-lg font-semibold">Modifier l'employee</h2>
          <button
            className="h-[2.5rem] w-[2.5rem] items-center justify-center text-black-900"
            onClick={closeHandler}
          >
            <IoClose size={32} />
          </button>
        </div>
        <div className="w-full">
          <div>
            <p className="font-semibold">{employee.user.name}</p>
            <p className="text-secondary-700 text-sm">{employee.user.email}</p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <ButtonShadow name={"annuler"} onClick={closeHandler} />
          <ButtonHighlight name={"confirmer"} onClick={submitHandler} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default UpdateEmployeePopup;
