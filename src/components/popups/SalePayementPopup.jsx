import React from "react";
import PopupContainer from "./PopupContainer";
import ButtonShadow from "../buttons/ButtonShadow";
import ButtonHighlight from "../buttons/ButtonHighlight";
import { IoClose } from "react-icons/io5";

const SalePayementPopup = ({ closeHandler }) => {
  const submitHandler = () => {};
  return (
    <PopupContainer>
      <div className="bg-white w-[500px] flex flex-col gap-4 p-4 rounded-lg">
        <div className="flex w-full justify-between text-black-900">
          <h2 className="text-2xl font-semibold">Confirmer la vente</h2>
          <p>Pour effectuer cette vente</p>
          <button
            className="h-[2.5rem] w-[2.5rem] items-center justify-center text-black-900"
            onClick={closeHandler}
          >
            <IoClose size={32} />
          </button>
        </div>
        <p className="font-semibold text-center text-lg"></p>
        <div className="w-full flex flex-col gap-4">
          <InputWithLabel
          // label={"Prix de vente partenaire"}
          // onChange={(e) => setReductionSalePrice(+e.target.value)}
          // placeholder={"Ex: 30 000"}
          // value={reductionSalePrice}
          />
        </div>
        <p className="text-primary-800 text-center">{error}</p>
        <div className="w-full grid grid-cols-2 gap-4 mt-4">
          <ButtonShadow name={"annuler"} onClick={closeHandler} />
          <ButtonHighlight name={"confirmer"} onClick={submitHandler} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default SalePayementPopup;
