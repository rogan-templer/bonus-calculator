import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function PercentResult() {
  const [percent, setPercent] = useState("");
  const { sales } = useContext(GlobalContext);

  return (
    <>
      <h4>Sales Percentage: {sales.map((sale) => sale.salesPercentage)} </h4>
    </>
  );
}

export default PercentResult;
