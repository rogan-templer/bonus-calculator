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
        <ul>
          {sales.map((sale) => {
            return (
              <div key={sale.id}>
                <h4>Sales</h4>
                <li>{sale.text}</li>
                <li>{sale.target}</li>
                <li>{sale.actual}</li>
                <li>{Math.floor(sale.salesPercentage * 100)}%</li>
              </div>
            );
          })}
        </ul>

        <ul>
          {totalCalls.map((totalCall) => {
            return (
              <div key={totalCall.id}>
                <h4>Total Calls</h4>
                <li>{totalCall.text}</li>
                <li>{totalCall.target}</li>
                <li>{totalCall.actual}</li>
                <li>{Math.floor(totalCall.totalCallsPercentage * 100)}%</li>
              </div>
            );
          })}
        </ul>

        <ul>
          {freeCalls.map((freeCall) => {
            return (
              <div key={freeCall.id}>
                <h4>Free Calls</h4>
                <li>{freeCall.text}</li>
                <li>{freeCall.target}</li>
                <li>{freeCall.actual}</li>
                <li>{Math.floor(freeCall.freeCallsPercentage * 100)}%</li>
              </div>
            );
          })}
        </ul>

        <ul>
          {appsConverted.map((appsConvert) => {
            return (
              <div key={appsConvert.id}>
                <h4>Applications Converted</h4>
                <li>{appsConvert.text}</li>
                <li>{appsConvert.target}</li>
                <li>{appsConvert.actual}</li>
                <li>
                  {Math.floor(appsConvert.appsConvertedPercentage * 100)}%
                </li>
              </div>
            );
          })}
        </ul>

        <ul>
          {nps.map((np) => {
            return (
              <div key={np.id}>
                <h4>Net Promoter Score</h4>
                <li>{np.text}</li>
                <li>{np.target}</li>
                <li>{np.actual}</li>
                <li>{Math.floor(np.npsPercentage * 100)}%</li>
              </div>
            );
          })}
        </ul>
        <div>
          <h1>Overall Score: {Math.floor(results)} %</h1>
        </div>
      </div>
    </>
  );
}

export default PercentResult;
