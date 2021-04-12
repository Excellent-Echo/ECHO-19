import axios from "../../APIs/covid";

const fetchMostAffected = () => async (dispatch) => {
  try {
    const mostCases = await axios({
      method: "GET",
      url: `/countries?sort=cases`,
    });

    dispatch({
      type: "SHOW_MOST_CASES",
      payload: {
        loaded: false,
        list: mostCases.data.splice(0, 4),
      }
    });

  } catch (error) {
    console.log(error);
  }
};

const mostAffAction = {
  fetchMostAffected,
};

export default mostAffAction;