import React, { createContext } from "react";
import AppReducer from "./AppReducer";

//Initial State

const initialState = {
  kpis: [
    { type: "Sales", target: 100 },
    { type: "freeCalls", target: 55 },
    { type: "totalCalls", target: 1815 },
    { type: "npsTotal", target: 100 },
    { type: "appsConvertedTotal", target: 100 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function salesPercentage(sales) {
    dispatch({
      type: "SALES_PERCENTAGE",
      payload: sales,
    });
  }

  function freeCallsPercentage(freeCalls) {
    dispatch({
      type: "FREE_CALLS_PERCENTAGE",
      payload: freeCalls,
    });
  }

  function totalCallsPercentage(totalCalls) {
    dispatch({
      type: "TOTAL_CALLS_PERCENTAGE",
      payload: totalCalls,
    });
  }
  function npsPercentage(npsTotal) {
    dispatch({
      type: "NPS_PERCENTAGE",
      payload: npsTotal,
    });
  }
  function appsConvertedPercentage(appsConvertedTotal) {
    dispatch({
      type: "APPS_CONVERTED_PERCENTAGE",
      payload: appsConvertedTotal,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
