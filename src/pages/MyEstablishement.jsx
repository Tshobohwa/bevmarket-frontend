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
  }, [dispatch]);

  useEffect(() => {
    setWarehouses(
      salePoints.filter(
        (salePoint) => salePoint.sale_point_type === "warehouse"
      )
    );
    setTrucks(
      salePoints.filter((salePoint) => salePoint.sale_point_type === "truck")
    );
  }, [salePoints, salePoints.length]);

  return (
    <Sidebar>
      {isAddingSalePoint && (
        <AddSalePoint closeHandler={() => setIsAddingSalePoint(false)} />
      )}
      {isAddingTruck && (
        <NewTruck closeHandler={() => setIsAddingTruck(false)} />
      )}
      <header className="h-[3.4rem] fixed top-0 left-[240px] right-0 bg-white flex items-center justify-between px-6">
        <h1 className="text-black-900 font-semibold text-2xl">
          Mon Etablissement
        </h1>
      </header>
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
      </div>
    </Sidebar>
  );
};

export default MyEstablishement;
