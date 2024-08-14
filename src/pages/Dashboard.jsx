import React from "react";
import Sidebar from "../components/navigation/Sidebar";

const Dashboard = () => {
  return (
    <Sidebar>
      <header className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-black-900">
          Tableau de bord
        </h1>
        <div className="flex gap-4 items-center"></div>
      </header>
      <section className="w-full bg-white p-4 grid grid-cols-3 my-4 border border-primary-400">
        <div className=" h-full px-4 border-r border-r-primary-500">
          <h2 className="font-semibold text-black-800 text-2xl">
            Stock disponible
          </h2>
          <p>
            <span>quantitee:</span> <span>3200 </span>
          </p>
          <p className="font-semibold text-primary-900">valeur:15 000 000 Fc</p>
        </div>
        <div className=" h-full px-4 border-r border-r-primary-500">
          <h2 className="font-semibold text-black-800 text-2xl">
            Ventes Totales
          </h2>
          <p className="font-semibold text-primary-900">
            quantitee:350 Caisses
          </p>
          <p>montant: 23 000 000 Fc</p>
        </div>
        <div className=" h-full px-4">
          <h2 className="font-semibold text-black-800 text-2xl">
            Ventes Total
          </h2>
          <p className="font-semibold text-primary-900">montant:350 000</p>
          <p>nombre des caisses: 340 000</p>
        </div>
      </section>
    </Sidebar>
  );
};

export default Dashboard;
