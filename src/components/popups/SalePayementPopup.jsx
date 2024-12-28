import React, { useState } from "react";
import PopupContainer from "./PopupContainer";
import ButtonShadow from "../buttons/ButtonShadow";
import ButtonHighlight from "../buttons/ButtonHighlight";
import { IoClose } from "react-icons/io5";
import InputWithLabel from "../Inputs/InputWithLabel";
import formatNumber from "../../utils/formatNumber";
import { useDispatch } from "react-redux";
import { postSale } from "../../redux/slices/sales/salesActions";
import {toast} from "react-toastify";

// eslint-disable-next-line react/prop-types
const SalePayementPopup = ({ closeHandler, total, sale }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [totalPayed, setTotalPayed] = useState(0);
  const [credit, setCredit] = useState(total);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = () => {
    if (!totalPayed) {
      toast.error("Entrez un montant valide.")
      setError("Entrez un montant valide");
      return;
    }

    setIsLoading(true);
    const finalSale = { ...sale, credit };
    dispatch(postSale({ sale: finalSale }))
        .then(() => setIsLoading(false));
  };
  const totalPayedChangeHandler = (e) => {
    const value = +e.target.value;
    setTotalPayed(value);
    setCredit(total - value);
  };
  return (
    <PopupContainer>
      <div className="bg-white w-[620px] flex flex-col gap-4 p-4 rounded-lg">
        <div className="flex w-full justify-between text-black-900">
          <h2 className="text-2xl font-semibold">Confirmer la vente</h2>
          <button
            className="h-[2.5rem] w-[2.5rem] items-center justify-center text-black-900"
            onClick={closeHandler}
          >
            <IoClose size={32} />
          </button>
        </div>
        <p>
          Pour effectuer cette vente le client doit vous payer{" "}
          {formatNumber(total)} FC. Combien a-t-il paye? Cela permettra de
          calculer la dette qui reste.
        </p>
        <div className="w-full flex flex-col gap-4">
          <InputWithLabel
            label={"Total paye par le client"}
            onChange={(e) => totalPayedChangeHandler(e)}
            placeholder={`Ex: ${total}`}
            value={totalPayed}
          />
        </div>
        <div>
          <p>Reste a payer {credit} Fc</p>
        </div>
        <p className="text-primary-800 text-center">{error}</p>
        <div className="w-full grid grid-cols-2 gap-4 mt-4">
          <ButtonShadow name={"Annuler"} onClick={closeHandler} />
          <ButtonHighlight name={"Confirmer"} onClick={submitHandler} isLoading={isLoading} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default SalePayementPopup;
