import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const OverallResult = () => {
  const [answer, setAnswer] = useState("");

  const {
    salesPercentage,
    freeCallsPercentage,
    totalCallsPercentage,
    npsPercentage,
    appsConvertedPercentage,
  } = useContext(GlobalContext);

  function result() {
    setAnswer(
      (salesPercentage +
        freeCallsPercentage +
        totalCallsPercentage +
        npsPercentage +
        appsConvertedPercentage) *
        100
    );
  }
  return (
    <>
      <button onClick={result}>The final overall Score:</button>
      <h4>{isNaN(answer)}</h4>
    </>
  );
};

export default OverallResult;
