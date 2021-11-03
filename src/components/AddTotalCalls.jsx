import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTotalCalls() {
  // const [text, setText] = useState("");
  const [target, setTarget] = useState("");
  const [actual, setActual] = useState("");

  const { totalCallsMade } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTotalCalls = {
      id: Math.floor(Math.random() * 100000000),
      target: +target,
      actual: +actual,
      totalCallsPercentage: ((+actual / +target) * 10) / 100,
    };

    totalCallsMade(newTotalCalls);
  };
  return (
    <>
      <div className="form-style">
        <form onSubmit={onSubmit} className="kpi-tile">
          <div>
            <label htmlFor="text">Total Calls Made KPI</label>
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
      </div>
    </>
  );
}

export default AddTotalCalls;
