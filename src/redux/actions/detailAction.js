import axios from "../../APIs/covid";

const fetchDetailCases = () => async (dispatch) => {
  const inputKeyword = document.querySelector('.input-keyword');
  
  try {
    const detailCases = await axios({
      method: "GET",
      url: `/cases?country=` + inputKeyword.value,
    });
    
    dispatch({
      type: "SHOW_DETAIL",
      payload: {
        country: detailCases.data.All.country,
        confirmed: detailCases.data.All.confirmed,
        deaths: detailCases.data.All.deaths,
        recovered: detailCases.data.All.recovered,
        updated: detailCases.data.All.updated,
        countryCode: detailCases.data.All.abbreviation,
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