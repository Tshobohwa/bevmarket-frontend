import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";

const Timefilter = ({ setFrom, setTo, setDate, onClick }) => {
  const [filterBy, setFilterBy] = useState("jour");
  return (
    <div className="px-[1.5rem] h-[3rem] border border-primary-400 flex gap-4 items-center rounded-full bg-white pr-[0.2rem]">
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
          <input type="date" onChange={(e) => setFrom(e.target.value)} />
          <p>au</p>{" "}
          <input type="date" onChange={(e) => setTo(e.target.value)} />
        </div>
      )}
      <button
        className="flex items-center justify-center h-[2.6rem] w-[2.6rem] bg-primary-800 text-white rounded-full m-0"
        onClick={onClick}
      >
        <FiFilter size={28} />
      </button>
    </div>
  );
};

export default Timefilter;
