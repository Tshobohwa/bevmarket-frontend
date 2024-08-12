import React from "react";
import SideBarLink from "./SideBarLink";

const Sidebar = ({ children }) => {
  return (
    <div className="w-full h-full pl-[260px] p-4">
      <nav className="w-[240px] fixed left-0 top-0 bottom-0 border-r border-primary-300 px-4 py-8 bg-white">
        <h1 className="text-3xl font-semibold text-secondary-950 text-center mb-8">
          Bevmarket
        </h1>
        <ul className="flex flex-col gap-4">
          <li>
            <SideBarLink path={"/"} name={"Ventes"} />
          </li>
          <li>
            <SideBarLink path={"/depenses"} name={"Depenses"} />
          </li>
          <li>
            <SideBarLink path={"/achats"} name={"Achats"} />
          </li>
          <li>
            <SideBarLink path={"/stock"} name={"Stock"} />
          </li>
          <li>
            <SideBarLink path={"/clients"} name={"Clients"} />
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Sidebar;
