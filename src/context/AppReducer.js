export default (state, action) => {
  switch (action.type) {
    case "SALES_MADE":
      return {
        ...state,
        kpis: [action.payload, ...state.kpis],
      };
    default:
      return state;
  }
};
