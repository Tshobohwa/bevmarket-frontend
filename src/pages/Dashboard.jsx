import React, { useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import Timefilter from "../components/filters/Timefilter";

const Dashboard = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  return (
    <Sidebar>
      <header className="h-[3.4rem] fixed top-0 left-[240px] right-0 bg-white flex items-center justify-between px-6">
        <h1 className="text-2xl font-semibold text-black-900">
          Tableau de bord
        </h1>
        <div className="flex gap-4 items-center">
          <Timefilter
            setFrom={setFrom}
            setTo={setTo}
            setDate={setDate}
            date={date}
            from={from}
            to={to}
          />
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
