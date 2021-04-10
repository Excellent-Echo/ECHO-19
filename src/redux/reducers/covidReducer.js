const initState = {};

const covidReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_COUNTRY":
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