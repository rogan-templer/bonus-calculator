import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State

const initialState = {
  sales: [],
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

  function freeCallsMade() {
    dispatch({
      type: "FREE_CALLS_MADE",
      payload: ,
    });
  }

  function totalCallsMade() {
    dispatch({
      type: "TOTAL_CALLS_MADE",
      payload: ,
    });
  }
  function npsScore() {
    dispatch({
      type: "NPS_SCORE",
      payload: ,
    });
  }
  function appsConverted() {
    dispatch({
      type: "APPS_CONVERTED",
      payload: ,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        sales: state.sales,
        employees: state.employees,
        salesMade,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
