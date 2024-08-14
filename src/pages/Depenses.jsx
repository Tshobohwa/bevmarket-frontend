import React, { useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import RoundedButton from "../components/buttons/RoundedButton";
import AddExpense from "../components/popups/AddExpense";

const Depenses = () => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  return (
    <Sidebar>
      {isAddingExpense && (
        <AddExpense closeHandler={() => setIsAddingExpense(false)} />
      )}
      <div className="max-w-[800px]">
        <header className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-semibold text-black-900">Depenses</h1>
          <div className="flex gap-4 items-center">
            <RoundedButton
              name={"nouvelle depense"}
              onClick={() => setIsAddingExpense(true)}
            />
          </div>
        </header>
      </div>
    </Sidebar>
  );
};

export default Depenses;
