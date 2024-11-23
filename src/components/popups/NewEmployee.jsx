import React, { useEffect, useState } from "react";
import PopupContainer from "./PopupContainer";
import { IoClose } from "react-icons/io5";
import ButtonShadow from "../buttons/ButtonShadow";
import ButtonHighlight from "../buttons/ButtonHighlight";
import SelectWithLabel from "../selects/SelectWithLabel";
import { useDispatch, useSelector } from "react-redux";
import { getSalePoints } from "../../redux/slices/myEstablishement/myEstablishementActions";
import RoundedButton from "../buttons/RoundedButton";
import SelectUnemployedUser from "./SelectUnemployedUser";

const NewEmployee = ({ closeHandler }) => {
  const dispatch = useDispatch();

  const [role, setRole] = useState("employee");
  const [isSelectingUser, setIsSelectingUser] = useState(false);

  const { salePoints } = useSelector((state) => state.myEstablishement);

  const submitHandler = () => {};

  useEffect(() => {
    dispatch(getSalePoints());
  }, []);

  return (
    <PopupContainer>
      <div className="w-[500px] p-4 rounded-md bg-white">
        <div className="w-full flex justify-between">
          <p className="font-semibold text-2xl">Nouveau Vendeur</p>
          <button
            className="h-[2.5rem] w-[2.5rem] items-center justify-center text-black-900"
            onClick={closeHandler}
          >
            <IoClose size={32} />
          </button>
        </div>
        <div className="w-full flex flex-col gap-4">
          {isSelectingUser && (
            <SelectUnemployedUser
              closeHandler={() => setIsSelectingUser(false)}
            />
          )}
          <RoundedButton
            name={"Selectionner l'utilisateur"}
            onClick={() => setIsSelectingUser(true)}
          />
          <SelectWithLabel
            options={[
              { value: "admin", name: "Administrateur" },
              { value: "employee", name: "Employee" },
            ]}
            label={"Role"}
            onChange={(e) => setRole(e.target.value)}
          />
          <SelectWithLabel
            label={"Point de vente"}
            options={salePoints.map((salePoint) => {
              return {
                value: salePoint.id,
                name:
                  salePoint.sale_point_type === "truck"
                    ? `${salePoint.truck?.matricule} (${salePoint.truck?.marque})`
                    : `${salePoint.warehouse?.name} (${salePoint.warehouse?.location})`,
              };
            })}
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-4 mt-4">
          <ButtonShadow name={"annuler"} onClick={closeHandler} />
          <ButtonHighlight name={"ajouter"} onClick={submitHandler} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default NewEmployee;
