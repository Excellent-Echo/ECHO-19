const initState = [];

const globalReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_GLOBAL":
      return {
        loaded: true,
        affectedCountries: action.payload.affectedCountries,
        cases: action.payload.cases,
        casesPerM: action.payload.casesPerM,
        active: action.payload.active,
        critical: action.payload.critical,
        recovered: action.payload.recovered,
        deaths: action.payload.deaths,
        deathsPerM: action.payload.deathsPerM,
        updated: action.payload.updated,
      }
    default:
      return state;
  }
}

export default globalReducer;