import React, { useEffect } from "react";
import Sidebar from "../components/navigation/Sidebar";
import RoundedButton from "../components/buttons/RoundedButton";
import Timefilter from "../components/filters/Timefilter";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../redux/slices/sales/salesActions";
import SaleReceipt from "../components/receipts/SaleReceipt";
import { getStock } from "../redux/slices/stock/stockActions";

const Ventes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { sales } = useSelector((state) => state.sales);

  const goToNewSale = () => {
    navigate("/new-sale");
  };

  useEffect(() => {
    dispatch(getSales());
    dispatch(getStock());
  }, []);
  return (
    <Sidebar>
      <header className="h-[3.4rem] fixed top-0 left-[240px] right-0 bg-white flex items-center justify-between px-6">
        <h1 className="text-2xl font-semibold text-black-900">Ventes</h1>
        <div className="flex gap-4 items-center">
          <Timefilter />
          <RoundedButton name={"nouvelle vente"} onClick={goToNewSale} />
        </div>
      </header>
      <section className=" grid grid-cols-2 gap-4 mt-4">
        {sales.map((sale) => (
          <SaleReceipt sale={sale} />
        ))}
      </section>
    </Sidebar>
  );
};

export default Ventes;
