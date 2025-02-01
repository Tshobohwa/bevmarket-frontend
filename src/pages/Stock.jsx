import React, { useEffect, useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import RoundedButton from "../components/buttons/RoundedButton";
import RoundedInputWithIcon from "../components/Inputs/RoundedInputWithIcon";
import { BiSearch } from "react-icons/bi";
import NewItem from "../components/popups/NewItem";
import { useDispatch, useSelector } from "react-redux";
import { getStock } from "../redux/slices/stock/stockActions";
import CircularButtonWithIcon from "../components/buttons/CircularButtonWithIcon";
import { FaPlus } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { setCurrentStockItem } from "../redux/slices/stock/stockSlice";
import UpdatePrices from "../components/popups/UpdatePrices";
import AddQuantityToItem from "../components/popups/AddQuantityToItem";
import { useSearchParams } from "react-router-dom";
import StockHistory from "../components/tabs/StockHistory";
import StockAvailable from "../components/tabs/StockAvailable";

const Stock = () => {
  const [URLSearchParams, setURLSearchParams] = useSearchParams();

  useEffect(() => {
    if (!URLSearchParams.get("tab")) setURLSearchParams({ tab: "available" });
  }, [URLSearchParams, setURLSearchParams]);

  return (
    <Sidebar>
      <header className="h-[3.4rem] fixed top-0 left-[240px] right-0 bg-white flex items-center justify-between">
        <div className="flex gap-4">
          <button
            className={`font-medium text-black-900 px-6 ${
              URLSearchParams.get("tab") === "available" &&
              "border-b-[3px] border-red-500"
            } h-[3.4rem]`}
            onClick={() => setURLSearchParams({ tab: "available" })}
          >
            Stock disponible
          </button>
          <button
            className={`font-medium text-black-900 px-6 ${
              URLSearchParams.get("tab") === "history" &&
              "border-b-[3px] border-red-500"
            } h-[3.4rem]`}
            onClick={() => setURLSearchParams({ tab: "history" })}
          >
            Historique du stock
          </button>
        </div>
      </header>
      {URLSearchParams.get("tab") === "history" && <StockHistory />}
      {URLSearchParams.get("tab") === "available" && <StockAvailable />}
    </Sidebar>
  );
};

export default Stock;
