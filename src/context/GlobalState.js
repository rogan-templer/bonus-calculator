import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State

const initialState = {
  sales: [],
  freeCalls: [],
  totalCalls: [],
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
  function salesMade(sales) {
    dispatch({
      type: "SALES_MADE",
      payload: sales,
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

  // function npsScore() {
  //   dispatch({
  //     type: "NPS_SCORE",
  //     payload: ,
  //   });
  // }
  // function appsConverted() {
  //   dispatch({
  //     type: "APPS_CONVERTED",
  //     payload: ,
  //   });
  // }

  return (
    <GlobalContext.Provider
      value={{
        sales: state.sales,
        freeCalls: state.freeCalls,
        totalCalls: state.totalCalls,
        employees: state.employees,
        salesMade,
        freeCallsMade,
        totalCallsMade,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
