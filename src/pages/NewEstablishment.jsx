import React, { useState } from "react";
import InputWithLabel from "../components/Inputs/InputWithLabel";
import ButtonHighlight from "../components/buttons/ButtonHighlight";
import { useDispatch, useSelector } from "react-redux";
import { postEstablishement } from "../redux/slices/myEstablishement/myEstablishementActions";

const NewEstablishment = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [salePointName, setSalePointName] = useState("");
  const [salePointAddress, setSalePointAddress] = useState("");

  const submitHandler = () => {
    if (!name) return;
    const establishment = {
      name,
      created_by: currentUser.id,
    };

    const warehouse = {
      name: salePointName,
      location: salePointAddress,
    };

    dispatch(postEstablishement({ establishment, warehouse }));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[70vw] bg-white p-4 grid grid-cols-2 gap-4">
        <div className="w-full">
          <h1 className="font-semibold text-black-800 pb-4 text-4xl">
            Creer Un etablissement
          </h1>
          <p className="text-sm">
            Completez ce formulaire pour creer votre etablissement et vous
            permettre de gerer vos ventes, depenses, points de ventes, vendeurs,
            ainsi que vos stock sur notre platforme
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <InputWithLabel
            label={"Nom"}
            placeholder={"Nom de l'etablissement"}
            onChange={(e) => setName(e.target.value.trim())}
            value={name}
          />
          <InputWithLabel
            label={"Point de vente principale"}
            placeholder={"Entrez point de vente"}
            onChange={(e) => setSalePointName(e.target.value.trim())}
            value={salePointName}
          />

          <InputWithLabel
            label={"Addresse"}
            placeholder={"Entrez l'addresse"}
            onChange={(e) => setSalePointAddress(e.target.value.trim())}
            value={salePointAddress}
          />
          <ButtonHighlight
            name={"creer l'etablissement"}
            onClick={submitHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default NewEstablishment;
