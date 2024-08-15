import React, { useEffect, useState } from "react";
import PopupContainer from "./PopupContainer";
import { IoClose } from "react-icons/io5";
import InputWithLabel from "../Inputs/InputWithLabel";
import ButtonHighlight from "../buttons/ButtonHighlight";
import ButtonShadow from "../buttons/ButtonShadow";
import { useDispatch, useSelector } from "react-redux";
import { postExpense } from "../../redux/slices/expenses/expensesActions";
import { resetExpenseAdded } from "../../redux/slices/expenses/expensesSlice";

const AddExpense = ({ closeHandler }) => {
  const dispatch = useDispatch();

  const { expenseAdded } = useSelector((state) => state.expenses);

  const [error, setError] = useState("");
  const [amount, setAmount] = useState(0);
  const [reason, setReason] = useState("");

  const submitHandler = () => {
    setError("");
    if (!reason || amount < 1) {
      setError(
        "Entrez de valeurs valides de montant et une raison de la depense"
      );
      return;
    }
    const expense = {
      reason,
      amount,
      user_id: 1,
    };
    dispatch(postExpense({ expense }));
  };

  useEffect(() => {
    if (!expenseAdded) return;
    dispatch(resetExpenseAdded());
    closeHandler();
  }, [expenseAdded]);
  return (
    <PopupContainer>
      <div className="bg-white w-[500px] flex flex-col gap-4 p-4">
        <div className="flex w-full justify-between text-black-900">
          <h2 className="text-2xl font-semibold">Nouvelle depense</h2>
          <button
            className="h-[2.5rem] w-[2.5rem] items-center justify-center text-black-900"
            onClick={closeHandler}
          >
            <IoClose size={32} />
          </button>
        </div>
        <div className="w-full flex flex-col gap-4">
          <InputWithLabel
            label={"Montant"}
            onChange={(e) => setAmount(+e.target.value)}
            placeholder={"Ex: 50000"}
          />
          <InputWithLabel
            label={"Raison"}
            onChange={(e) => setReason(e.target.value)}
            placeholder={"Achat de ..."}
          />
        </div>
        <p className="text-primary-800 text-center">{error}</p>
        <div className="w-full grid grid-cols-2 gap-4 mt-4">
          <ButtonShadow name={"annuler"} onClick={closeHandler} />
          <ButtonHighlight name={"ajouter"} onClick={submitHandler} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default AddExpense;
