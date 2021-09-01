import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddSales() {
  const [text, setText] = useState("");
  const [target, setTarget] = useState("");
  const [actual, setActual] = useState("");

  const { salesMade } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newSales = {
      id: Math.floor(Math.random() * 100000000),
      text,
      target: +target,
      actual: +actual,
    };

    salesMade(newSales);
  };
  return (
    <>
      <h3>Add KPI Info</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">KPI</label>
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
