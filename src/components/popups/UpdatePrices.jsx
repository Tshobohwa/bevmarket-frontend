import React, { useEffect, useState } from "react";
import PopupContainer from "./PopupContainer";
import ButtonHighlight from "../buttons/ButtonHighlight";
import ButtonShadow from "../buttons/ButtonShadow";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import InputWithLabel from "../Inputs/InputWithLabel";
import { updateStockItemPrice } from "../../redux/slices/stock/stockActions";
import { resetHasUpdatedPrice } from "../../redux/slices/stock/stockSlice";

const UpdatePrices = ({ closeHandler }) => {
  const dispatch = useDispatch();
  const { currentStockItem, hasUpdatedPrice } = useSelector(
    (state) => state.stock
  );
  const [error, setError] = useState("");

  const [unitSalePrice, setUnitSalePrice] = useState(
    currentStockItem.unit_sale_price
  );
  const [reductionSalePrice, setReductionSalePrice] = useState(
    currentStockItem.reduction_sale_price
  );

  const submitHandler = () => {
    setError("");
    if (unitSalePrice < 1 || reductionSalePrice < 1) {
      setError("Entrez des prix valides superieur a zero!");
      return;
    }
    const stock_item = {
      reduction_sale_price: reductionSalePrice,
      unit_sale_price: unitSalePrice,
    };
    dispatch(updateStockItemPrice({ id: currentStockItem.id, stock_item }));
  };

  useEffect(() => {
    if (!hasUpdatedPrice) return;
    dispatch(resetHasUpdatedPrice());
    closeHandler();
  });

  return (
    <PopupContainer>
      <div className="bg-white w-[500px] flex flex-col gap-4 p-4 rounded-lg">
        <div className="flex w-full justify-between text-black-900">
          <h2 className="text-2xl font-semibold">Modifier les prix</h2>
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
            label={"Prix de vente normal"}
            onChange={(e) => setUnitSalePrice(+e.target.value)}
            placeholder={"Ex: 32 000"}
            value={unitSalePrice}
          />
          <InputWithLabel
            label={"Prix de vente partenaire"}
            onChange={(e) => setReductionSalePrice(+e.target.value)}
            placeholder={"Ex: 30 000"}
            value={reductionSalePrice}
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

export default UpdatePrices;
