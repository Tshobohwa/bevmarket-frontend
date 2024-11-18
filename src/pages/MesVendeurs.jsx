import React, { useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import RoundedButton from "../components/buttons/RoundedButton";
import NewEmployee from "../components/popups/NewEmployee";
import RoundedInputWithIcon from "../components/Inputs/RoundedInputWithIcon";
import { BiSearch } from "react-icons/bi";

const MesVendeurs = () => {
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <Sidebar>
      {isAddingEmployee && (
        <NewEmployee closeHandler={() => setIsAddingEmployee(false)} />
      )}
      <header className="h-[3.4rem] fixed top-0 left-[240px] right-0 bg-white flex items-center justify-between px-6">
        <h1 className="text-2xl font-semibold text-black-900">Mes Vendeurs</h1>
        <div className="flex gap-4 items-center">
          <RoundedInputWithIcon
            placeholder={"Chercher vendeur"}
            icon={<BiSearch size={24} />}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <RoundedButton
            name={"nouveau vendeur"}
            onClick={() => setIsAddingEmployee(true)}
          />
        </div>
      </header>
    </Sidebar>
  );
};

export default MesVendeurs;
