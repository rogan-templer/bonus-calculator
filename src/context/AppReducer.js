export default (state, action) => {
  switch (action.type) {
    case "ADD_KPI":
      return {
        ...state,
        kpis: [action.payload, ...state.kpis],
      };
    default:
      return state;
  }
};
