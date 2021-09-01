// import React, { useState, useContext } from "react";
// import { GlobalContext } from "../context/GlobalState";

// function PercentResult() {
//   const { sales, freeCalls, totalCalls, nps, appsConverted } = useContext(
//     GlobalContext
//   );

//   // const salesFinal = sales.salesPercentage;
//   // const freeCallsFinal = freeCalls.freeCallsPercentage;
//   // const totalCallsFinal = totalCalls.totalCallsPercentage;
//   // const npsFinal = nps.npsPercentage;
//   // const appsConvertedFinal = appsConverted.appsConvertedPercentage;

//   // const result =
//   //   (salesFinal +
//   //     freeCallsFinal +
//   //     totalCallsFinal +
//   //     npsFinal +
//   //     appsConvertedFinal) *
//   //   100;

//   return (
//     <>
//       <h4>Sales Percentage: {sales.map((sale) => sale.salesPercentage)} </h4>
//       <h4>
//         Freecalls Percentage:{" "}
//         {freeCalls.map((freeCall) => freeCall.freeCallsPercentage)}{" "}
//       </h4>
//       <h4>
//         Total Calls Percentage:{" "}
//         {totalCalls.map((totalCall) => totalCall.totalCallsPercentage)}{" "}
//       </h4>
//       <h4>NPS Percentage: {nps.map((np) => np.npsPercentage)} </h4>
//       <h4>
//         Applications Converted Percentage:{" "}
//         {appsConverted.map((apps) => apps.appsConvertedPercentage)}{" "}
//       </h4>
      
//     </>
//   );
// }

// export default PercentResult;
