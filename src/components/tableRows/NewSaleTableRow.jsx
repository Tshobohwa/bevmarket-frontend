import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NewSaleTableRow = ({ saleItem }) => {
  const { stock } = useSelector((state) => state.stock);

  const [item, setItem] = useState();

  useEffect(() => {
    setItem(stock.find((item) => item.id === saleItem.id));
  }, [stock]);
  return (
    <tr className="h-[2rem]">
      <td className="text-start pl-2 w-[200px] font-poppins font-semibold text-black-800">
        {item?.item?.name} {item?.item?.bottles_number} x {item?.item?.capacity}{" "}
        Cl
      </td>
      <td className="text-start pl-2">{saleItem.unit_sale_price} Fc</td>
      <td className="text-start pl-2">{saleItem.quantity}</td>
      <td className="text-start pl-2">
        {saleItem.unit_sale_price * saleItem.quantity} Fc
      </td>
    </tr>
  );
};

export default NewSaleTableRow;
