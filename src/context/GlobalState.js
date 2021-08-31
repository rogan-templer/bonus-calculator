import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State

const initialState = {
  kpis: [
    { id: 1, type: "Sales", target: 100 },
    { id: 2, type: "Free Calls", target: 55 },
    { id: 3, type: "Total Calls", target: 1815 },
    { id: 4, type: "NPS Total", target: 100 },
    { id: 5, type: "Applications Converted Total", target: 100 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // // Actions
  // function salesPercentage(sales) {
  //   dispatch({
  //     type: "SALES_PERCENTAGE",
  //     payload: sales,
  //   });
  // }

  // function freeCallsPercentage(freeCalls) {
  //   dispatch({
  //     type: "FREE_CALLS_PERCENTAGE",
  //     payload: freeCalls,
  //   });
  // }

  // function totalCallsPercentage(totalCalls) {
  //   dispatch({
  //     type: "TOTAL_CALLS_PERCENTAGE",
  //     payload: totalCalls,
  //   });
  // }
  // function npsPercentage(npsTotal) {
  //   dispatch({
  //     type: "NPS_PERCENTAGE",
  //     payload: npsTotal,
  //   });
  // }
  // function appsConvertedPercentage(appsConvertedTotal) {
  //   dispatch({
  //     type: "APPS_CONVERTED_PERCENTAGE",
  //     payload: appsConvertedTotal,
  //   });
  // }

  return (
    <GlobalContext.Provider
      value={{
        kpis: state.kpis,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
