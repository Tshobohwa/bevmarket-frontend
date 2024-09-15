import React from "react";
import { BsTruck } from "react-icons/bs";
import { Link } from "react-router-dom";

const TruckCard = ({ salePoint }) => {
  const { truck } = salePoint;
  return (
    <Link to={`my-establishement/salepoints/${salePoint.id}`}>
      <div className="w-full h-full bg-white border border-primary-200 p-4 rounded-2xl hover:cursor-pointer hover:shadow-lg font-poppins flex flex-col justify-between">
        <div className="w-full flex gap-4">
          <div className="w-[56px] h-[56px] rounded-full bg-primary-100 flex items-center justify-center text-black-600">
            <BsTruck size={32} />
          </div>
          <div>
            <p className="font-semibold text-lg">{truck.matricule}</p>
            <div className="flex gap-1 items-end text-primary-500">
              <p>{truck.marque}</p>
            </div>
          </div>
        </div>
        <p className="text-end">employees: 60</p>
      </div>
    </Link>
  );
};

export default TruckCard;
