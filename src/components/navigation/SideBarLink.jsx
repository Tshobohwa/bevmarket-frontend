import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarLink = ({ path, name, icon }) => {
  const currentPath = useLocation().pathname;
  return (
    <Link to={path}>
      <div
        className={`w-full h-[2.5rem] rounded-lg flex gap-4 font-semibold ${
          currentPath === path ? "pl-4" : ""
        }`}
      >
        {icon} <p>{name}</p>
      </div>
    </Link>
  );
};

export default SideBarLink;
