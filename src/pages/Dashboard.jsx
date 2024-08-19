import React from "react";
import Sidebar from "../components/navigation/Sidebar";
import Timefilter from "../components/filters/Timefilter";

const Dashboard = () => {
  return (
    <Sidebar>
      <header className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-black-900">
          Tableau de bord
        </h1>
        <div className="flex gap-4 items-center">
          <Timefilter />
        </div>
      </header>
      <section className="w-full grid grid-cols-3 my-4 gap-4">
        <div className="px-4 border border-primary-200 font-poppins bg-white h-[10rem] rounded-[1.5rem]">
          <h2 className="text-sm text-secondary-500">Stock</h2>
          <p></p>
          <p className="font-semibold text-primary-900">valeur:15 000 000 Fc</p>
        </div>
        <div className="px-4 border border-primary-200 font-poppins bg-white h-[10rem] rounded-[1.5rem] p-6">
          <h2 className="font-semibold text-black-800 text-2xl">
            Ventes Totales
          </h2>
          <p className="font-semibold text-primary-900">
            quantitee:350 Caisses
          </p>
          <p>montant: 23,8M Fc</p>
        </div>
        <div className="px-4 border border-primary-200 font-poppins bg-white h-[10rem] rounded-[1.5rem]">
          <h2 className="font-semibold text-black-800 text-2xl">
            Ventes Total
          </h2>
          <p className="font-semibold text-primary-900">montant:350 000</p>
          <p>nombre des caisses: 340 000</p>
        </div>
      </section>
      <section className="w-full grid grid-cols-2fr-1fr gap-4">
        <div className="w-full p-4 rounded-[1.5rem] bg-white border border-primary-200"></div>
        <div className="w-full p-4 rounded-[1.5rem] bg-white border border-primary-200"></div>
      </section>
    </Sidebar>
  );
};

export default Dashboard;
