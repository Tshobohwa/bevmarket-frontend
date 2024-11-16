import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SalepointDetailsSideBar from "../components/sidebars/SalepointDetailsSideBar";
import { useDispatch } from "react-redux";

const SalePointStock = () => {
  const dispatch = useDispatch();

  const { salePointId } = useParams();

  return (
    <div>
      <SalepointDetailsSideBar salePointId={salePointId} />
    </div>
  );
};

export default SalePointStock;
