import React, { useEffect, useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import RoundedButton from "../components/buttons/RoundedButton";
import AddExpense from "../components/popups/AddExpense";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "../redux/slices/expenses/expensesActions";
import Timefilter from "../components/filters/Timefilter";
import ExpenseReceipt from "../components/receipts/ExpenseReceipt";

const Depenses = () => {
  const dispatch = useDispatch();
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const { expenses } = useSelector((state) => state.expenses);

  useEffect(() => {
    if (!from || !to) return;
    dispatch(getExpenses({ from, to, date: null }));
  }, [from, to]);

  useEffect(() => {
    if (!date) return;
    dispatch(getExpenses({ date, from: null, to: null }));
  }, [date]);

  return (
    <Sidebar>
      {isAddingExpense && (
        <AddExpense closeHandler={() => setIsAddingExpense(false)} />
      )}
      <header className="h-[3.4rem] fixed top-0 left-[240px] right-0 bg-white flex items-center justify-between px-6">
        <h1 className="text-2xl font-semibold text-black-900">Depenses</h1>
        <div className="flex gap-4 items-center">
          <Timefilter
            setFrom={setFrom}
            setTo={setTo}
            setDate={setDate}
            date={date}
            from={from}
            to={to}
          />
          <RoundedButton
            name={"nouvelle depense"}
            onClick={() => setIsAddingExpense(true)}
          />
        </div>
      </header>
      <section className="w-full mt-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {expenses.map((expense) => (
          <ExpenseReceipt expense={expense} key={expense.id} />
        ))}
      </section>
    </Sidebar>
  );
};

export default Depenses;
