import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentEmployee } from "../redux/slices/employees/employeesActions";

const EmployedRoutes = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(
      getCurrentEmployee({
        establishment_id: currentUser.current_establishment_id,
        user_id: currentUser.id,
      })
    );
  }, [currentUser]);

  return currentUser.is_employed ? <Outlet /> : <Navigate to="/starting" />;
};

export default EmployedRoutes;
