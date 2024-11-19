import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const EmployedRoutes = () => {
  const { currentUser } = useSelector((store) => store.user);
  return currentUser.is_employed ? <Outlet /> : <Navigate to="/starting" />;
};

export default EmployedRoutes;
