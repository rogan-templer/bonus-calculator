export default (state, action) => {
  switch(action.type) {
    case 'SALES_PERCENTAGE':
      return {
        ...state,
        rewards: [...state.rewards]
      },
    default:
      return state;
  }
}