import React, { useEffect, useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import { useDispatch } from "react-redux";
import { getClients } from "../redux/slices/clients/clientsActions";
import NewClient from "../components/popups/NewClient";

const Clients = () => {
  const dispatch = useDispatch();

  const [addingClient, setAddingClient] = useState(false);

  useEffect(() => {
    dispatch(getClients());
  }, []);
  return (
    <Sidebar>
      {addingClient && (
        <NewClient closeHandler={() => setAddingClient(false)} />
      )}
      <header className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-black-900">Clients</h1>
        <div className="flex gap-4 items-center">
          <button
            className="h-[3rem] rounded-full px-[1.5rem] bg-primary-900 text-white font-semibold"
            onClick={() => setAddingClient(true)}
          >
            nouveau client
          </button>
        </div>
      </header>
      <section className="w-full mt-4">
        <table className="w-full">
          <thead className="w-full">
            <tr className="w-full h-[3rem] bg-secondary-800 text-white">
              <th className="w-[10rem] pl-4 text-start">ID</th>
              <th className="pl-4 text-start">Noms</th>
              <th className="pl-4 text-start w-[20rem]">telephone</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </section>
    </Sidebar>
  );
};

export default Clients;
