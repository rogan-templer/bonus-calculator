import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function PercentResult() {
  const { sales } = useContext(GlobalContext);

  return (
    <>
      <h4>Sales</h4>
      <ul>
        {sales.map((sale) => {
          return (
            <div key={sale.id}>
              <li>{sale.target}</li>
              <li>{sale.actual}</li>
              <li>{sale.salesPercentage * 100}%</li>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default PercentResult;
