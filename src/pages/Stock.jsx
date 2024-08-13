import React from "react";
import Sidebar from "../components/navigation/Sidebar";
import RoundedButton from "../components/buttons/RoundedButton";
import RoundedInputWithIcon from "../components/Inputs/RoundedInputWithIcon";
import { BiSearch } from "react-icons/bi";

const Stock = () => {
  return (
    <Sidebar>
      <header className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-black-900">Stock</h1>
        <div className="flex gap-4 items-center">
          <RoundedInputWithIcon
            placeholder={"rechercher article"}
            icon={<BiSearch size={24} />}
          />
          <RoundedButton name={"nouvel article"} />
        </div>
      </header>
      <section className="w-full mt-4 bg-white p-4 border border-primary-300 rounded-md">
        <table className="w-full">
          <thead className="w-full">
            <tr className="w-full h-[2.4rem] bg-secondary-800 text-white border border-secondary-800">
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
          <tbody>
            <tr className="h-[2.4rem] border border-primary-600 text-black-700 text-lg hover:bg-primary-100 hover:cursor-pointer">
              <td className="pl-4 border-r border-r-primary-600">
                Coca cola 24 x 33cl
              </td>
              <td className="pl-4 border-r border-r-primary-600">40 000 CDF</td>
              <td className="pl-4 border-r border-r-primary-600">44 000 CDF</td>
              <td className="pl-4 border-r border-r-primary-600">42 000 CDF</td>
              <td className="pl-4">400</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Sidebar>
  );
};

export default Stock;
