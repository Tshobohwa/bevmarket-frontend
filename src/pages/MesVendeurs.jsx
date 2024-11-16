import React, { useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import RoundedButton from "../components/buttons/RoundedButton";
import NewEmployee from "../components/popups/NewEmployee";

const MesVendeurs = () => {
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  return (
    <Sidebar>
      {isAddingEmployee && (
        <NewEmployee closeHandler={() => setIsAddingEmployee(false)} />
      )}
      <header className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-black-900">Mes Vendeurs</h1>
        <div className="flex gap-4 items-center">
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
