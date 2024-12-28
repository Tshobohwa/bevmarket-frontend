import React, { useEffect, useState } from "react";
import PopupContainer from "./PopupContainer";
import ButtonHighlight from "../buttons/ButtonHighlight";
import ButtonShadow from "../buttons/ButtonShadow";
import InputWithLabel from "../Inputs/InputWithLabel";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { resetHasPostedSalePoint } from "../../redux/slices/myEstablishement/myEstablishementSlice";
import { postSalePoint } from "../../redux/slices/myEstablishement/myEstablishementActions";

// eslint-disable-next-line react/prop-types
const NewTruck = ({ closeHandler }) => {
  const { hasPostedSalePoint } = useSelector((state) => state.myEstablishement);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [matricule, setMatricule] = useState("");
  const [marque, setMarque] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = () => {
    setIsLoading(true);
    dispatch(
      postSalePoint({
        sale_point: {
          sale_point_type: "truck",
          establishment_id: currentUser.current_establishment_id,
        },
        truck: {
          matricule,
          marque,
        },
      })
    ).then(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!hasPostedSalePoint) return;
    dispatch(resetHasPostedSalePoint());
    closeHandler();
  }, [closeHandler, dispatch, hasPostedSalePoint]);

  return (
    <PopupContainer>
      <div className="w-[30rem] p-4 bg-white flex flex-col gap-4 rounded-md">
        <div className="w-full flex justify-between items-start">
          <h2 className="font-semibold text-xl font-poppins">Nouveau Camion</h2>
          <button onClick={closeHandler}>
            <IoClose size={32} />
          </button>
        </div>
        <InputWithLabel
          label={"Plaque d'imatriculation"}
          placeholder={"Entrer le numero de plaque"}
          onChange={(e) => setMatricule(e.target.value)}
        />
        <InputWithLabel
          label={"Marque"}
          placeholder={"Entrer la marque"}
          onChange={(e) => setMarque(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <ButtonShadow name={"Annuler"} onClick={closeHandler} />
          <ButtonHighlight name={"Ajouter"} onClick={submitHandler} isLoading={isLoading} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default NewTruck;
