import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddSales() {
  const [text, setText] = useState("");
  const [target, setTarget] = useState("");
  const [actual, setActual] = useState("");
  const [salesPercentage, setSalesPercentage] = useState("");

  const { addKpi } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newKpi = {
      id: Math.floor(Math.random() * 100000000),
      kpi: text,
      target: +target,
      actual: +actual,
    };

    addKpi(newKpi);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Specific KPI</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter KPI Name..."
          />
        </div>
        <div>
          <label>Target</label>
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="Enter target amount"
          />
        </div>
        <div>
          <label>Actual</label>
          <input
            type="number"
            value={actual}
            onChange={(e) => setActual(e.target.value)}
            placeholder="Enter actual amount achieved"
          />
        </div>
        <button>Add KPI Information</button>
      </form>
    </>
  );
}

export default AddSales;
