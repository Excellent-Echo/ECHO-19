const initState = [];

const covidReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_COUNTRY":
      return action.payload.country;
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

export default covidReducer;