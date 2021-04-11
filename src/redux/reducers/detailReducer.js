const initState = [];

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_DETAIL":
      return {
        loaded: true,
        country: action.payload.country,
        cases: action.payload.cases,
        casesPerM: action.payload.casesPerM,
        active: action.payload.active,
        critical: action.payload.critical,
        deaths: action.payload.deaths,
        deathsPerM: action.payload.deathsPerM,
        recovered: action.payload.recovered,
        updated: action.payload.updated,
        flag: action.payload.flag,
        code: action.payload.code,
        population: action.payload.population,
      }
    default:
      return state;
  }
}

export default detailReducer;