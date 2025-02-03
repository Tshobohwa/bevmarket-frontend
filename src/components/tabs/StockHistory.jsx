import React, { useEffect, useState } from "react";
import Timefilter from "../filters/Timefilter";
import { useDispatch, useSelector } from "react-redux";
import { getStockMovements } from "../../redux/slices/stockMovements/stockMovementsActions";
import formatDate from "../../utils/formatDate";
import formatNumber from "../../utils/formatNumber";

const StockHistory = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [from, setFrom] = useState(new Date().toISOString().split("T")[0]);
  const [to, setTo] = useState(new Date().toISOString().split("T")[0]);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [stockHistoryFilter, setStockHistoryFilter] = useState("purchase");
  const [filteredStockHistory, setFilteredStockHistory] = useState([]);
  const [reducedStockHistory, setReducedStockHistory] = useState({});

  const { stockMovements } = useSelector((store) => store.stockMovements);

  useEffect(() => {
    dispatch(getStockMovements({ date, from, to }));
  }, [date, from, to]);

  useEffect(() => {
    setFilteredStockHistory(
      stockMovements.filter(
        (stockMovement) => stockMovement.movement_type === stockHistoryFilter
      )
    );
  }, [stockMovements, stockHistoryFilter]);

  useEffect(() => {
    const newReducedStockHistory = {};

    filteredStockHistory.forEach((stockMovement) => {
      const { stock_item_id, quantity } = stockMovement;

      if (newReducedStockHistory[stock_item_id]) {
        newReducedStockHistory[stock_item_id] = {
          ...newReducedStockHistory[stock_item_id],
          quantity:
            Number.parseFloat(newReducedStockHistory[stock_item_id].quantity) +
            Number.parseFloat(quantity),
          totalPrice:
            Number.parseFloat(
              newReducedStockHistory[stock_item_id].totalPrice
            ) +
            Number.parseFloat(stockMovement.quantity) *
              Number.parseFloat(stockMovement.unit_price),
        };
      } else {
        newReducedStockHistory[stock_item_id] = {
          ...stockMovement,
          totalPrice:
            Number.parseFloat(stockMovement.quantity) *
            Number.parseFloat(stockMovement.unit_price),
        };
      }
    });

    setReducedStockHistory(newReducedStockHistory);
  }, [filteredStockHistory]);

  useEffect(() => {
    let totalQuantity = 0;
    let totalPrice = 0;

    Object.keys(reducedStockHistory).forEach((stockItem) => {
      totalQuantity += Number.parseFloat(
        reducedStockHistory[stockItem].quantity
      );
      totalPrice += reducedStockHistory[stockItem].totalPrice;
    });

    setTotalPrice(totalPrice);
    setTotalQuantity(totalQuantity);
  }, [reducedStockHistory]);
  return (
    <section className="w-full p-4 rounded-md bg-white border border-secondary-300 mt-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex  gap-4">
          <button
            className={`h-[1.6rem] rounded-lg px-6 ${
              stockHistoryFilter === "purchase"
                ? " bg-primary-700 text-white"
                : "bg-primary-100"
            }`}
            onClick={() => setStockHistoryFilter("purchase")}
          >
            achats
          </button>
          <button
            className={`h-[1.6rem] rounded-lg  px-6
              ${
                stockHistoryFilter === "sale"
                  ? " bg-primary-700 text-white"
                  : "bg-primary-100"
              }`}
            onClick={() => setStockHistoryFilter("sale")}
          >
            ventes
          </button>
          <button
            className={`h-[1.6rem] rounded-lg bg-primary-100 px-6 ${
              stockHistoryFilter === "rc"
                ? " bg-primary-700 text-white"
                : "bg-primary-100"
            }`}
            onClick={() => setStockHistoryFilter("rc")}
          >
            rc
          </button>
        </div>
        <Timefilter
          date={date}
          setDate={setDate}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
        />
      </div>
      <div className="grid grid-cols-2 w-full mt-4  h-[25rem]">
        <div className="px-4">
          <p>Resumee</p>
          <div className=" bg-black-900 text-white py-2 grid grid-cols-2 mt-4">
            <p className="pl-2">Article</p>
            <div className="grid grid-cols-2">
              <p className="pl-2">Quanitee</p>
              <p className="pl-2">Prix total</p>
            </div>
          </div>
          {Object.keys(reducedStockHistory).map((key, index) => {
            const stockItem = reducedStockHistory[key];
            const item = stockItem.stock_item.item;
            return (
              <div
                className={`grid grid-cols-2 py-2 ${
                  index % 2 !== 0 ? "bg-primary-100" : ""
                }`}
              >
                <p className="px-2">
                  {item.name} {item.bottles_number} x {item.capacity} Cl
                </p>
                <div className="grid grid-cols-2">
                  <p className="px-2">{formatNumber(stockItem.quantity)}</p>
                  <p className="px-2">
                    {formatNumber(stockItem.totalPrice)} Fc
                  </p>
                </div>
              </div>
            );
          })}
          <div className="mt-8 flex justify-end">
            <div>
              <p className="text-end">
                Quantitee totale: {formatNumber(totalQuantity)} caisses
              </p>
              <p className="text-end">
                Prix total: {formatNumber(totalPrice)} Fc
              </p>
            </div>
          </div>
        </div>
        <div className="h-full overflow-y-scroll">
          <p>Historique</p>
          <div className="mt-4">
            {filteredStockHistory.map((stockMovement) => {
              const item = stockMovement.stock_item.item;
              return (
                <div className="p-4 rounded-lg border border-secondary-200 mb-2">
                  <div>
                    <div className="flex justify-between">
                      <p className="text-blue-500">
                        {stockMovement.movement_type === "purchase" && "achat"}
                        {stockMovement.movement_type === "sale" && "vente"}
                        {stockMovement.movement_type === "rc" && "RC"}
                      </p>
                      <p className="text-secondary-600">
                        {formatDate(
                          new Date(stockMovement.created_at)
                            .toISOString()
                            .split("T")[0]
                        )}
                      </p>
                    </div>
                    <p className="my-3">
                      {item.name} {item.bottles_number} x {item.capacity} Cl
                    </p>
                    <div className="flex justify-between">
                      <p>quantite: {formatNumber(stockMovement.quantity)}</p>
                      <p>PU: {formatNumber(stockMovement.unit_price)} Fc</p>
                      <p>
                        PT:{" "}
                        {formatNumber(
                          Number.parseFloat(stockMovement.unit_price) *
                            Number.parseFloat(stockMovement.quantity)
                        )}{" "}
                        Fc
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockHistory;
