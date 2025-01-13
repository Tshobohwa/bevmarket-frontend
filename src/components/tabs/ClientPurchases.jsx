import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchases } from "../../redux/slices/purchases/purchasesActions";
import SaleReceipt from "../receipts/SaleReceipt";
import { getStock } from "../../redux/slices/stock/stockActions";
import SalesSummaryCard from "../../pages/SalesSummaryCard";

const ClientPurchases = ({ clientId }) => {
  const dispatch = useDispatch();

  const { clientPurchases } = useSelector((state) => state.purchases);

  const [saleItems, setSaleItems] = useState([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  useEffect(() => {
    dispatch(getPurchases({ clientId, from, to }));
  }, []);

  useEffect(() => {
    dispatch(getStock());
  }, []);

  useEffect(() => {
    const salesItems = clientPurchases.flatMap(
      (purchase) => purchase.sale_items
    );

    setSaleItems(salesItems);
  }, [clientPurchases]);

  return (
    <div className="w-full">
      <section>
        <SalesSummaryCard sales={saleItems} />
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
