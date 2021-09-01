// import React, { useState, useContext } from "react";
// import { GlobalContext } from "../context/GlobalState";

// const OverallResult = () => {
//   // const [answer, setAnswer] = useState(0);

//   const { sales, freeCalls, totalCalls, nps, appsConverted } = useContext(
//     GlobalContext
//   );

//   const salesFinal = sales.salesPercentage;
//   const freeCallsFinal = freeCalls.freeCallsPercentage;
//   const totalCallsFinal = totalCalls.totalCallsPercentage;
//   const npsFinal = nps.npsPercentage;
//   const appsConvertedFinal = appsConverted.appsConvertedPercentage;

//   const result =
//     (salesFinal +
//       freeCallsFinal +
//       totalCallsFinal +
//       npsFinal +
//       appsConvertedFinal) *
//     100;

//   return (
//     <>
//       <h4>{parseFloat(result)}</h4>
//     </>
//   );
// };

// export default OverallResult;
