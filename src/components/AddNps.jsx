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
      target: +target,
      actual: +actual,
      npsPercentage: ((+actual / +target) * 20) / 100,
    };

    npsMade(newNps);
  };
  return (
    <>
      <div className="form-style">
        <form onSubmit={onSubmit} className="kpi-tile">
          <div>
            <label htmlFor="text">NPS KPI</label>
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

export default AddNps;
