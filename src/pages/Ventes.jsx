import React from "react";
import Sidebar from "../components/navigation/Sidebar";
import RoundedButton from "../components/buttons/RoundedButton";
import Timefilter from "../components/filters/Timefilter";
import { useNavigate, useNavigation } from "react-router-dom";

const Ventes = () => {
  const navigate = useNavigate();

  const goToNewSale = () => {
    navigate("/new-sale");
  };
  return (
    <Sidebar>
      <header className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-black-900">Ventes</h1>
        <div className="flex gap-4 items-center">
          <Timefilter />
          <RoundedButton name={"nouvelle vente"} onClick={goToNewSale} />
        </div>
      </header>
    </Sidebar>
  );
};

export default Ventes;
