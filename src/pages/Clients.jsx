import React, { useEffect, useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../redux/slices/clients/clientsActions";
import NewClient from "../components/popups/NewClient";
import RoundedInputWithIcon from "../components/Inputs/RoundedInputWithIcon";
import { BiSearch } from "react-icons/bi";
import RoundedButton from "../components/buttons/RoundedButton";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [addingClient, setAddingClient] = useState(false);

  const { clients } = useSelector((state) => state.clients);

  const [searchText, setSearchText] = useState("");

  const [filteredClients, setFilteredClients] = useState([]);

  const goToClientDetails = (id) => {
    navigate(`/clients/${id}`);
  };

  useEffect(() => {
    dispatch(getClients());
  }, []);

  useEffect(() => {
    setFilteredClients(
      clients.filter((client) =>
        (client.name + client.phone_number)
          .toLowerCase()
          .includes(searchText.toLowerCase())
      )
    );
  }, [clients, searchText]);

  return (
    <Sidebar>
      {addingClient && (
        <NewClient closeHandler={() => setAddingClient(false)} />
      )}
      <header className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-black-900">Clients</h1>
        <div className="flex gap-4 items-center">
          <RoundedInputWithIcon
            placeholder={"Chercher client"}
            icon={<BiSearch size={24} />}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <RoundedButton
            onClick={() => setAddingClient(true)}
            name={"ajouter client"}
          />
        </div>
      </header>
      <section className="w-full mt-4 bg-white p-4 border border-primary-300 rounded-md">
        <table className="w-full">
          <thead className="w-full">
            <tr className="w-full h-[3rem] bg-secondary-800 text-white border border-secondary-800">
              <th className="w-[10rem] pl-4 text-start">N</th>
              <th className="pl-4 text-start">Noms</th>
              <th className="pl-4 text-start w-[20rem]">telephone</th>
              <th className="pl-4 text-start w-[20rem]">Credit</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client, index) => (
              <tr
                className="h-[3rem] border border-primary-600 text-black-700 text-lg hover:bg-primary-100 hover:cursor-pointer"
                onClick={() => goToClientDetails(client.id)}
              >
                <td className="pl-4 border-r border-r-primary-600">
                  {index + 1}
                </td>
                <td className="pl-4 border-r border-r-primary-600">
                  <div className=" flex gap-2 items-center">
                    <p>{client.name}</p>
                    <span className="text-primary-600">
                      {client.is_partener && <MdVerified />}
                    </span>
                  </div>
                </td>
                <td className="pl-4 border-r border-r-primary-600">
                  {client.phone_number}
                </td>
                <td className="pl-4">{client.credit} Fc</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Sidebar>
  );
};

export default Clients;
