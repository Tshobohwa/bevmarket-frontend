import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStockItem } from "../../redux/slices/stock/stockSlice";
import { getStock } from "../../redux/slices/stock/stockActions";
import CircularButtonWithIcon from "../buttons/CircularButtonWithIcon";
import { MdModeEdit } from "react-icons/md";
import RoundedButton from "../buttons/RoundedButton";
import { BiSearch } from "react-icons/bi";
import RoundedInputWithIcon from "../Inputs/RoundedInputWithIcon";
import UpdatePrices from "../popups/UpdatePrices";
import NewItem from "../popups/NewItem";
import AddQuantityToItem from "../popups/AddQuantityToItem";
import { FaPlus } from "react-icons/fa6";
import formatNumber from "../../utils/formatNumber";

const StockAvailable = () => {
  const dispatch = useDispatch();

  const [addingItem, setAddingItem] = useState(false);
  const { stock } = useSelector((state) => state.stock);
  const [isModifyingPrices, setIsModifyingPrices] = useState(false);
  const [isAddingQuantity, setIsAddingQuantity] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredStockItems, setFilteredStockItems] = useState([]);

  useEffect(() => {
    dispatch(getStock());
  }, [dispatch]);

  const openModifyPriceModal = (id) => {
    dispatch(setCurrentStockItem(id));
    setIsModifyingPrices(true);
  };

  const openAddingQuantityToSckoPopup = (id) => {
    dispatch(setCurrentStockItem(id));
    setIsAddingQuantity(true);
  };

  useEffect(() => {
    setFilteredStockItems(
      stock.filter((stockItem) =>
        `${stockItem.item.name} ${stockItem.item.bottles_number} x ${stockItem.item.capacity} Cl`
          .toLowerCase()
          .includes(searchText)
      )
    );
  }, [stock, searchText]);

  return (
    <>
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
      <section className="w-full mt-4 bg-white p-4 border border-primary-300 rounded-md">
        <div className="w-full flex justify-end mb-4">
          <div className="flex gap-4 items-center">
            <RoundedInputWithIcon
              placeholder={"Rechercher article"}
              icon={<BiSearch size={24} />}
              onChange={(e) => setSearchText(e.target.value.toLowerCase())}
            />
            <RoundedButton
              name={"nouvel article"}
              onClick={() => setAddingItem(true)}
            />
          </div>
        </div>
        <table className="w-full">
          <thead className="w-full">
            <tr className="w-full h-[3rem] text-black-950  border border-primary-100">
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
            {filteredStockItems.map((item, index) => (
              <tr
                className={`h-[3rem] border border-primary-100 text-black-700 text-lg hover:bg-primary-100 ${
                  index % 2 !== 0 && "bg-primary-100/50"
                }`}
                key={index}
              >
                <td className="pl-4 font-semibold text-black-950 text-[0.8rem]">
                  {item.item.name} {item.item.bottles_number} x{" "}
                  {item.item.capacity} Cl
                </td>
                <td className="pl-4 text-[0.8rem]">
                  {formatNumber(item.average_unit_buy_price)} Fc
                </td>
                <td className="px-4">
                  <p className="flex items-center justify-between text-[0.8rem]">
                    {formatNumber(item.unit_sale_price)} Fc
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
                <td className="px-4">
                  <p className="flex items-center justify-between text-[0.8rem]">
                    {formatNumber(item.reduction_sale_price)} Fc{" "}
                    <CircularButtonWithIcon
                      icon={<MdModeEdit size={18} />}
                      onClick={() => openModifyPriceModal(item.id)}
                    />
                  </p>
                </td>
                <td className="px-4">
                  <p className="flex items-center justify-between text-[0.8rem]">
                    {formatNumber(item.quantity)}
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
    </>
  );
};

export default StockAvailable;
