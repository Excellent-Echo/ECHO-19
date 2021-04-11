import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import covidAction from "../../redux/actions/covidAction";
import detailAction from "../../redux/actions/detailAction";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import DetailCountry from "./DetailCountry";

const Search = () => {
  const covidData = useSelector((state) => state.covid);
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const history = useHistory();
  const [btnClicked, setBtnClicked] = useState(false);

  useEffect(() => {
    dispatch(covidAction.fetchCountryList());
    // const countryState = JSON.stringify(detail);
    // localStorage.setItem('country', countryState);
  }, []);

  const search = (e) => {
    e.preventDefault();
    setBtnClicked(true);
    history.push("/detail");
    dispatch(detailAction.fetchDetailCases());
  }

  return (
    <>
      <form onSubmit={search}>
        {!btnClicked && (
          <div className="mb-3 mt-5">
            <input list="country" type="text" className="form-control input-keyword" />
            <datalist id="country">
              {covidData && covidData.map((country, index) => {
                return <option key={index} value={country} />
              })}
            </datalist>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        )}
      </form>
      {btnClicked && (
        <DetailCountry />
      )}
    </>
  )
}

export default Search;