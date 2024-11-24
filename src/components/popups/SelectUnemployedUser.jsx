import React, { useEffect, useState } from "react";
import PopupContainer from "./PopupContainer";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import RoundedInputWithIcon from "../Inputs/RoundedInputWithIcon";
import { BiSearch } from "react-icons/bi";
import { getUnemployedUsers } from "../../redux/slices/users/usersAction";

const SelectUnemployedUser = ({ closeHandler }) => {
  const dispatch = useDispatch();

  const { unemployedUsers } = useSelector((state) => state.users);

  const [searchText, setSearchText] = useState("");
  const [filteredUnemployeds, setFilteredUnemployeds] = useState([]);

  useEffect(() => {
    dispatch(getUnemployedUsers());
  }, []);

  useEffect(() => {
    setFilteredUnemployeds(
      unemployedUsers.filter((user) =>
        `${user.name} ${user.email}`
          .toLowerCase()
          .includes(searchText.toLowerCase())
      )
    );
  }, [searchText, unemployedUsers]);

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
            Selectionner l'utilisateur.
          </h2>
          <RoundedInputWithIcon
            placeholder={"Chercher le client"}
            icon={<BiSearch size={24} />}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </div>
        <div className="h-[400px] w-full overflow-y-scroll border-t border-t-secondary-300">
          {filteredUnemployeds.map((unemployedUser) => (
            <div
              className="w-full h-[5rem] border-b border-b-secondary-100 flex items-center pl-4 hover:bg-primary-300 hover:cursor-pointer"
              // onClick={() => SelectUnemployedUserHandler(unemployedUser.id)}
              key={unemployedUser.id}
            >
              <div className="w-full">
                <p className="font-semibold text-lg text-black-700">
                  {unemployedUser.name}
                </p>
                <p className="text-sm text-black-500">{unemployedUser.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PopupContainer>
  );
};

export default SelectUnemployedUser;
