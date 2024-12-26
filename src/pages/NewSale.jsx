import React, { useEffect, useState } from "react";
import RoundedButton from "../components/buttons/RoundedButton";
import ButtonShadow from "../components/buttons/ButtonShadow";
import ButtonHighlight from "../components/buttons/ButtonHighlight";
import CircularButtonWithIcon from "../components/buttons/CircularButtonWithIcon";
import { BiPlus } from "react-icons/bi";
import SelectClient from "../components/popups/SelectClient";
import AddItemToSale from "../components/popups/AddItemToSale";
import { postSale } from "../redux/slices/sales/salesActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  cancelNewSale,
  resetHasPostedNewSale,
} from "../redux/slices/sales/salesSlice";
import { MdModeEdit } from "react-icons/md";
import NewSaleTableRow from "../components/tableRows/NewSaleTableRow";
import SalePayementPopup from "../components/popups/SalePayementPopup";

const NewSale = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { newSale, hasPostedNewSale } = useSelector((store) => store.sales);
  const { clients } = useSelector((state) => state.clients);
  const { currentEmployee } = useSelector((state) => state.employees);

  const [isSelectingClient, setIsSelectingClient] = useState(false);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [client, setClient] = useState(null);
  const [isPaying, setIsPaying] = useState(false);
  const [sale, setSale] = useState({});

  const cancelHandler = () => {
    dispatch(cancelNewSale());
    navigate(-1);
  };

  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    if (!newSale.items) return;
    let newTotal = 0;
    newSale.items.forEach((item) => {
      newTotal = newTotal + item.quantity * item.unit_sale_price;
    });
    setTotal(newTotal);
  };

  const postNewSale = () => {
    setSale({
      user_id: 1,
      client_id: newSale.client_id,
      sale_point_id: currentEmployee.sale_point_id,
      establishment_id: currentEmployee.establishment_id,
      sale_items: newSale.items.map((item) => {
        return {
          quantity: item.quantity,
          unit_sale_price: +item.unit_sale_price,
          stock_item_id: item.id,
        };
      }),
    });
    setIsPaying(true);
    // dispatch(postSale(sale));
  };

  useEffect(() => {
    setClient(clients.find((client) => client.id === newSale.client_id));
  }, [newSale.client_id, clients]);

  useEffect(calculateTotal, [newSale.items]);

  useEffect(() => {
    if (!hasPostedNewSale) return;
    dispatch(resetHasPostedNewSale());
    navigate(-1);
  }, [dispatch, hasPostedNewSale, navigate]);

  return (
    <div className="w-full h-full bg-primary-100 min-h-[100vh] min-w-[100vw] flex justify-center pt-[4.5rem]">
      {isSelectingClient && (
        <SelectClient closeHandler={() => setIsSelectingClient(false)} />
      )}
      {isAddingItem && (
        <AddItemToSale closeHandler={() => setIsAddingItem(false)} />
      )}

      {isPaying && (
        <SalePayementPopup
          closeHandler={() => setIsPaying(false)}
          total={total}
          sale={sale}
        />
      )}
      <header className="w-full h-[3.5rem] fixed top-0 left-0 right-0 bg-white border-b border-b-primary-300 flex items-center justify-between px-4">
        <h1 className="text-2xl font-semibold text-black-800">
          Nouvelle vente
        </h1>
      </header>
      <div className="w-[600px] p-4 border border-primary-300 bg-white h-fit">
        <div className="w-full flex justify-between items-start pb-4 border-b border-b-secondary-500">
          {client ? (
            <div className="flex gap-4 items-center">
              <div>
                <p className="font-semibold font-poppins text-black-800 text-lg">
                  {client.name}
                </p>
                <p className="font-poppins text-secondary-700">
                  {client.phone_number}
                </p>
              </div>
              <CircularButtonWithIcon
                icon={<MdModeEdit size={24} />}
                onClick={() => setIsSelectingClient(true)}
              />
            </div>
          ) : (
            <RoundedButton
              name={"choisir le client"}
              onClick={() => setIsSelectingClient(true)}
            />
          )}
          <p>Date: {new Date().toLocaleString().split(",")[0]}</p>
        </div>
        <table className="w-full">
          <thead className="font-semibold text-white h-[2.2rem] bg-black-800">
            <tr>
              <th className="text-start pl-2 w-[200px]">Article</th>
              <th className="text-start pl-2">PVU</th>
              <th className="text-start pl-2">Quantitee</th>
              <th className="text-start pl-2">PVT</th>
            </tr>
          </thead>
          <tbody>
            {newSale.items.map((saleItem) => (
              <NewSaleTableRow saleItem={saleItem} key={saleItem.id} />
            ))}
          </tbody>
        </table>
        <div className="flex items-center my-6 gap-4">
          <p className="font-semibold text-black-900 text-lg">
            Ajouter un article
          </p>
          <CircularButtonWithIcon
            icon={<BiPlus size={24} />}
            onClick={() => setIsAddingItem(true)}
          />
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="flex flex-col items-end font-poppins">
            <p className="font-semibold">Total:</p>
            <p className=" font-semibold text-3xl text-black-800">{total} Fc</p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 pt-4 border-t border-t-primary-300">
          <ButtonShadow name={"annuler"} onClick={cancelHandler} />
          <ButtonHighlight name={"confirmer"} onClick={postNewSale} />
        </div>
      </div>
    </div>
  );
};

export default NewSale;
