import React, { useEffect, useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import RoundedButton from "../components/buttons/RoundedButton";
import RoundedInputWithIcon from "../components/Inputs/RoundedInputWithIcon";
import { BiSearch } from "react-icons/bi";
import NewItem from "../components/popups/NewItem";
import { useDispatch, useSelector } from "react-redux";
import { getStock } from "../redux/slices/stock/stockActions";
import CircularButtonWithIcon from "../components/buttons/CircularButtonWithIcon";
import { FaPlus } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { setCurrentStockItem } from "../redux/slices/stock/stockSlice";
import UpdatePrices from "../components/popups/UpdatePrices";
import AddQuantityToItem from "../components/popups/AddQuantityToItem";

const Stock = () => {
  const dispatch = useDispatch();
  const [addingItem, setAddingItem] = useState(false);
  const { stock } = useSelector((state) => state.stock);
  const [isModifyingPrices, setIsModifyingPrices] = useState(false);
  const [isAddingQuantity, setIsAddingQuantity] = useState(false);

  useEffect(() => {
    dispatch(getStock());
  }, []);

  const openModifyPriceModal = (id) => {
    dispatch(setCurrentStockItem(id));
    setIsModifyingPrices(true);
  };

  const openAddingQuantityToSckoPopup = (id) => {
    dispatch(setCurrentStockItem(id));
    setIsAddingQuantity(true);
  };

  return (
    <Sidebar>
      {isModifyingPrices && (
        <UpdatePrices
          closeHandler={() => {
            setIsModifyingPrices(false);
          }}
        />
      )}
      {addingItem && <NewItem closeHandler={() => setAddingItem(false)} />}
      {isAddingQuantity && (
        <AddQuantityToItem closeHandler={() => setIsAddingQuantity(false)} />
      )}
      <header className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-black-900">Stock</h1>
        <div className="flex gap-4 items-center">
          <RoundedInputWithIcon
            placeholder={"rechercher article"}
            icon={<BiSearch size={24} />}
          />
          <RoundedButton
            name={"nouvel article"}
            onClick={() => setAddingItem(true)}
          />
        </div>
      </header>
      <section className="w-full mt-4 bg-white p-4 border border-primary-300 rounded-md">
        <table className="w-full">
          <thead className="w-full">
            <tr className="w-full h-[2.4rem] bg-secondary-800 text-white border border-secondary-800">
              <th className="pl-4 text-start w-[25%] border-r border-r-white">
                Article
              </th>
              <th className="pl-4 text-start w-[20%] border-r border-r-white">
                Prix d'achat unitaire
              </th>
              <th className="pl-4 text-start w-[20%] border-r border-r-white">
                Prix de vente
              </th>
              <th className="pl-4 text-start w-[20%]  border-r border-r-white">
                Prix partenaire
              </th>
              <th className="pl-4 text-start  w-[15%]">Quantite</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((item) => (
              <tr className="h-[2.4rem] border border-primary-600 text-black-700 text-lg hover:bg-primary-100">
                <td className="pl-4 border-r border-r-primary-600 font-semibold">
                  {item.item.name} {item.item.bottles_number} x{" "}
                  {item.item.capacity} Cl
                </td>
                <td className="pl-4 border-r border-r-primary-600">
                  {item.average_unit_buy_price} CDF
                </td>
                <td className="px-4 border-r border-r-primary-600">
                  <p className="flex items-center justify-between">
                    {item.unit_sale_price} CDF
                    <CircularButtonWithIcon
                      icon={
                        <MdModeEdit
                          size={18}
                          onClick={() => openModifyPriceModal(item.id)}
                        />
                      }
                    />
                  </p>
                </td>
                <td className="px-4 border-r border-r-primary-600">
                  <p className="flex items-center justify-between">
                    {item.reduction_sale_price} CDF{" "}
                    <CircularButtonWithIcon
                      icon={<MdModeEdit size={18} />}
                      onClick={() => openModifyPriceModal(item.id)}
                    />
                  </p>
                </td>
                <td className="px-4">
                  <p className="flex items-center justify-between">
                    {item.quantity}
                    <CircularButtonWithIcon
                      icon={<FaPlus size={18} />}
                      onClick={() => openAddingQuantityToSckoPopup(item.id)}
                    />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Sidebar>
  );
};

export default Stock;
