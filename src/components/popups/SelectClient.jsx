import React, { useEffect } from "react";
import PopupContainer from "./PopupContainer";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import RoundedInputWithIcon from "../Inputs/RoundedInputWithIcon";
import { BiSearch } from "react-icons/bi";
import { getClients } from "../../redux/slices/clients/clientsActions";

const SelectClient = ({ closeHandler }) => {
  const dispatch = useDispatch();
  const { clients } = useSelector((state) => state.clients);

  useEffect(() => {
    dispatch(getClients());
  }, []);
  return (
    <PopupContainer>
      <div className="bg-white w-[600px] flex flex-col gap-4">
        <div className="flex w-full justify-between text-black-900  p-4">
          <h2 className="text-2xl font-semibold">Selectionner le client</h2>
          <button
            className="h-[2.5rem] w-[2.5rem] items-center justify-center text-black-900"
            onClick={closeHandler}
          >
            <IoClose size={32} />
          </button>
        </div>
        <div className="w-full flex items-center justify-end  px-4">
          <RoundedInputWithIcon
            placeholder={"Chercher le client"}
            icon={<BiSearch size={24} />}
          />
        </div>
        <div className="h-[400px] w-full overflow-y-scroll border-t border-t-secondary-300">
          {clients.map((client) => (
            <div className="w-full h-[4rem] border-b border-b-secondary-100 flex items-center pl-4 hover:bg-primary-300 hover:cursor-pointer">
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
