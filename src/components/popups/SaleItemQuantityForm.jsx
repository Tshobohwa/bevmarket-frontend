import React, { useState } from "react";
import ButtonHighlight from "../buttons/ButtonHighlight";
import ButtonShadow from "../buttons/ButtonShadow";
import InputWithLabel from "../Inputs/InputWithLabel";
import { useDispatch } from "react-redux";
import { addItemToNewSale } from "../../redux/slices/sales/salesSlice";

const SaleItemQuantityForm = ({ currentItem, closeHandler, cancelHandler }) => {
  const dispatch = useDispatch();
  const [saleQuantity, setSaleQuantity] = useState(0);
  const submitHandler = () => {
    if (saleQuantity <= 0 || saleQuantity > currentItem.quantity) return;
    dispatch(
      addItemToNewSale({
        id: currentItem.id,
        unit_sale_price: currentItem.unit_sale_price,
        quantity: saleQuantity,
      })
    );
    closeHandler();
  };
  return (
    <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black-950/50 flex items-center justify-center backdrop-blur-sm">
      <div className="w-[500px] p-4 bg-white rounded-md">
        <div className="my-4">
          <p className="text-center font-semibold text-lg text-black-800">
            {currentItem.item.name} {currentItem.item.bottles_number} x{" "}
            {currentItem.item.capacity} Cl
          </p>
          <InputWithLabel
            label={"Quantitee"}
            type="number"
            placeholder={`Max: ${currentItem.quantity}`}
            onChange={(e) => setSaleQuantity(+e.target.value)}
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <ButtonShadow name={"annuler"} onClick={cancelHandler} />
          <ButtonHighlight name={"ajouter"} onClick={submitHandler} />
        </div>
      </div>
    </div>
  );
};

export default SaleItemQuantityForm;
