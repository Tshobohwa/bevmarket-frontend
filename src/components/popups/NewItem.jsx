import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import InputWithLabel from "../Inputs/InputWithLabel";
import ButtonShadow from "../buttons/ButtonShadow";
import ButtonHighlight from "../buttons/ButtonHighlight";
import PopupContainer from "./PopupContainer";

const NewItem = ({ closeHandler }) => {
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [bottles_number, setBottlesNumber] = useState(null);
  const [capacity, setCapacity] = useState(null);

  const [quantity, setQuantity] = useState(null);
  // :reduction_sale_price, :unit_sale_price, :quantity, :last_unit_buy_price, :average_unit_buy_price
  const [reductionSalePrice, setReductionSalePrice] = useState(null);
  const [unitSalePrice, seUnitSalePrice] = useState(null);
  const [lastUnitBuyPrice, setLastUnitBuyPrice] = useState(null);
  const [averageUnitBuyPrice, setAverageUnitBuyPrice] = useState(null);
  const submitHandler = () => {
    const item = {
      name,
      bottles_number,
      capacity,
      capacity_unit: "Cl",
    };
  };
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
