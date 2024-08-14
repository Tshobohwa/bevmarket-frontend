import React, { useState } from "react";

const Timefilter = ({ setFrom, setTo, setDate }) => {
  const [filterBy, setFilterBy] = useState("jour");
  return (
    <div className="px-[1.5rem] h-[3rem] border border-primary-400 flex gap-4 items-center rounded-full bg-white">
      <p>Filtrer par:</p>
      <select
        className="focus:outline-none"
        onChange={(e) => setFilterBy(e.target.value)}
      >
        <option value="jour">jour</option>
        <option value="periode">periode</option>
      </select>
      {filterBy === "jour" && (
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      )}
      {filterBy === "periode" && (
        <div className="flex gap-4 items-center">
          <p>du</p>{" "}
          <input type="date" onChange={(e) => setDate(e.target.value)} />
          <p>au</p>{" "}
          <input type="date" onChange={(e) => setDate(e.target.value)} />
        </div>
      )}
    </div>
  );
};

export default Timefilter;
