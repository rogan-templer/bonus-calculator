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
      <div className="mt-3">
        <h4>Outcomes</h4>
        <span>
          {sales.map((sale) => {
            return (
              <div key={sale.id}>
                <h4>Sales</h4>
                <p>{sale.text}</p>
                <p>{sale.target}</p>
                <p>{sale.actual}</p>
                <p>{Math.floor(sale.salesPercentage * 100)}%</p>
              </div>
            );
          })}
        </span>

        <span>
          {totalCalls.map((totalCall) => {
            return (
              <div key={totalCall.id}>
                <h4>Total Calls</h4>
                <p>{totalCall.text}</p>
                <p>{totalCall.target}</p>
                <p>{totalCall.actual}</p>
                <p>{Math.floor(totalCall.totalCallsPercentage * 100)}%</p>
              </div>
            );
          })}
        </span>

        <span>
          {freeCalls.map((freeCall) => {
            return (
              <div key={freeCall.id}>
                <h4>Free Calls</h4>
                <p>{freeCall.text}</p>
                <p>{freeCall.target}</p>
                <p>{freeCall.actual}</p>
                <p>{Math.floor(freeCall.freeCallsPercentage * 100)}%</p>
              </div>
            );
          })}
        </span>

        <span>
          {appsConverted.map((appsConvert) => {
            return (
              <div key={appsConvert.id}>
                <h4>Applications Converted</h4>
                <p>{appsConvert.text}</p>
                <p>{appsConvert.target}</p>
                <p>{appsConvert.actual}</p>
                <p>{Math.floor(appsConvert.appsConvertedPercentage * 100)}%</p>
              </div>
            );
          })}
        </span>

        <span>
          {nps.map((np) => {
            return (
              <div key={np.id}>
                <h4>Net Promoter Score</h4>
                <p>{np.text}</p>
                <p>{np.target}</p>
                <p>{np.actual}</p>
                <p>{Math.floor(np.npsPercentage * 100)}%</p>
              </div>
            );
          })}
        </span>
        <div>
          <h1>Overall Score: {Math.floor(results)} %</h1>
        </div>
      </div>
    </>
  );
}

export default PercentResult;
