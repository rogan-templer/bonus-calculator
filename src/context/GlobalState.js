import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State

const initialState = {
  kpis: [
    { id: 1, type: "Sales Target", target: 100 },
    { id: 2, type: "Free Calls Target", target: 55 },
    { id: 3, type: "Total Calls Target", target: 1815 },
    { id: 4, type: "NPS Total Target", target: 100 },
    { id: 5, type: "Applications Converted Total Target", target: 100 },
  ],
  employees: [
    { id: 1, name: "Employee One" },
    { id: 2, name: "Employee Two" },
    { id: 3, name: "Employee Three" },
    { id: 4, name: "Employee Four" },
    { id: 5, name: "Employee Five" },
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
        employees: state.employees,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
