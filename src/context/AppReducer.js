export default (state, action) => {
  switch (action.type) {
    case "SALES_MADE":
      return {
        ...state,
        sales: [action.payload, ...state.sales],
      };
    default:
      return state;
  }
};
