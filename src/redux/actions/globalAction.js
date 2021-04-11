import axios from "../../APIs/covid";

const fetchGlobalCases = () => async (dispatch) => {
  try {
    const globalCases = await axios({
      method: "GET",
      url: `/All`,
    });

    dispatch({
      type: "SHOW_GLOBAL",
      payload: {
        loaded: false,
        affectedCountries: globalCases.data.affectedCountries,
        cases: globalCases.data.cases,
        casesPerM: globalCases.data.casesPerOneMillion,
        active: globalCases.data.active,
        critical: globalCases.data.critical,
        recovered: globalCases.data.recovered,
        deaths: globalCases.data.deaths,
        deathsPerM: globalCases.data.deathsPerOneMillion,
        updated: globalCases.data.updated,
      }
    });

  } catch (error) {
    console.log(error);
  }
};

const globalAction = {
  fetchGlobalCases,
};

export default globalAction;