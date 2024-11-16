import React, { useEffect, useState } from "react";
import Timefilter from "../filters/Timefilter";
import { useDispatch, useSelector } from "react-redux";
import { getPurchases } from "../../redux/slices/purchases/purchasesActions";
import SaleReceipt from "../receipts/SaleReceipt";
import { getStock } from "../../redux/slices/stock/stockActions";

const ClientPurchases = ({ clientId }) => {
  const dispatch = useDispatch();

  const { clientPurchases } = useSelector((state) => state.purchases);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  useEffect(() => {
    dispatch(getPurchases({ clientId, from, to }));
  }, []);

  useEffect(() => {
    dispatch(getStock());
  }, []);

  useEffect(() => {
    console.log(clientPurchases);
  }, [clientPurchases]);

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <p className="font-semibold text-xl">Achats</p>
        <Timefilter />
      </div>
      <section>
        <div className="grid grid-cols-2 w-full gap-4">
          {clientPurchases.map((sale) => (
            <SaleReceipt sale={sale} key={sale.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClientPurchases;
