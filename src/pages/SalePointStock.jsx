import React from "react";
import { useParams } from "react-router-dom";
import SalepointDetailsSideBar from "../components/sidebars/SalepointDetailsSideBar";
import RoundedButton from "../components/buttons/RoundedButton";
import { useSelector } from "react-redux";
import RoundedInputWithIcon from "../components/Inputs/RoundedInputWithIcon";
import { BiSearch } from "react-icons/bi";

const SalePointStock = () => {
  const { salePointId } = useParams();

  const { salePointStock } = useSelector((state) => state.stock);

  return (
    <div>
      <SalepointDetailsSideBar salePointId={salePointId} />
      <div className="ml-[270px] pt-[4rem] mr-4 pl-4">
        <div className="h-[3rem] bg-white right-0 left-[270px] flex items-center justify-end gap-4 px-4 fixed top-0">
          <RoundedInputWithIcon
            placeholder={"Rechercher l'article"}
            icon={<BiSearch size={20} />}
          />
          <RoundedButton name={"ajouter au stock"} />
        </div>

        <section className="w-full mt-4 pl-6 bg-white p-4 border border-primary-300 rounded-md">
          <table className="w-full">
            <thead className="w-full">
              <tr className="w-full h-[3rem] text-black-950  border border-primary-100">
                <th className="pl-4 text-start w-[25%] border-r border-r-white">
                  Article
                </th>
                <th className="pl-4 text-start w-[20%] border-r border-r-white">
                  Prix d'achat unitaire
                </th>
                <th className="pl-4 text-start w-[20%] border-r border-r-white">
                  Prix de vente
                </th>
                <th className="pl-4 text-start w-[20%]  border-r border-r-white">
                  Prix partenaire
                </th>
                <th className="pl-4 text-start  w-[15%]">Quantite</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default SalePointStock;
