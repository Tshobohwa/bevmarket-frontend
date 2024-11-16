import React, { useEffect, useState } from "react";
import PopupContainer from "./PopupContainer";
import { IoClose } from "react-icons/io5";
import RoundedInputWithIcon from "../Inputs/RoundedInputWithIcon";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getStock } from "../../redux/slices/stock/stockActions";
import SaleItemQuantityForm from "./SaleItemQuantityForm";

const AddItemToSale = ({ closeHandler }) => {
  const dispatch = useDispatch();

  const [filteredStock, setFilteredStock] = useState([]);

  const [currentItem, setCurrentItem] = useState(null);

  const [isWrittingQuantity, setIsWrittingQuantity] = useState(false);

  const [searchText, setSearchText] = useState("");

  const { stock } = useSelector((state) => state.stock);
  const { newSale } = useSelector((state) => state.sales);

  const itemClickHandler = (item) => {
    setCurrentItem(item);
    setIsWrittingQuantity(true);
  };

  useEffect(() => {
    dispatch(getStock());
  }, []);

  useEffect(() => {
    setFilteredStock(
      stock
        .filter(
          (item) =>
            !newSale.items.some((newSaleItem) => newSaleItem.id === item.id)
        )
        .filter((item) =>
          `${item.item.name} ${item.item.bottles_number} x ${item.item.capacity} Cl`
            .toLowerCase()
            .includes(searchText.toLowerCase())
        )
    );
  }, [stock, newSale.items, searchText]);
  return (
    <PopupContainer>
      <div className="bg-white w-[650px] flex flex-col gap-4 relative">
        {isWrittingQuantity && (
          <SaleItemQuantityForm
            currentItem={currentItem}
            closeHandler={closeHandler}
            cancelHandler={() => setIsWrittingQuantity(false)}
          />
        )}
        <div className="flex w-full justify-end  p-4">
          <button
            className="h-[2.5rem] w-[2.5rem] items-center justify-center text-black-900"
            onClick={closeHandler}
          >
            <IoClose size={32} />
          </button>
        </div>
        <div className="w-full flex items-center justify-between  px-4">
          <h2 className="text-2xl font-semibold  text-black-900 font-poppins">
            Ajouter un article
          </h2>
          <RoundedInputWithIcon
            placeholder={"Chercher l'article"}
            icon={<BiSearch size={24} />}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="h-[400px] w-full overflow-y-scroll border-t border-t-secondary-300">
          {filteredStock.map((item) => (
            <div
              className="w-full h-[4.5rem] border-b border-b-secondary-100 flex items-center justify-between pl-4 hover:bg-primary-300 hover:cursor-pointer"
              onClick={() => itemClickHandler(item)}
              key={item.id}
            >
              <div className="flex flex-col">
                <p className="font-semibold text-lg text-black-700">
                  {item.item.name} {item.item.bottles_number} x{" "}
                  {item.item.capacity} Cl
                </p>
                <p className="text-sm text-black-500">
                  quantitee: {item.quantity}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-black-500">
                  prix de vente: {item.unit_sale_price} Fc
                </p>
                <p className="text-black-500">
                  prix de vente partenaire: {item.reduction_sale_price} Fc
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PopupContainer>
  );
};

export default AddItemToSale;
