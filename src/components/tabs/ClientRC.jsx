import React from "react";
import Timefilter from "../filters/Timefilter";

const ClientRC = ({ clientId }) => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <p className="font-semibold text-xl">RC</p>
        <Timefilter />
      </div>
    </div>
  );
};

export default ClientRC;
