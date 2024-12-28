import React, { useEffect } from "react";
import { BsShop, BsTruck } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import SideBarLink from "../navigation/SideBarLink";
import { AiFillShop } from "react-icons/ai";
import {
  FaMoneyBillTransfer,
  FaUser,
  FaUserGroup,
  FaWarehouse,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getSalePoint } from "../../redux/slices/salePoints/salePointsActions";

// eslint-disable-next-line react/prop-types
const SalepointDetailsSideBar = ({ salePointId }) => {
  const dispatch = useDispatch();

  const { salePoint } = useSelector((state) => state.salePoints);

  useEffect(() => {
    dispatch(getSalePoint({ salePointId }));
  }, [dispatch, salePointId]);

  return (
    <div className="fixed top-0 left-0 bottom-0 w-[270px] bg-white p-4">
      <div className="w-full flex gap-4 items-center my-4">
        <Link to={"/myestablishement"}>
          <div className="h-[2.5rem] w-[2.5rem] rounded-md border flex items-center justify-center text-2xl font-semibold hover:bg-primary-600">
            {"<"}
          </div>
        </Link>
        <p className="text-2xl font-semibold text-primary-600">
          Ets {salePoint.establishment?.name}
        </p>
      </div>
      {salePoint.sale_point_type === "warehouse" && (
        <div className="w-full flex gap-4">
          <div className="w-[56px] h-[56px] rounded-full bg-primary-100 flex items-center justify-center text-black-600">
            <BsShop size={32} />
          </div>
          <div>
            <p className="font-semibold text-lg">{salePoint.warehouse.name}</p>
            <div className="flex gap-1 items-end text-primary-500 text-sm">
              <IoLocationOutline size={24} />
              <p>{salePoint.warehouse.location}</p>
            </div>
          </div>
        </div>
      )}
      {salePoint.sale_point_type === "truck" && (
        <div className="w-full flex gap-4">
          <div className="w-[56px] h-[56px] rounded-full bg-primary-100 flex items-center justify-center text-black-600">
            <BsTruck size={32} />
          </div>
          <div>
            <p className="font-semibold text-lg">{salePoint.truck.matricule}</p>
            <div className="flex gap-1 items-end text-primary-500 text-sm">
              <p>{salePoint.truck.marque}</p>
            </div>
          </div>
        </div>
      )}
      <ul className="flex flex-col w-full gap-4 my-4">
        <li>
          <SideBarLink
            path={`/myestablishement/salepoints/${salePointId}`}
            icon={<AiFillShop size={24} />}
            name={"Ventes"}
          />
        </li>
        <li>
          <SideBarLink
            path={`/myestablishement/salepoints/${salePointId}/expenses`}
            icon={<FaMoneyBillTransfer size={24} />}
            name={"Depenses"}
          />
        </li>
        <li>
          <SideBarLink
            path={`/myestablishement/salepoints/${salePointId}/stock`}
            icon={<FaWarehouse size={24} />}
            name={"Stock"}
          />
        </li>
        <li>
          <SideBarLink
            path={`/myestablishement/salepoints/${salePointId}/employees`}
            icon={<FaUser size={24} />}
            name={"Vendeurs"}
          />
        </li>
        {/* <li>
          <SideBarLink
            path={`/myestablishement/salepoints/${salePointId}/clients`}
            icon={<FaUserGroup size={24} />}
            name={"Clients"}
          />
        </li> */}
      </ul>
    </div>
  );
};

export default SalepointDetailsSideBar;
