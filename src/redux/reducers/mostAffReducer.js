const initState = [];

const mostAffReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_MOST_CASES":
      return {
        loaded: true,
        data: action.payload.list,
      }
    default:
      return state;
  }
}

export default mostAffReducer;