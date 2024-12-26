import { useParams, useSearchParams } from "react-router-dom";
import Timefilter from "../components/filters/Timefilter";
import ClientSideBar from "../components/sidebars/ClientSideBar";
import { useEffect, useState } from "react";
import ClientPurchases from "../components/tabs/ClientPurchases";
import ClientRC from "../components/tabs/ClientRC";

const ClientDetails = () => {
  const { clientId } = useParams();
  const [URLSearchParams, setURLSearchParams] = useSearchParams();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    if (!URLSearchParams.get("tab")) setURLSearchParams({ tab: "purchases" });
  }, [URLSearchParams, setURLSearchParams]);

  return (
    <div>
      <ClientSideBar clientId={+clientId} />
      <div className="fixed top-0 left-[17rem] right-0 pb-0 bg-white">
        <div className="w-full flex justify-between items-center pr-4">
          <div className="h-12 w-[24rem] bg-white grid grid-cols-2">
            <button
              className={`w-[12rem] h-full ${
                URLSearchParams.get("tab") === "purchases" &&
                "border-b-[3px] border-red-500"
              }`}
              onClick={() => setURLSearchParams({ tab: "purchases" })}
            >
              Achats
            </button>
            <button
              className={`w-[12rem] h-full ${
                URLSearchParams.get("tab") === "rc" &&
                "border-b-[3px] border-red-500"
              }`}
              onClick={() => setURLSearchParams({ tab: "rc" })}
            >
              RC
            </button>
          </div>
          <Timefilter
            from={from}
            to={to}
            date={date}
            setFrom={setFrom}
            setTo={setTo}
            setDate={setDate}
          />
        </div>
      </div>
      <div className="w-full pl-[18rem] pt-[6rem] pr-4">
        {URLSearchParams.get("tab") === "purchases" && (
          <ClientPurchases clientId={clientId} />
        )}
        {URLSearchParams.get("tab") === "rc" && (
          <ClientRC clientId={clientId} />
        )}
      </div>
    </div>
  );
};

export default ClientDetails;
