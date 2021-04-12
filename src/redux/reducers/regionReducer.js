const initState = [];

const regionReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_REGION":
      return {
        loaded: true,
        continents: action.payload.continents,
      }
    default:
      return state;
  }
}

export default regionReducer;