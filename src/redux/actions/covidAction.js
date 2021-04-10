import axios from "../../APIs/covid";
import React, { useEffect } from "react";

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



const covidAction = {
  fetchCountryList,
  fetchDetailCases,
};

export default covidAction;