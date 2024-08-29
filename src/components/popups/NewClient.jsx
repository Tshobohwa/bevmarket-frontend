import React, { useEffect, useState } from "react";
import PopupContainer from "./PopupContainer";
import { IoClose } from "react-icons/io5";
import InputWithLabel from "../Inputs/InputWithLabel";
import ButtonHighlight from "../buttons/ButtonHighlight";
import ButtonShadow from "../buttons/ButtonShadow";
import { useDispatch, useSelector } from "react-redux";
import { postClient } from "../../redux/slices/clients/clientsActions";
import { resetClientPosted } from "../../redux/slices/clients/clientsSlice";

const NewClient = ({ closeHandler }) => {
  const dispatch = useDispatch();
  const [names, setNames] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [is_partener, setIsPartener] = useState(false); // New state for 'partenaire'
  const [error, setError] = useState("");

  const { clientPosted } = useSelector((state) => state.clients);

  const submitHandler = () => {
    setError("");
    if (names === "" || phoneNumber === "") {
      setError("Entrer le nom et le numero de telephone svp");
      return;
    }
    const client = {
      name: names,
      phone_number: phoneNumber,
      is_partener: is_partener, // Include 'is_partener' in the client object
    };
    dispatch(postClient({ client }));
  };

  useEffect(() => {
    if (!clientPosted) return;
    dispatch(resetClientPosted());
    closeHandler();
  }, [clientPosted]);

  return (
    <PopupContainer>
      <div className="bg-white w-[500px] flex flex-col gap-4 p-4">
        <div className="flex w-full justify-between text-black-900">
          <h2 className="text-2xl font-semibold">Noveau client</h2>
          <button
            className="h-[2.5rem] w-[2.5rem] items-center justify-center text-black-900"
            onClick={closeHandler}
          >
            <IoClose size={32} />
          </button>
        </div>
        <div className="w-full flex flex-col gap-4">
          <InputWithLabel
            label={"Noms"}
            onChange={(e) => setNames(e.target.value)}
            placeholder={"Entrer les noms"}
          />
          <InputWithLabel
            label={"Numero de telephone"}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={"Entrer le numero de telephone"}
            type="tel"
          />
          <div className="w-full flex items-center justify-center my-4">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={is_partener}
                onChange={(e) => setIsPartener(e.target.checked)}
                className="form-checkbox h-5 w-5 text-primary-600 rounded border-gray-300 focus:ring-primary-500 checked:bg-primary-700"
              />
              <span className="text-black-800">Partenaire</span>
            </label>
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

export default NewClient;
