import axios from "../../APIs/covid";

const fetchDetailCases = () => async (dispatch) => {
  const inputKeyword = document.querySelector('.input-keyword');
  const countryName = inputKeyword.value;

  try {
    const detailCases = await axios({
      method: "GET",
      url: `/countries`,
    });

    let detailCountry = detailCases.data.find(id => id.country === countryName);

    dispatch({
      type: "SHOW_DETAIL",
      payload: {
        loaded: false,
        country: detailCountry.country,
        cases: detailCountry.cases,
        casesPerM: detailCountry.casesPerOneMillion,
        active: detailCountry.active,
        critical: detailCountry.critical,
        deaths: detailCountry.deaths,
        deathsPerM: detailCountry.deathsPerOneMillion,
        recovered: detailCountry.recovered,
        updated: detailCountry.updated,
        flag: detailCountry.countryInfo.flag,
        code: detailCountry.countryInfo.iso2,
      }
    });

    let detailArray = localStorage.getItem('country')
      ? JSON.parse(localStorage.getItem('country'))
      : []

    localStorage.setItem('country', JSON.stringify(detailArray))
    const detail = JSON.parse(localStorage.getItem('country'))

    detailArray.push({ country: detailCountry.country, code: detailCountry.countryInfo.iso2 })
    localStorage.setItem('country', JSON.stringify(detailArray))

  } catch (error) {
    console.log(error);
  }
};

const detailAction = {
  fetchDetailCases,
};

export default detailAction;