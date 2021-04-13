import axios from "../../APIs/covid";

const fetchRegionCases = () => async (dispatch) => {
  try {
    const regionCases = await axios({
      method: "GET",
      url: `/continents`,
    });

    dispatch({
      type: "SHOW_REGION",
      payload: {
        loaded: false,
        continents: regionCases.data,
      }
    });

  } catch (error) {
    console.log(error);
  }
};

const regionAction = {
  fetchRegionCases,
};

export default regionAction;