import React from "react";
import SalepointDetailsSideBar from "../components/sidebars/SalepointDetailsSideBar";
import { useParams } from "react-router-dom";

const SalePointDetails = () => {
  // const dispatch = useDispatch();

  const { salePointId } = useParams();

  return (
    <div>
      <SalepointDetailsSideBar salePointId={salePointId} />
    </div>
  );
};

export default SalePointDetails;
