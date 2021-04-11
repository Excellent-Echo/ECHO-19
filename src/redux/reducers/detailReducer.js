const initState = [];

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_DETAIL":
      return {
        country: action.payload.country,
        cases: action.payload.cases,
        active: action.payload.active,
        deaths: action.payload.deaths,
        recovered: action.payload.recovered,
        updated: action.payload.updated,
        flag: action.payload.flag,
      }
    default:
      return state;
  }
}

export default detailReducer;