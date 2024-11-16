import React, { useEffect } from "react";
import SalepointDetailsSideBar from "../components/sidebars/SalepointDetailsSideBar";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const SalePointEmployees = () => {
  const dispatch = useDispatch();

  const { salePointId } = useParams();

  return (
    <div>
      <SalepointDetailsSideBar salePointId={salePointId} />
    </div>
  );
};

export default SalePointEmployees;
