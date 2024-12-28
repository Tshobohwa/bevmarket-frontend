import React from "react";
import SideBarLink from "./SideBarLink";
import { AiFillShop } from "react-icons/ai";
import { FaMoneyBillTransfer, FaUserGroup } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/user/userSlice";
import { RxDashboard } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ children }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full pl-[260px] p-4 pt-[4rem]">
        <nav className="w-[240px] fixed left-0 top-0 bottom-0 px-4 py-8 bg-white font-poppins overflow-scroll">
          <h1 className="text-3xl font-semibold text-secondary-950 text-center mb-8">
            Bevmarket
          </h1>
          <ul className="flex flex-col gap-4">
            <li>
              <SideBarLink
                path={"/"}
                name={"Tableau de bord"}
                icon={<RxDashboard size={18} />}
              />
            </li>
            <li>
              <SideBarLink
                path={"/ventes"}
                name={"Ventes"}
                icon={<AiFillShop size={18} />}
              />
            </li>
            <li>
              <SideBarLink
                path={"/depenses"}
                name={"Depenses"}
                icon={<FaMoneyBillTransfer size={18} />}
              />
            </li>
            <li>
              <SideBarLink
                path={"/stock"}
                name={"Stock"}
                icon={<FaWarehouse size={18} />}
              />
            </li>
            <li>
              <SideBarLink
                path={"/mes-vendeurs"}
                name={"Mes Vendeurs"}
                icon={<FaUser size={18} />}
              />
            </li>
            <li>
              <SideBarLink
                path={"/clients"}
                name={"Clients"}
                icon={<FaUserGroup size={18} />}
              />
            </li>

            <li>
              <SideBarLink
                path={"/myestablishement"}
                name={"Mon etablisement"}
                icon={<FaWarehouse size={18} />}
              />
            </li>
            <li>
              <button
                onClick={logoutHandler}
                className="flex items-center justify-center gap-4 hover:bg-red-600 w-full h-[2.5rem] border border-red-600 rounded-lg"
              >
                <p>logout</p>
              </button>
            </li>
          </ul>
        </nav>

        {/* Child components */}
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
