const initState = [];

const covidReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_COUNTRY":
      return action.payload.list;
    default:
      return state;
  }
}

export default covidReducer;