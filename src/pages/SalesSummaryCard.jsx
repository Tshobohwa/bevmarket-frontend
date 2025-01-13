import React, { useEffect, useState } from "react";
import formatNumber from "../utils/formatNumber";

const SalesSummaryCard = ({ sales }) => {
  const [reducedSales, setReducedSales] = useState(sales);
  const [quantity, setQuantity] = useState(0);
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    const reducedSalesMap = new Map();

    sales.forEach((sale) => {
      const stockItemId = sale.stock_item_id;
      const quantity = Number.parseFloat(sale.quantity);
      const unitSalePrice = Number.parseFloat(sale.unit_sale_price);
      const total = quantity * unitSalePrice;

      if (reducedSalesMap.has(stockItemId)) {
        const currentReducedSale = reducedSalesMap.get(stockItemId);
        currentReducedSale.quantity += quantity;
        currentReducedSale.total += total;
        reducedSalesMap.set(stockItemId, currentReducedSale);
      } else {
        reducedSalesMap.set(stockItemId, {
          ...sale,
          quantity,
          total,
        });
      }
    });

    const reducedSales = Array.from(reducedSalesMap.values());
    setReducedSales(reducedSales);
  }, [sales]);

  useEffect(() => {
    let quantity = 0;
    let totalSales = 0;
    reducedSales.forEach((sale) => {
      quantity += sale.quantity;
      totalSales += sale.total;
    });
    setQuantity(quantity);
    setTotalSales(totalSales);
  }, [reducedSales]);
  return (
    <div className="w-full p-4 rounded-[1.5rem] bg-white border border-primary-200 mb-4">
      <h2 className="font-semibold">Articles vendus</h2>
      <div className="flex flex-col items-center">
        <div className="w-[85%]">
          <div className="w-full grid grid-cols-3 my-2 gap-2">
            <p className="font-semibold">Article</p>
            <p>Quantitee</p>
            <p>Prix Total</p>
          </div>
          {reducedSales.map((reducedSales, index) => {
            const item = reducedSales.stock_item?.item || {};
            return (
              <div className="w-full grid grid-cols-3 my-2" key={index}>
                <p className="font-semibold">
                  {item?.name} {item?.capacity} Cl x {item?.bottles_number}
                </p>
                <p>{formatNumber(reducedSales.quantity)}</p>
                <p>{formatNumber(reducedSales.total)} Fc</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full mt-4 flex items-end flex-col">
        <p>Nombre total des caisses: {quantity}</p>
        <p>Montant Total: {formatNumber(totalSales)} Fc</p>
      </div>
    </div>
  );
};

export default SalesSummaryCard;
