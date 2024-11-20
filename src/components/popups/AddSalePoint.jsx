import React, { useEffect, useState } from "react";
import PopupContainer from "./PopupContainer";
import InputWithLabel from "../Inputs/InputWithLabel";
import ButtonShadow from "../buttons/ButtonShadow";
import ButtonHighlight from "../buttons/ButtonHighlight";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { postSalePoint } from "../../redux/slices/myEstablishement/myEstablishementActions";
import { resetHasPostedSalePoint } from "../../redux/slices/myEstablishement/myEstablishementSlice";

const AddSalePoint = ({ closeHandler }) => {
  const dispatch = useDispatch();

  const { hasPostedSalePoint } = useSelector((state) => state.myEstablishement);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const submitHandler = () => {
    dispatch(
      postSalePoint({
        sale_point: { establishment_id: 1, sale_point_type: "warehouse" },
        warehouse: { name, location },
      })
    );
  };

  useEffect(() => {
    if (!hasPostedSalePoint) return;
    dispatch(resetHasPostedSalePoint());
    closeHandler();
  }, [hasPostedSalePoint]);
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
        <InputWithLabel
          label={"Nom"}
          placeholder={"Entrer le nom"}
          onChange={(e) => setName(e.target.value)}
        />
        <InputWithLabel
          label={"Addresse"}
          placeholder={"Entrer l'addresse"}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <ButtonShadow name={"annuler"} onClick={closeHandler} />
          <ButtonHighlight name={"ajouter"} onClick={submitHandler} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default AddSalePoint;
