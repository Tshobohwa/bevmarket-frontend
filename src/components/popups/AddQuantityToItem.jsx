import React, { useEffect, useState } from "react";
import PopupContainer from "./PopupContainer";
import ButtonHighlight from "../buttons/ButtonHighlight";
import ButtonShadow from "../buttons/ButtonShadow";
import InputWithLabel from "../Inputs/InputWithLabel";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addQuantityToStockItem } from "../../redux/slices/stock/stockActions";
import { resetHasAddedQuantityToStock } from "../../redux/slices/stock/stockSlice";

const AddQuantityToItem = ({ closeHandler }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [unitBuyPrice, setUnitBuyPrice] = useState(0);

  const { currentStockItem, hasAddedQuantityToStock } = useSelector(
    (state) => state.stock
  );

  const submitHandler = () => {
    setError("");
    const stock_item = {
      unit_buy_price: unitBuyPrice,
      quantity,
    };
    dispatch(addQuantityToStockItem({ id: currentStockItem.id, stock_item }));
  };

  useEffect(() => {
    if (!hasAddedQuantityToStock) return;
    dispatch(resetHasAddedQuantityToStock());
    closeHandler();
  });
  return (
    <PopupContainer>
      <div className="bg-white w-[500px] flex flex-col gap-4 p-4">
        <div className="flex w-full justify-between text-black-900">
          <h2 className="text-2xl font-semibold">Ajouter au stock</h2>
          <button
            className="h-[2.5rem] w-[2.5rem] items-center justify-center text-black-900"
            onClick={closeHandler}
          >
            <IoClose size={32} />
          </button>
        </div>
        <p className="font-semibold text-center text-lg">
          {currentStockItem.item.name} {currentStockItem.item.bottles_number} x{" "}
          {currentStockItem.item.capacity} Cl
        </p>
        <div className="w-full flex flex-col gap-4">
          <InputWithLabel
            label={"Nombre de caisses"}
            onChange={(e) => setQuantity(+e.target.value)}
            placeholder={"Ex: 500"}
          />
          <InputWithLabel
            label={"Prix d'achat unitaire"}
            onChange={(e) => setUnitBuyPrice(+e.target.value)}
            placeholder={"Ex: 30 000"}
          />
        </div>
        <p className="text-primary-800 text-center">{error}</p>
        <div className="w-full grid grid-cols-2 gap-4 mt-4">
          <ButtonShadow name={"annuler"} onClick={closeHandler} />
          <ButtonHighlight name={"ajouter"} onClick={submitHandler} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default AddQuantityToItem;
