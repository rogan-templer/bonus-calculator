import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddAppsConverted() {
  const [text, setText] = useState("");
  const [target, setTarget] = useState("");
  const [actual, setActual] = useState("");

  const { appsConvertedMade } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newAppsConverted = {
      id: Math.floor(Math.random() * 100000000),
      target: +target,
      actual: +actual,
      appsConvertedPercentage: ((+actual / +target) * 20) / 100,
    };

    appsConvertedMade(newAppsConverted);
  };
  return (
    <>
      <div className="form-style">
        <form onSubmit={onSubmit} className="kpi-tile">
          <div>
            <label htmlFor="text">Applications Converted KPI</label>
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

export default AddAppsConverted;
