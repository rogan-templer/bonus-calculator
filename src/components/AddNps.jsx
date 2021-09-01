import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddNps() {
  const [text, setText] = useState("");
  const [target, setTarget] = useState("");
  const [actual, setActual] = useState("");

  const { npsMade } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newNps = {
      id: Math.floor(Math.random() * 100000000),
      text,
      target: +target,
      actual: +actual,
      npsPercentage: ((+actual / +target) * 20) / 100,
    };

    npsMade(newNps);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">NPS KPI</label>
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

export default AddNps;