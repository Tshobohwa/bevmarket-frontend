import React, { useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import AddSalePoint from "../components/popups/AddSalePoint";
import { IoAdd } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyEstablishement = () => {
  const [isAddingSalePoint, setIsAddingSalePoint] = useState(false);

  return (
    <Sidebar>
      {isAddingSalePoint && (
        <AddSalePoint closeHandler={() => setIsAddingSalePoint(false)} />
      )}
      <div className="w-full flex justify-between items-center">
        <h1 className="text-black-900 font-semibold text-3xl">
          Mon Etablissement
        </h1>
      </div>
      <div className="w-full">
        <h2>Mes points de vente</h2>
        <div className="w-full grid grid-cols-4 gap-4">
          <Link to={"my-establishement/salepoints/1"}>
            <div className="w-full h-full bg-white border border-primary-200 p-4 rounded-2xl hover:cursor-pointer hover:shadow-lg">
              <BsShop size={56} />
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
      </div>
    </Sidebar>
  );
};

export default MyEstablishement;
