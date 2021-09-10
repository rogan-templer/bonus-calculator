import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State

const initialState = {
  sales: [],
  freeCalls: [],
  totalCalls: [],
  nps: [],
  appsConverted: [],

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
  function addSale(sale) {
    dispatch({
      type: "ADD_SALE",
      payload: sale,
    });
  }

  function freeCallsMade(freeCalls) {
    dispatch({
      type: "FREE_CALLS_MADE",
      payload: freeCalls,
    });
  }

  function totalCallsMade(totalCalls) {
    dispatch({
      type: "TOTAL_CALLS_MADE",
      payload: totalCalls,
    });
  }

  function npsMade(nps) {
    dispatch({
      type: "NPS_MADE",
      payload: nps,
    });
  }

  function appsConvertedMade(appsConverted) {
    dispatch({
      type: "APPS_CONVERTED_MADE",
      payload: appsConverted,
    });
  }

  // function overallScore(
  //   salesPercentage,
  //   freeCallsPercentage,
  //   totalCallsPercentage,
  //   npsPercentage,
  //   appsConvertedPercentage
  // ) {
  //   dispatch({
  //     type: "OVERALL_SCORE",
  //     payload: salesPercentage,
  //     freeCallsPercentage,
  //     totalCallsPercentage,
  //     npsPercentage,
  //     appsConvertedPercentage,
  //   });
  // }

  return (
    <GlobalContext.Provider
      value={{
        sales: state.sales,
        freeCalls: state.freeCalls,
        totalCalls: state.totalCalls,
        nps: state.nps,
        appsConverted: state.appsConverted,
        employees: state.employees,
        addSale,
        freeCallsMade,
        totalCallsMade,
        npsMade,
        appsConvertedMade,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
