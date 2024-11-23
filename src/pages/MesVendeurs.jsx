import React, { useEffect, useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import RoundedButton from "../components/buttons/RoundedButton";
import NewEmployee from "../components/popups/NewEmployee";
import RoundedInputWithIcon from "../components/Inputs/RoundedInputWithIcon";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../redux/slices/employees/employeesActions";

const MesVendeurs = () => {
  const dispatch = useDispatch();
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const { employees } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  useEffect(() => {
    setFilteredEmployees(
      employees.filter((employee) =>
        `${employee.user.name} ${employee.user.email}`
          .toLowerCase()
          .includes(searchText.toLowerCase())
      )
    );
  }, [employees, searchText]);

  return (
    <Sidebar>
      {isAddingEmployee && (
        <NewEmployee closeHandler={() => setIsAddingEmployee(false)} />
      )}
      <header className="h-[3.4rem] fixed top-0 left-[240px] right-0 bg-white flex items-center justify-between px-6">
        <h1 className="text-2xl font-semibold text-black-900">Mes Vendeurs</h1>
        <div className="flex gap-4 items-center">
          <RoundedInputWithIcon
            placeholder={"Chercher vendeur"}
            icon={<BiSearch size={24} />}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <RoundedButton
            name={"nouveau vendeur"}
            onClick={() => setIsAddingEmployee(true)}
          />
        </div>
      </header>
      <section className="w-full mt-4 bg-white p-4 border border-primary-200 rounded-md font-poppins">
        <table className="w-full">
          <thead className="w-full">
            <tr className="w-full h-[3rem] font-semibold text-black-700 border border-secondary-200 rounded-t-lg">
              <th className="w-[5rem] pl-4 text-start rounded-tl-lg">N</th>
              <th className="pl-4 text-start">Noms</th>
              <th className="pl-4 text-start">Email</th>
              <th className="pl-4 text-start">role</th>
              <th className="pl-4 text-start">point de vente</th>
              <th className="pl-4 text-start rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee, index) => (
              <tr
                className={`h-[3rem] border border-primary-200 text-black-700 text-lg hover:bg-primary-100 hover:cursor-pointer ${
                  index % 2 === 0 && "bg-primary-100/25"
                }`}
                // onClick={() => goToemployeeDetails(employee.id)}
              >
                <td className="pl-4">{index + 1}</td>
                <td className="pl-4">
                  <div className=" flex gap-2 items-center text-black-950">
                    <p>{employee.user.name}</p>
                  </div>
                </td>
                <td className="pl-4 text-black-500">{employee.user.email}</td>
                <td className="pl-4">{employee.role}</td>
                <td className="pl-4">{employee.sale_point.name}</td>
                <td className="pl-4">{employee.credit} Fc</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Sidebar>
  );
};

export default MesVendeurs;
