import React, { useEffect, useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import AddSalePoint from "../components/popups/AddSalePoint";
import NewTruck from "../components/popups/NewTruck";
import AddCardButton from "../components/cards/AddCardButton";
import { useDispatch, useSelector } from "react-redux";
import { getSalePoints } from "../redux/slices/myEstablishement/myEstablishementActions";
import TruckCard from "../components/cards/TruckCard";
import WarehouseCard from "../components/cards/WarehouseCard";

const MyEstablishement = () => {
  const dispatch = useDispatch();
  const [isAddingSalePoint, setIsAddingSalePoint] = useState(false);
  const [isAddingTruck, setIsAddingTruck] = useState(false);

  const [warehouses, setWarehouses] = useState([]);
  const [trucks, setTrucks] = useState([]);

  const { salePoints } = useSelector((state) => state.myEstablishement);

  useEffect(() => {
    dispatch(getSalePoints());
  }, []);

  useEffect(() => {
    setWarehouses(
      salePoints.filter(
        (salePoint) => salePoint.sale_point_type === "warehouse"
      )
    );
    setTrucks(
      salePoints.filter((salePoint) => salePoint.sale_point_type === "truck")
    );
  }, [salePoints.length]);

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
          {warehouses.map((warehouse) => (
            <WarehouseCard salePoint={warehouse} key={warehouse.id} />
          ))}
          <AddCardButton onClick={() => setIsAddingSalePoint(true)} />
        </div>
        <h2 className="font-poppins text-2xl font-semibold text-black-900 py-4">
          Mes camions
        </h2>
        <div className="w-full grid grid-cols-4 gap-4">
          {trucks.map((truck) => (
            <TruckCard salePoint={truck} key={truck.id} />
          ))}
          <AddCardButton onClick={() => setIsAddingTruck(true)} />
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
