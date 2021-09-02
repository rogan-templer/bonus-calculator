import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddSales() {
  // const [text, setText] = useState("");
  // const [target, setTarget] = useState("");
  const [actual, setActual] = useState("");

  const { addSale } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newSale = {
      actual: +actual,
    };

    addSale(newSale);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
      
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
