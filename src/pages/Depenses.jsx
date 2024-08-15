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

  const { expenses } = useSelector((state) => state.expenses);

  useEffect(() => {
    dispatch(getExpenses());
  }, []);

  return (
    <Sidebar>
      {isAddingExpense && (
        <AddExpense closeHandler={() => setIsAddingExpense(false)} />
      )}
      <header className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-black-900">Depenses</h1>
        <div className="flex gap-4 items-center">
          <Timefilter />
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
