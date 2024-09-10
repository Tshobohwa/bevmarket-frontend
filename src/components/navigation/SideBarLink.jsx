import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarLink = ({ path, name, icon }) => {
  const currentPath = useLocation().pathname;
  return (
    <Link to={path}>
      <div
        className={`w-full h-[3rem] flex items-center gap-4 font-semibold rounded-lg ${
          currentPath === path
            ? "pl-4 text-white bg-primary-700"
            : "text-black-900 bg-white"
        }`}
      >
        {icon} <p>{name}</p>
      </div>
    </Link>
  );
};

export default SideBarLink;
