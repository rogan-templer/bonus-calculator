import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Sales() {
  const [target, setTarget] = useState(0);
  const [actual, setActual] = useState(0);
  const [percentage, setPercentage] = useState(((actual / target) * 30) / 100);

  function salesPercentage() {
    setPercentage(((actual / target) * 30) / 100);
  }

  

  return (
    <>
      <div className="App">
        <h2>Sales</h2>
        <div className="number-inputs">
        <h4>Target</h4>
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(+e.target.value)}
            placeholder="0"
          />
        <h4>Actual</h4>  
          <input
            type="number"
            value={actual}
            onChange={(e) => setActual(+e.target.value)}
            placeholder="0"
          />
          
        </div>

        <button onClick={salesPercentage}>Calculate</button>

        <h2>{percentage}</h2>
      </div>
    </>
  );
}

export default Sales;
