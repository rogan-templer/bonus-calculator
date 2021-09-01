import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import PercentResult from "./PercentResult";

function AddSales() {
  const [text, setText] = useState("");
  const [target, setTarget] = useState("");
  const [actual, setActual] = useState("");
  const [salesPercentage, setSalesPercentage] = useState("");

  const { salesMade } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newSales = {
      id: Math.floor(Math.random() * 100000000),
      text,
      target: +target,
      actual: +actual,
      salesPercentage: ((+actual / +target) * 30) / 100,
    };

    salesMade(newSales);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Sales KPI</label>
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
        <div>
          <PercentResult />
        </div>
      </form>
    </>
  );
}

export default AddSales;
