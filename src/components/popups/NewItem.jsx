import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import InputWithLabel from "../Inputs/InputWithLabel";
import ButtonShadow from "../buttons/ButtonShadow";
import ButtonHighlight from "../buttons/ButtonHighlight";
import PopupContainer from "./PopupContainer";
import { useDispatch, useSelector } from "react-redux";
import { postItem } from "../../redux/slices/items/ItemsActions";
import { initializeIsPosted } from "../../redux/slices/items/itemsSlice";

const NewItem = ({ closeHandler }) => {
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [bottles_number, setBottlesNumber] = useState(0);
  const [capacity, setCapacity] = useState(0);

  const { isPosted } = useSelector((state) => state.items);

  const [quantity, setQuantity] = useState(0);
  const [reductionSalePrice, setReductionSalePrice] = useState(0);
  const [unitSalePrice, seUnitSalePrice] = useState(0);
  const [lastUnitBuyPrice, setLastUnitBuyPrice] = useState(0);
  const submitHandler = () => {
    setError("");
    if (
      name === "" ||
      quantity === 0 ||
      capacity === 0 ||
      bottles_number === 0 ||
      unitSalePrice === 0 ||
      lastUnitBuyPrice === 0 ||
      reductionSalePrice === 0
    ) {
      setError("Veuillez entrer toute les valeurs");
      return;
    }
    const item = {
      name,
      bottles_number,
      capacity,
      capacity_unit: "Cl",
    };
    const stock_item = {
      reduction_sale_price: reductionSalePrice,
      unit_sale_price: unitSalePrice,
      last_unit_buy_price: lastUnitBuyPrice,
      average_unit_buy_price: lastUnitBuyPrice,
      quantity,
    };
    dispatch(postItem({ item, stock_item }));
  };

  useEffect(() => {
    if (!isPosted) return;
    dispatch(initializeIsPosted());
    closeHandler();
  }, [isPosted]);
  return (
    <PopupContainer>
      <div className="bg-white w-[600px] flex flex-col gap-4 p-4">
        <div className="flex w-full justify-between text-black-900">
          <h2 className="text-2xl font-semibold">Nouvel Article</h2>
          <button
            className="h-[2.5rem] w-[2.5rem] items-center justify-center text-black-900"
            onClick={closeHandler}
          >
            <IoClose size={32} />
          </button>
        </div>
        <div className="w-full flex flex-col gap-4">
          <InputWithLabel
            label={"Nom de l'article"}
            placeholder={"Ex: coca cola"}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="w-full grid grid-cols-2 gap-4">
            <InputWithLabel
              label={"Capacite de la bouteille"}
              placeholder={"Ex: 33"}
              onChange={(e) => setCapacity(+e.target.value)}
            />
            <InputWithLabel
              label={"Bouteilles par caisse"}
              placeholder={"Ex: 24"}
              onChange={(e) => setBottlesNumber(+e.target.value)}
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-4">
            <InputWithLabel
              label={"Prix d'achat unitaire"}
              placeholder={"Ex: 30000"}
              onChange={(e) => setLastUnitBuyPrice(+e.target.value)}
            />

            <InputWithLabel
              label={"Quantitee"}
              placeholder={"Ex: 500"}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-4">
            <InputWithLabel
              label={"Prix de vente normal"}
              placeholder={"Ex: 35000"}
              type="number"
              onChange={(e) => seUnitSalePrice(+e.target.value)}
            />
            <InputWithLabel
              label={"Prix de vente partenaire"}
              placeholder={"Ex: 33000"}
              type="number"
              onChange={(e) => setReductionSalePrice(+e.target.value)}
            />
          </div>
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

export default NewItem;
