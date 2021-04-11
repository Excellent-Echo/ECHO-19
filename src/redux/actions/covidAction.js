import axios from "../../APIs/covid";

const fetchCountryList = () => async (dispatch) => {
  try {
    const countryList = await axios({
      method: "GET",
      url: `/cases`,
    });
    
    dispatch({
      type: "SEARCH_COUNTRY",
      payload: {
        country: Object.keys(countryList.data),
      }
    });
    
  } catch (error) {
    console.log(error);
  }
};

const covidAction = {
  fetchCountryList,
};

export default covidAction;