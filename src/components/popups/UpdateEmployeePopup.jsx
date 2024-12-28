import React, { useEffect, useState } from "react";
import PopupContainer from "./PopupContainer";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import ButtonShadow from "../buttons/ButtonShadow";
import ButtonHighlight from "../buttons/ButtonHighlight";
import SelectWithLabel from "../selects/SelectWithLabel";
import { getSalePoints } from "../../redux/slices/myEstablishement/myEstablishementActions";

// eslint-disable-next-line react/prop-types
const UpdateEmployeePopup = ({ closeHandler, employee }) => {
  const dispatch = useDispatch();

  const { salePoints } = useSelector((state) => state.myEstablishement);

  // eslint-disable-next-line react/prop-types
  const [role, setRole] = useState(employee.role);
  // eslint-disable-next-line react/prop-types
  const [salePointId, setSalePointId] = useState(employee.sale_point_id);
  const [isLoading, setIsLoading] = useState(false);

  const roleOptions = [
    { name: "Administrateur", value: "admin" },
    { name: "Employee", value: "employee" },
  ];

  useEffect(() => {
    dispatch(getSalePoints());
  }, [dispatch]);

  const submitHandler = () => {
    setIsLoading(true);
    // dispatch(...).then(() => setIsLoading(true));
    setIsLoading(false);
  };

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
        <div className="w-full flex flex-col gap-4 py-4">
          <div>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="font-semibold">{employee.user.name}</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="text-secondary-700 text-sm">{employee.user.email}</p>
          </div>
          <SelectWithLabel
            label={"Role"}
            options={roleOptions}
            value={role}
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
            onChange={(e) => setSalePointId(e.target.value)}
            value={salePointId}
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <ButtonShadow name={"Annuler"} onClick={closeHandler} />
          <ButtonHighlight name={"Confirmer"} onClick={submitHandler} isLoading={isLoading} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default UpdateEmployeePopup;
