import React from "react";
import SideBarLink from "./SideBarLink";

const Sidebar = () => {
  return (
    <div className="w-full h-full pl-[260px] p-4">
      <nav className="w-[240px] fixed left-0 top-0 bottom-0">
        <h1>Bevmarket</h1>
        <ul>
          <li>
            <SideBarLink path={"/"} name={"Ventes"} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
