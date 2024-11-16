import React from "react";
import SalepointDetailsSideBar from "../components/sidebars/SalepointDetailsSideBar";
import { useParams } from "react-router-dom";

const SalePointExpenses = () => {
  const { salePointId } = useParams();

  return (
    <div>
      <SalepointDetailsSideBar salePointId={salePointId} />
    </div>
  );
};

export default SalePointExpenses;
