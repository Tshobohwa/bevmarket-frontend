import React, { useEffect, useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import RoundedButton from "../components/buttons/RoundedButton";
import AddExpense from "../components/popups/AddExpense";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "../redux/slices/expenses/expensesActions";

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
          <RoundedButton
            name={"nouvelle depense"}
            onClick={() => setIsAddingExpense(true)}
          />
        </div>
      </header>
      <section className="w-full mt-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {expenses.map((expense) => (
          <div className="w-full p-4 border border-primary-400 flex flex-col gap-4 bg-white min-h-[10rem]">
            <div className="w-full flex justify-between">
              <p className="text-xl font-semibold text-black-900">
                {expense.amount} Fc
              </p>
              <p className="text-secondary-950">
                {new Date(expense.created_at).toDateString()}
              </p>
            </div>
            <p className="text-black-700">{expense.reason}</p>
          </div>
        ))}
      </section>
    </Sidebar>
  );
};

export default Depenses;
