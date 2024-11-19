import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const UnemployedRoutes = () => {
  const { currentUser } = useSelector((store) => store.user);
  return !currentUser.is_employed ? <Outlet /> : <Navigate to="/" />;
};

export default UnemployedRoutes;
