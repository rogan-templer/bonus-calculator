import React, { createContext } from "react";

//Initial State

const reward = [
  {
  sales: 100,
  freeCalls: 55,
  totalCalls: 1815,
  npsTotal: 100,
  appsConvertedTotal: 100,
}
];

// Create context
export const GlobalContext = createContext(reward);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, reward);