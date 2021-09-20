import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function PercentResult() {
  const { sales, freeCalls, totalCalls, nps, appsConverted } = useContext(
    GlobalContext
  );

  // console.log("sales", sales);

  const salesResults = sales.map((sale) => sale.salesPercentage);
  const totalCallsResult = totalCalls.map(
    (totalCall) => totalCall.totalCallsPercentage
  );
  const freeCallsResult = freeCalls.map(
    (freeCall) => freeCall.freeCallsPercentage
  );
  const appsConvertedResult = appsConverted.map(
    (appConvert) => appConvert.appsConvertedPercentage
  );
  const npsResult = nps.map((np) => np.npsPercentage);

  const results =
    (+salesResults +
      +totalCallsResult +
      +freeCallsResult +
      +appsConvertedResult +
      +npsResult) *
    100;

  // console.log("sales results", salesResults);

  return (
    <>
      <div className="flex flex-wrap mt-3">
        <div className="m-3">
          {sales.map((sale) => {
            return (
              <div key={sale.id}>
                <h4>Sales:</h4>
                <p>Target: {sale.target}</p>
                <p>Achieved: {sale.actual}</p>
                <p>
                  Percentage Weighting attained:{" "}
                  {Math.floor(sale.salesPercentage * 100)}%
                </p>
              </div>
            );
          })}
        </div>

        <div className="m-3">
          {totalCalls.map((totalCall) => {
            return (
              <div key={totalCall.id}>
                <h4>Total Calls</h4>
                <p>Target: {totalCall.target}</p>
                <p>Achieved: {totalCall.actual}</p>
                <p>
                  Percentage Weighting attained:{" "}
                  {Math.floor(totalCall.totalCallsPercentage * 100)}%
                </p>
              </div>
            );
          })}
        </div>

        <div className="m-3">
          {freeCalls.map((freeCall) => {
            return (
              <div key={freeCall.id}>
                <h4>Free Calls</h4>
                <p>Target: {freeCall.target}</p>
                <p>Achieved: {freeCall.actual}</p>
                <p>
                  Percentage Weighting attained:{" "}
                  {Math.floor(freeCall.freeCallsPercentage * 100)}%
                </p>
              </div>
            );
          })}
        </div>

        <div className="m-3">
          {appsConverted.map((appsConvert) => {
            return (
              <div key={appsConvert.id}>
                <h4>Applications Converted</h4>
                <p>Target: {appsConvert.target}</p>
                <p>Achieved: {appsConvert.actual}</p>
                <p>
                  Percentage Weighting attained:{" "}
                  {Math.floor(appsConvert.appsConvertedPercentage * 100)}%
                </p>
              </div>
            );
          })}
        </div>

        <div className="m-3">
          {nps.map((np) => {
            return (
              <div key={np.id}>
                <h4>Net Promoter Score</h4>
                <p>Target: {np.target}</p>
                <p>Achieved: {np.actual}</p>
                <p>
                  Percentage Weighting attained:{" "}
                  {Math.floor(np.npsPercentage * 100)}%
                </p>
              </div>
            );
          })}
        </div>
        <div className="m-3">
          <h1>Overall Score: {Math.floor(results)} %</h1>
        </div>
      </div>
    </>
  );
}

export default PercentResult;
