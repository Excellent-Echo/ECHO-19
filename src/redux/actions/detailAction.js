import axios from "../../APIs/covid";

const fetchDetailCases = (code) => async (dispatch) => {
  try {
    const detailCases = await axios({
      method: "GET",
      url: `/countries/${code}`,
    });

    dispatch({
      type: "SHOW_DETAIL",
      payload: {
        loaded: false,
        country: detailCases.data.country,
        cases: detailCases.data.cases,
        casesPerM: detailCases.data.casesPerOneMillion,
        active: detailCases.data.active,
        critical: detailCases.data.critical,
        deaths: detailCases.data.deaths,
        deathsPerM: detailCases.data.deathsPerOneMillion,
        recovered: detailCases.data.recovered,
        updated: detailCases.data.updated,
        flag: detailCases.data.countryInfo.flag,
        code: detailCases.data.countryInfo.iso2,
        population: detailCases.data.population,
      }
    });

  } catch (error) {
    console.log(error);
  }
};

const removeDetailCases = () => {
  return {
    type: "REMOVE_DETAIL",
  }
};

const detailAction = {
  fetchDetailCases,
  removeDetailCases,
};

export default detailAction;