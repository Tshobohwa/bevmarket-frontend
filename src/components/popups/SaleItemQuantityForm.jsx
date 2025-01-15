import React, { useEffect, useState } from "react";
import ButtonHighlight from "../buttons/ButtonHighlight";
import ButtonShadow from "../buttons/ButtonShadow";
import InputWithLabel from "../Inputs/InputWithLabel";
import { useDispatch, useSelector } from "react-redux";
import { addItemToNewSale } from "../../redux/slices/sales/salesSlice";
import { toast } from "react-toastify";
import { getClient } from "../../redux/slices/clients/clientsActions";

// eslint-disable-next-line react/prop-types
const SaleItemQuantityForm = ({ currentItem, closeHandler, cancelHandler }) => {
  const dispatch = useDispatch();
  const [saleQuantity, setSaleQuantity] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { newSale } = useSelector((store) => store.sales);
  const { clients } = useSelector((state) => state.clients);

  const [currentClient, setCurrentClient] = useState(
    clients.find((client) => client.id === newSale.client_id)
  );

  const submitHandler = () => {
    // eslint-disable-next-line react/prop-types
    if (saleQuantity <= 0 || saleQuantity > currentItem.quantity) {
      toast.error("Verifier la quantité du stock");
      return;
    }

    // setIsLoading(true);
    dispatch(
      addItemToNewSale({
        // eslint-disable-next-line react/prop-types
        id: currentItem.id,
        // eslint-disable-next-line react/prop-types
        unit_sale_price: currentClient?.is_partener
          ? currentItem.reduction_sale_price
          : currentItem.unit_sale_price,
        quantity: saleQuantity,
      })
    );
    closeHandler();
  };

  useEffect(() => {
    dispatch(getClient());
  }, []);

  useEffect(() => {
    setCurrentClient(clients.find((client) => client.id === newSale.client_id));
  }, [clients]);

  return (
    <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black-950/50 flex items-center justify-center backdrop-blur-sm">
      <div className="w-[500px] p-4 bg-white rounded-md">
        <div className="my-4">
          <p className="text-center font-semibold text-lg text-black-800">
            {/* eslint-disable-next-line react/prop-types */}
            {currentItem.item.name} {currentItem.item.bottles_number} x{" "}
            {/* eslint-disable-next-line react/prop-types */}
            {currentItem.item.capacity} Cl
          </p>
          <InputWithLabel
            label={"Quantitee"}
            type="number"
            // eslint-disable-next-line react/prop-types
            placeholder={`Max: ${currentItem.quantity}`}
            onChange={(e) => setSaleQuantity(+e.target.value)}
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <ButtonShadow name={"Annuler"} onClick={cancelHandler} />
          <ButtonHighlight
            name={"Ajouter"}
            onClick={submitHandler}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default SaleItemQuantityForm;
