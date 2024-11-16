import React, { useEffect, useState } from "react";
import PopupContainer from "./PopupContainer";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import RoundedInputWithIcon from "../Inputs/RoundedInputWithIcon";
import { BiSearch } from "react-icons/bi";
import { getClients } from "../../redux/slices/clients/clientsActions";
import { selectClient } from "../../redux/slices/sales/salesSlice";

const SelectClient = ({ closeHandler }) => {
  const dispatch = useDispatch();
  const { clients } = useSelector((state) => state.clients);
  const [searchText, setSearchText] = useState("");
  const [filteredClients, setFilteredClients] = useState([]);

  const selectClientHandler = (id) => {
    dispatch(selectClient(id));
    closeHandler();
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
    <PopupContainer>
      <div className="bg-white w-[650px] flex flex-col gap-4">
        <div className="flex w-full justify-end  p-4">
          <button
            className="h-[2.5rem] w-[2.5rem] items-center justify-center text-black-900"
            onClick={closeHandler}
          >
            <IoClose size={32} />
          </button>
        </div>
        <div className="w-full flex items-center justify-between  px-4">
          <h2 className="text-2xl font-semibold  text-black-900 font-poppins">
            Selectionner le client
          </h2>
          <RoundedInputWithIcon
            placeholder={"Chercher le client"}
            icon={<BiSearch size={24} />}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </div>
        <div className="h-[400px] w-full overflow-y-scroll border-t border-t-secondary-300">
          {filteredClients.map((client) => (
            <div
              className="w-full h-[4rem] border-b border-b-secondary-100 flex items-center pl-4 hover:bg-primary-300 hover:cursor-pointer"
              onClick={() => selectClientHandler(client.id)}
              key={client.id}
            >
              <div className="w-full">
                <p className="font-semibold text-lg text-black-700">
                  {client.name}
                </p>
                <p className="text-sm text-black-500">{client.phone_number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PopupContainer>
  );
};

export default SelectClient;
