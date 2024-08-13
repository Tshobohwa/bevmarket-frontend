import React from "react";
import SideBarLink from "./SideBarLink";
import { AiFillShop } from "react-icons/ai";
import { FaMoneyBillTransfer, FaUserGroup } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Sidebar = ({ children }) => {
  return (
    <div className="w-full h-full">
      <header className="h-[3rem] fixed top-0 left-[240px] right-0 bg-white"></header>
      <div className="w-full h-full pl-[260px] p-4 pt-[4rem]">
        <nav className="w-[240px] fixed left-0 top-0 bottom-0 border-r border-primary-300 px-4 py-8 bg-white">
          <h1 className="text-3xl font-semibold text-secondary-950 text-center mb-8">
            Bevmarket
          </h1>
          <ul className="flex flex-col gap-4">
            <li>
              <SideBarLink
                path={"/"}
                name={"Tableau de bord"}
                icon={<MdDashboard size={18} />}
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
              <SideBarLink path={"/achats"} name={"Achats"} />
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
          </ul>
        </nav>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
