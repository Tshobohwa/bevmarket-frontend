import React from "react";
import { useParams } from "react-router-dom";
import SalepointDetailsSideBar from "../components/sidebars/SalepointDetailsSideBar";
import RoundedButton from "../components/buttons/RoundedButton";

const SalePointStock = () => {
  const { salePointId } = useParams();

  return (
    <div>
      <SalepointDetailsSideBar salePointId={salePointId} />
      <div className="ml-[270px] pt-[4rem]">
        <div className="h-[3rem] bg-white right-0 left-[270px] flex items-center justify-end px-4 fixed top-0">
          <RoundedButton name={"ajouter au stock"} />
        </div>
      </div>
    </div>
  );
};

export default SalePointStock;
