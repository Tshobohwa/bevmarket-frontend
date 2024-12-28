import React from "react";
import { useParams } from "react-router-dom";
import SalepointDetailsSideBar from "../components/sidebars/SalepointDetailsSideBar";

const SalePointStock = () => {

  const { salePointId } = useParams();

  return (
    <div>
      <SalepointDetailsSideBar salePointId={salePointId} />
    </div>
  );
};

export default SalePointStock;
