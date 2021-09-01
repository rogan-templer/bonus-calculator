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
    case "NPS_MADE":
      return {
        ...state,
        nps: [action.payload, ...state.nps],
      };
    case "APPS_CONVERTED_MADE":
      return {
        ...state,
        appsConverted: [action.payload, ...state.appsConverted],
      };
    case "OVERALL_SCORE":
      return {
        ...state,
        salesPercentage: [action.payload, ...state.salesPercentage],
        freeCallsPercentage: [action.payload, ...state.freeCallsPercentage],
        totalCallsPercentage: [action.payload, ...state.totalCallsPercentage],
        npsPercentage: [action.payload, ...state.npsPercentage],
        appsConvertedPercentage: [
          action.payload,
          ...state.appsConvertedPercentage,
        ],
      };
    default:
      return state;
  }
};
