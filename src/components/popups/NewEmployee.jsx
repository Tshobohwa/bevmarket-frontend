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
import CircularButtonWithIcon from "../buttons/CircularButtonWithIcon";
import { FaPen } from "react-icons/fa";
import { postEmployee } from "../../redux/slices/employees/employeesActions";

const NewEmployee = ({ closeHandler }) => {
  const dispatch = useDispatch();

  const [role, setRole] = useState("employee");
  const [salePointId, setSalePointId] = useState(null);
  const [isSelectingUser, setIsSelectingUser] = useState(false);
  const [currentUnemployedUser, setCurrentUnemployedUser] = useState(null);

  const { salePoints } = useSelector((state) => state.myEstablishement);
  const { currentUser } = useSelector((state) => state.user);

  const submitHandler = () => {
    dispatch(
      postEmployee({
        employee: {
          user_id: currentUnemployedUser.id,
          sale_point_id: salePointId,
          role,
          establishment_id: currentUser.current_establishment_id,
        },
      })
    );
  };

  useEffect(() => {
    dispatch(getSalePoints());
  }, []);

  useEffect(() => {
    if (!salePoints[0]) return;
    setSalePointId(salePoints[0].id);
  }, [salePoints]);

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
              currentUnemployedUser={currentUnemployedUser}
              setCurrentUnemployedUser={setCurrentUnemployedUser}
            />
          )}
          {currentUnemployedUser ? (
            <div className="my-5 flex items-center gap-4">
              <div>
                <p className="font-semibold text-black-900">
                  {currentUnemployedUser.name}
                </p>
                <p className="text-secondary-700">
                  {currentUnemployedUser.email}
                </p>
              </div>
              <CircularButtonWithIcon
                icon={<FaPen size={18} />}
                onClick={() => setIsSelectingUser(true)}
              />
            </div>
          ) : (
            <RoundedButton
              name={"Selectionner l'utilisateur"}
              onClick={() => setIsSelectingUser(true)}
            />
          )}
          <SelectWithLabel
            options={[
              { value: "employee", name: "Employee" },
              { value: "admin", name: "Administrateur" },
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
