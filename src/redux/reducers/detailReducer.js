const initState = [];

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_DETAIL":
      return {
        country: action.payload.country,
        confirmed: action.payload.confirmed,
        deaths: action.payload.deaths,
        recovered: action.payload.recovered,
        updated: action.payload.updated,
        flag: '"../../assets/flags/' + action.payload.countryCode.toLowerCase() + '.svg"',
      }
    default:
      return state;
  }
}

export default detailReducer;