import React from "react";
import { BsShop } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const WarehouseCard = ({ salePoint }) => {
  const { warehouse } = salePoint;
  return (
    <Link to={`my-establishement/salepoints/${salePoint.id}`}>
      <div className="w-full h-full bg-white border border-primary-200 p-4 rounded-2xl hover:cursor-pointer hover:shadow-lg font-poppins flex flex-col justify-between">
        <div className="w-full flex gap-4">
          <div className="w-[56px] h-[56px] rounded-full bg-primary-100 flex items-center justify-center text-black-600">
            <BsShop size={32} />
          </div>
          <div>
            <p className="font-semibold text-lg">{warehouse.name}</p>
            <div className="flex gap-1 items-end text-primary-500">
              <IoLocationOutline size={24} />
              <p>{warehouse.location}</p>
            </div>
          </div>
        </div>
        <p className="text-end"></p>
      </div>
    </Link>
  );
};

export default WarehouseCard;
