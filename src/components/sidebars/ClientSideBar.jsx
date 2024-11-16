import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { MdArrowLeft } from "react-icons/md";
import {
  getClient,
  updateClient,
} from "../../redux/slices/clients/clientsActions";
import { resetClientUpdated } from "../../redux/slices/clients/clientsSlice";

const ClientField = ({
  isUpdatingClient,
  fieldValue,
  setFieldValue,
  label,
}) => {
  return (
    <div className="w-full my-2">
      <label>{label}</label>
      {isUpdatingClient ? (
        <input
          type="text"
          className="h-[2.6rem] focus:outline-none focus:border focus:border-red-600 px-4 text-[1.2rem] w-full bg-red-100 rounded-lg"
          readOnly={!isUpdatingClient}
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
        />
      ) : (
        <p className="text-lg px-2 py-[4px]">{fieldValue}</p>
      )}
    </div>
  );
};

const ClientSideBar = ({ clientId }) => {
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const { client, clientUpdated } = useSelector((state) => state.clients);

  const [isUpdatingClient, setIsUpdatingClient] = useState(false);

  useEffect(() => {
    dispatch(getClient({ id: +clientId }));
  }, [clientId]);

  const [name, setName] = useState(client?.name);
  const [phone_number, setPhoneNumber] = useState(client?.phone_number);
  const [is_partener, setIsPartener] = useState(client?.is_partener);

  const submitHandler = () => {
    const client = {
      name,
      phone_number,
      is_partener,
    };
    dispatch(updateClient({ clientId, client }));
  };

  useEffect(() => {
    setName(client?.name);
    setPhoneNumber(client?.phone_number);
    setIsPartener(client?.is_partener);
  }, [client]);

  useEffect(() => {
    if (!clientUpdated) return;
    setIsUpdatingClient(false);
    dispatch(resetClientUpdated());
  }, [clientUpdated]);

  return (
    <div className="fixed top-0 left-0 bottom-0 w-[20rem] bg-white border-r border-r-red-300 flex flex-col items-center p-4">
      <div className="w-full flex justify-between">
        <button
          className="h-[2.5rem] w-[2.5rem] rounded-md border border-red-500 text-red-500 hover:text-white hover:bg-red-500 flex items-center justify-center"
          onClick={() => navigation("/clients")}
        >
          <MdArrowLeft size={48} />
        </button>
        <p>Info client</p>
      </div>
      <div className="w-[6rem] h-[6rem] rounded-full bg-red-600 flex items-center justify-center text-6xl text-white font-semibold">
        {client.name?.slice(0)[0]}
      </div>
      <ClientField
        fieldValue={name || ""}
        label={"Noms"}
        isUpdatingClient={isUpdatingClient}
        setFieldValue={setName}
      />
      <ClientField
        label={"Telephone"}
        fieldValue={phone_number || ""}
        isUpdatingClient={isUpdatingClient}
        setFieldValue={setPhoneNumber}
      />
      <div className="w-full my-2">
        <label>Type de client</label>
        {isUpdatingClient ? (
          <select
            type="text"
            className="h-[2.6rem] focus:outline-none px-4 text-[1.2rem] w-full bg-red-100 rounded-lg"
            onChange={(e) => setIsPartener(e.target.value)}
            value={is_partener}
          >
            <option value={true}>Partenaire</option>
            <option value={false}>Normal</option>
          </select>
        ) : (
          <p className="text-lg px-2 py-[4px]">
            {client?.is_partener ? "Partenaire" : "Normal"}
          </p>
        )}
      </div>
      {!isUpdatingClient ? (
        <button
          className="w-full h-[3rem] bg-red-600 rounded-xl my-6 text-lg text-white font-semibold"
          onClick={() => setIsUpdatingClient(true)}
        >
          modifier
        </button>
      ) : (
        <div className="grid grid-cols-2 gap-4 w-full">
          <button
            className="w-full h-[3rem] bg-red-200 rounded-xl my-6 text-lg font-semibold"
            onClick={() => setIsUpdatingClient(false)}
          >
            annuler
          </button>
          <button
            className="w-full h-[3rem] bg-red-600 rounded-xl my-6 text-lg text-white font-semibold"
            onClick={submitHandler}
          >
            sauvegarder
          </button>
        </div>
      )}
      <div>
        <label>Credit</label>
        <input
          type="text"
          className="h-[2.6rem] focus:outline-none px-4 text-[1.2rem] w-full bg-red-100 rounded-lg"
          value={client?.credit}
        />
      </div>
    </div>
  );
};

export default ClientSideBar;
