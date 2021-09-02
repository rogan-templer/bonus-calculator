import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function PercentResult() {
  
  const { sales } = useContext(GlobalContext);

  const target = 100;

  const result = (sales.actual / target) * 100;

  return (
    <>
      <h4>Sales Percentage: {result} </h4>
    </>
  );
}

export default PercentResult;
