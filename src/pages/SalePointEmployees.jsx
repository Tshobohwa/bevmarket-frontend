import React from "react";
import SalepointDetailsSideBar from "../components/sidebars/SalepointDetailsSideBar";
import { useParams } from "react-router-dom";

const SalePointEmployees = () => {
  const { salePointId } = useParams();

  return (
    <div>
      <SalepointDetailsSideBar salePointId={salePointId} />
    </div>
  );
};

export default SalePointEmployees;
