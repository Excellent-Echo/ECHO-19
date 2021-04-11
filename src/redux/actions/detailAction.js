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
        country: detailCountry.country,
        cases: detailCountry.cases,
        active: detailCountry.active,
        deaths: detailCountry.deaths,
        recovered: detailCountry.recovered,
        updated: detailCountry.updated,
        flag: detailCountry.countryInfo.flag,
      }
    });

  } catch (error) {
    console.log(error);
  }
};

const detailAction = {
  fetchDetailCases,
};

export default detailAction;