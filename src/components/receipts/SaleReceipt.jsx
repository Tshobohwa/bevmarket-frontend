import React, { useEffect, useState } from "react";
import SaleTableRow from "../tableRows/SaleTableRow";

const SaleReceipt = ({ sale }) => {
  const [total, setTotal] = useState(0);
  const { client, sale_items, created_at } = sale;

  const calculateTotal = () => {
    let newTotal = 0;
    sale_items.forEach((item) => {
      newTotal = newTotal + item.quantity * item.unit_sale_price;
    });
    setTotal(newTotal);
  };

  useEffect(calculateTotal, []);
  return (
    <div className="w-full h-full p-4 border border-primary-300 bg-white">
      <div className="w-full flex justify-between items-start pb-4 border-b border-b-secondary-500">
        <div className="flex gap-4 items-center">
          <div>
            <p className="font-semibold font-poppins text-black-800 text-lg">
              {client.name}
            </p>
            <p className="font-poppins text-secondary-700">
              {client.phone_number}
            </p>
          </div>
        </div>
        <p>Date: {new Date(created_at).toLocaleString().split(",")[0]}</p>
      </div>
      <div className="flex flex-col justify-between">
        <table className="w-full">
          <thead className="font-semibold text-white h-[2.2rem] bg-black-800">
            <tr>
              <th className="text-start pl-2 w-[200px]">Article</th>
              <th className="text-start pl-2">PVU</th>
              <th className="text-start pl-2">Quantitee</th>
              <th className="text-start pl-2">PVT</th>
            </tr>
          </thead>
          <tbody>
            {sale_items.map((saleItem) => (
              <SaleTableRow saleItem={saleItem} key={saleItem.id} />
            ))}
          </tbody>
        </table>
        <div className="w-full flex items-center justify-end">
          <div className="flex flex-col items-end font-poppins">
            <p className="font-semibold">Total:</p>
            <p className=" font-semibold text-3xl text-black-800">{total} Fc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleReceipt;
