import axios from "../../APIs/covid";
import React, { useEffect } from "react";


const setCountry = () => async (dispatch) => {
  const inputKeyword = document.querySelector('.input-keyword');

  try {
    const covidData = await axios({
      method: "GET",
      url: `/cases?country=` + inputKeyword.value,
    });
    
    dispatch({
      type: "SET_COUNTRY",
      payload: {
        country: covidData.data.All.country,
        confirmed: covidData.data.All.confirmed,
        deaths: covidData.data.All.deaths,
        recovered: covidData.data.All.recovered,
        updated: covidData.data.All.updated,
        countryCode: covidData.data.All.abbreviation,
      }
    });

  } catch (error) {
    console.log(error);
  }
};



const covidAction = {
  setCountry,
};

export default covidAction;