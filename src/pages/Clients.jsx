import React, { useEffect } from "react";
import Sidebar from "../components/navigation/Sidebar";
import { useDispatch } from "react-redux";
import { getClients } from "../redux/slices/clients/clientsActions";

const Clients = () => {
  const dispatch = useDispatch();
  dispatch(getClients());
  useEffect(() => {
    dispatch(getClients());
  }, []);
  return (
    <Sidebar>
      <header className="w-full">
        <h1 className="text-4xl font-semibold text-black-900">Clients</h1>
      </header>
      <section className="w-full"></section>
    </Sidebar>
  );
};

export default Clients;
