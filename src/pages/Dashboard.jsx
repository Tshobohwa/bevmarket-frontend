import React, { useEffect, useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import Timefilter from "../components/filters/Timefilter";
import RoundedButton from "../components/buttons/RoundedButton";
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../redux/slices/sales/salesActions";
import { getExpenses } from "../redux/slices/expenses/expensesActions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { sales } = useSelector((state) => state.sales);
  const { expenses } = useSelector((state) => state.expenses);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const [saleItems, setSaleItems] = useState([]);

  const [quantity, setQuantity] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    dispatch(getSales({ from, to, date }));
    dispatch(getExpenses({ from, to, date }));
  }, [date, from, to]);

  useEffect(() => {
    const saleItems = [];
    sales.forEach((sale) => {
      sale.sale_items.forEach((saleItem) => {
        saleItems.push(saleItem);
      });
    });
    setSaleItems(saleItems);
  }, [sales]);

  useEffect(() => {
    let quantity = 0;
    saleItems.forEach(
      (saleItem) => (quantity = quantity + Number.parseFloat(saleItem.quantity))
    );
    let totalSales = 0;
    saleItems.forEach(
      (saleItem) =>
        (totalSales =
          totalSales +
          Number.parseFloat(saleItem.quantity) *
            Number.parseFloat(saleItem.unit_sale_price))
    );
    setQuantity(quantity);
    setTotalSales(totalSales);
  }, [saleItems]);

  useEffect(() => {
    let totalExpenses = 0;
    expenses.forEach(
      (expense) =>
        (totalExpenses = totalExpenses + Number.parseFloat(expense.amount))
    );
    setTotalExpenses(totalExpenses);
  }, [expenses]);

  return (
    <Sidebar>
      <header className="h-[3.4rem] fixed top-0 left-[240px] right-0 bg-white flex items-center justify-between px-6">
        <h1 className="text-2xl font-semibold text-black-900">
          Tableau de bord
        </h1>
        <div className="flex gap-4 items-center">
          <Timefilter
            setFrom={setFrom}
            setTo={setTo}
            setDate={setDate}
            date={date}
            from={from}
            to={to}
          />
          <RoundedButton name={"Rafraîchir"} />
        </div>
      </header>
      <section className="w-full grid grid-cols-3 my-4 gap-4">
        <div className="px-4 border border-primary-200 font-poppins bg-white h-[10rem] rounded-[1.5rem] flex justify-center flex-col items-center">
          <div>
            <h2 className="text-primary-900">ventes</h2>
            <p className="font-semibold text-black-900 text-4xl">
              {totalSales} Fc
            </p>
          </div>
        </div>
        <div className="px-4 border border-primary-200 font-poppins bg-white h-[10rem] rounded-[1.5rem] flex justify-center flex-col items-center">
          <div>
            <h2 className="text-primary-900">Depenses</h2>
            <p className="font-semibold text-black-900 text-4xl">
              {totalExpenses} Fc
            </p>
          </div>
        </div>
        <div className="px-4 border border-primary-200 font-poppins bg-white h-[10rem] rounded-[1.5rem] flex justify-center flex-col items-center">
          <div>
            <h2 className="text-primary-900">Caisses vendues</h2>
            <p className="font-semibold text-black-900 text-4xl">{quantity}</p>
          </div>
        </div>
      </section>
      <section className="w-full p-4 bg-white rounded-lg border border-secondary-300 my-4">
        <div className="flex gap-8">
          <div className="flex gap-1 items-center">
            <div className="w-4 h-4 rounded-full bg-primary-900"></div>
            <p>Ventes</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-4 h-4 rounded-full bg-black-900"></div>
            <p>Depenses</p>
          </div>
        </div>
      </section>
      <section className="w-full grid grid-cols-2fr-1fr gap-4">
        <div className="w-full p-4 rounded-[1.5rem] bg-white border border-primary-200">
          <h2 className="font-semibold">Articles vendus</h2>
          <div className="flex flex-col items-center">
            <div className="w-[75%]">
              <div className="w-full grid grid-cols-3 my-2">
                <p className="font-semibold">Article</p>
                <p>Quantitee</p>
                <p>Prix Total</p>
              </div>
              <div className="w-full grid grid-cols-3 my-2">
                <p className="font-semibold">Coca cola 33 x 24 Cl</p>
                <p>40</p>
                <p>1 200 000 Fc</p>
              </div>
              <div className="w-full grid grid-cols-3 my-2">
                <p className="font-semibold">Coca cola 33 x 24 Cl</p>
                <p>40</p>
                <p>1 200 000 Fc</p>
              </div>
              <div className="w-full grid grid-cols-3 my-2">
                <p className="font-semibold">Coca cola 33 x 24 Cl</p>
                <p>40</p>
                <p>1 200 000 Fc</p>
              </div>
              <div className="w-full grid grid-cols-3 my-2">
                <p className="font-semibold">Coca cola 33 x 24 Cl</p>
                <p>40</p>
                <p>1 200 000 Fc</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 flex items-end flex-col">
            <p>Nombre total des caisses: 500</p>
            <p>Montant Total: 18 000 000 Fc</p>
          </div>
        </div>
        <div className="w-full p-4 rounded-[1.5rem] bg-white border border-primary-200">
          <h2 className="font-semibold">Points de vente</h2>
        </div>
      </section>
    </Sidebar>
  );
};

export default Dashboard;
