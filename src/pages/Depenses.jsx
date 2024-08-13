import React from "react";
import Sidebar from "../components/navigation/Sidebar";

const Depenses = () => {
  return (
    <Sidebar>
      <header className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-black-900">Depenses</h1>
        <div className="flex gap-4 items-center"></div>
      </header>
    </Sidebar>
  );
};

export default Depenses;
