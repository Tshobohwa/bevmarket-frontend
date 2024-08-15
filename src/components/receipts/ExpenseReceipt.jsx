import React from "react";

const ExpenseReceipt = ({ expense }) => {
  return (
    <div className="w-full p-4 border border-primary-400 flex flex-col gap-4 bg-white min-h-[10rem]">
      <div className="w-full flex justify-between">
        <p className="text-xl font-semibold text-black-900">
          {expense.amount} Fc
        </p>
        <p className="text-secondary-950">
          {new Date(expense.created_at).toLocaleString()}
        </p>
      </div>
      <p className="text-black-700">{expense.reason}</p>
    </div>
  );
};

export default ExpenseReceipt;
