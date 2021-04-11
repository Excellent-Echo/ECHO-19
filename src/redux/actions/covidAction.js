import axios from "../../APIs/covid";

const fetchCountryList = () => async (dispatch) => {
  try {
    const countryList = await axios({
      method: "GET",
      url: `/countries`,
    });

    dispatch({
      type: "SEARCH_COUNTRY",
      payload: {
        list: countryList.data.map(({ country }) => country),
      }
    });
    console.log(countryList.data)

    const countryState = JSON.stringify(countryList.data);
    localStorage.setItem('country', countryState);

  } catch (error) {
    console.log(error);
  }
};

const covidAction = {
  fetchCountryList,
};

export default covidAction;