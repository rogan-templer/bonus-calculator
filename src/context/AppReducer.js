export default (state, action) => {
  switch (action.type) {
    case "SALES_MADE":
      return {
        ...state,
        sales: [action.payload, ...state.sales],
      };
    case "FREE_CALLS_MADE":
      return {
        ...state,
        freeCalls: [action.payload, ...state.freeCalls],
      };
    case "TOTAL_CALLS_MADE":
      return {
        ...state,
        totalCalls: [action.payload, ...state.totalCalls],
      };
    default:
      return state;
  }
};
