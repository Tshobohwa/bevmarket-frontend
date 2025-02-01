import React, { useState } from "react";
import Timefilter from "../filters/Timefilter";

const StockHistory = () => {
  const [date, setDate] = useState(new Date());
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  return (
    <section className="w-full p-4 rounded-md bg-white border border-secondary-300 mt-4">
      <div className="w-full flex justify-between items-center">
        <div></div>
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
