import React, { useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import AddSalePoint from "../components/popups/AddSalePoint";
import { IoAdd, IoLocationOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { BsShop, BsTruck } from "react-icons/bs";
import { Link } from "react-router-dom";
import NewTruck from "../components/popups/NewTruck";

const MyEstablishement = () => {
  const [isAddingSalePoint, setIsAddingSalePoint] = useState(false);
  const [isAddingTruck, setIsAddingTruck] = useState(false);

  return (
    <Sidebar>
      {isAddingSalePoint && (
        <AddSalePoint closeHandler={() => setIsAddingSalePoint(false)} />
      )}
      {isAddingTruck && (
        <NewTruck closeHandler={() => setIsAddingTruck(false)} />
      )}
      <div className="w-full flex justify-between items-center pb-4 border-b border-primary-400">
        <h1 className="text-black-900 font-semibold text-3xl">
          Mon Etablissement
        </h1>
      </div>
      <div className="w-full">
        <h2 className="font-poppins text-2xl font-semibold text-black-900 py-4">
          Mes points de vente
        </h2>
        <div className="w-full grid grid-cols-4 gap-4">
          <Link to={"my-establishement/salepoints/1"}>
            <div className="w-full h-full bg-white border border-primary-200 p-4 rounded-2xl hover:cursor-pointer hover:shadow-lg font-poppins flex flex-col justify-between">
              <div className="w-full flex gap-4">
                <div className="w-[56px] h-[56px] rounded-full bg-primary-100 flex items-center justify-center text-black-600">
                  <BsShop size={32} />
                </div>
                <div>
                  <p className="font-semibold text-lg">Depot Katoyi</p>
                  <div className="flex gap-1 items-end text-primary-500">
                    <IoLocationOutline size={24} />
                    <p>Katoyi</p>
                  </div>
                </div>
              </div>
              <p className="text-end">employees: 60</p>
            </div>
          </Link>
          <div
            className="w-full bg-white border border-primary-200 flex flex-col items-center h-[9rem] justify-center hover:cursor-pointer hover:shadow-lg rounded-2xl font-poppins"
            onClick={() => setIsAddingSalePoint(true)}
          >
            <IoAdd size={56} />
            <p>Ajouter</p>
          </div>
        </div>
        <h2 className="font-poppins text-2xl font-semibold text-black-900 py-4">
          Mes camions
        </h2>
        <div className="w-full grid grid-cols-4 gap-4">
          <Link to={"my-establishement/salepoints/1"}>
            <div className="w-full h-full bg-white border border-primary-200 p-4 rounded-2xl hover:cursor-pointer hover:shadow-lg font-poppins flex flex-col justify-between">
              <div className="w-full flex gap-4">
                <div className="w-[56px] h-[56px] rounded-full bg-primary-100 flex items-center justify-center text-black-600">
                  <BsTruck size={32} />
                </div>
                <div>
                  <p className="font-semibold text-lg">3223AC19</p>
                  <div className="flex gap-1 items-end text-primary-500">
                    <p>FUSO</p>
                  </div>
                </div>
              </div>
              <p className="text-end">employees: 60</p>
            </div>
          </Link>
          <div
            className="w-full bg-white border border-primary-200 flex flex-col items-center h-[9rem] justify-center hover:cursor-pointer hover:shadow-lg rounded-2xl font-poppins"
            onClick={() => setIsAddingTruck(true)}
          >
            <IoAdd size={56} />
            <p>Ajouter</p>
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-poppins text-2xl font-semibold text-black-900 py-4">
            Mes vendeurs
          </h2>
          <div className="w-full bg-white border border-primary-400 p-4 rounded-sm">
            <table className="w-full font-poppins">
              <thead className="bg-secondary-600 h-[2rem] font-semibold text-white">
                <tr>
                  <th>Noms</th>
                  <th>Telephone</th>
                  <th>Role</th>
                  <th>Point de vente</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default MyEstablishement;
