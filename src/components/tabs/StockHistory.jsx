import React, { useState } from "react";
import Timefilter from "../filters/Timefilter";

const StockHistory = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [from, setFrom] = useState(new Date().toISOString().split("T")[0]);
  const [to, setTo] = useState(new Date().toISOString().split("T")[0]);
  return (
    <section className="w-full p-4 rounded-md bg-white border border-secondary-300 mt-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex  gap-4">
          <button className="h-[1.6rem] rounded-lg bg-primary-700 text-white px-6">
            achats
          </button>
          <button className="h-[1.6rem] rounded-lg bg-primary-100 px-6">
            ventes
          </button>
          <button className="h-[1.6rem] rounded-lg bg-primary-100 px-6">
            rc
          </button>
        </div>
        <Timefilter
          date={date}
          setDate={setDate}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
        />
      </div>
    </section>
  );
};

export default StockHistory;
