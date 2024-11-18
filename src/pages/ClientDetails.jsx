import { useParams, useSearchParams } from "react-router-dom";
import Timefilter from "../components/filters/Timefilter";
import ClientSideBar from "../components/sidebars/ClientSideBar";
import { useEffect } from "react";
import ClientPurchases from "../components/tabs/ClientPurchases";
import ClientRC from "../components/tabs/ClientRC";

const ClientDetails = () => {
  const { clientId } = useParams();
  const [URLSearchParams, setURLSearchParams] = useSearchParams();

  useEffect(() => {
    if (!URLSearchParams.get("tab")) setURLSearchParams({ tab: "purchases" });
  }, []);

  return (
    <div>
      <ClientSideBar clientId={+clientId} />
      <div className="fixed top-0 left-[20rem] right-0 p-4 pb-0 bg-white">
        <div className="w-full flex justify-between items-center"></div>
        <div className="h-12 w-full bg-white border border-red-300 grid grid-cols-2 mb-4">
          <button
            className={`w-full h-full ${
              URLSearchParams.get("tab") === "purchases" &&
              "border-b-[3px] border-red-500"
            }`}
            onClick={() => setURLSearchParams({ tab: "purchases" })}
          >
            Achats
          </button>
          <button
            className={`w-full h-full ${
              URLSearchParams.get("tab") === "rc" &&
              "border-b-[3px] border-red-500"
            }`}
            onClick={() => setURLSearchParams({ tab: "rc" })}
          >
            RC
          </button>
        </div>
      </div>
      <div className="w-full pl-[21rem] pt-[6rem] pr-4">
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
