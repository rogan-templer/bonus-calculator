import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function PercentResult() {
  const { sales, freeCalls, totalCalls, nps, appsConverted } = useContext(
    GlobalContext
  );

  console.log("sales", sales.salesPercentage);

  const results =
    (sales.salesPercentage +
      freeCalls.freeCallsPercentage +
      totalCalls.totalCallsPercentage +
      nps.npsPercentage +
      appsConverted.appsConvertedPercentage) *
    100;

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
      <h4>Free Calls</h4>
      <ul>
        {freeCalls.map((freeCall) => {
          return (
            <div key={freeCall.id}>
              <li>{freeCall.target}</li>
              <li>{freeCall.actual}</li>
              <li>{freeCall.freeCallsPercentage * 100}%</li>
            </div>
          );
        })}
      </ul>
      <h4>Total Calls</h4>
      <ul>
        {totalCalls.map((totalCall) => {
          return (
            <div key={totalCall.id}>
              <li>{totalCall.target}</li>
              <li>{totalCall.actual}</li>
              <li>{totalCall.totalCallsPercentage * 100}%</li>
            </div>
          );
        })}
      </ul>
      <h4>NPS</h4>
      <ul>
        {nps.map((np) => {
          return (
            <div key={np.id}>
              <li>{np.target}</li>
              <li>{np.actual}</li>
              <li>{np.npsPercentage * 100}%</li>
            </div>
          );
        })}
      </ul>
      <h4>Applications Converted</h4>
      <ul>
        {appsConverted.map((appsConvert) => {
          return (
            <div key={appsConvert.id}>
              <li>{appsConvert.target}</li>
              <li>{appsConvert.actual}</li>
              <li>{appsConvert.appsConvertedPercentage * 100}%</li>
            </div>
          );
        })}
      </ul>
      <div>
        <h1>Overall Score: {Math.floor(results)} %</h1>
      </div>
    </>
  );
}

export default PercentResult;
