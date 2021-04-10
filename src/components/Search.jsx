import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import covidAction from "../redux/actions/covidAction";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const Search = () => {
  const covidData = useSelector((state) => state.covid);
  const dispatch = useDispatch();
  const [btnClicked, setBtnClicked] = useState(false);

  useEffect(() => {
    dispatch(covidAction.setCountry())
  }, []);

  const search = (e) => {
    e.preventDefault();
    dispatch(covidAction.setCountry())
    setBtnClicked(true);
  }

  return (
    <>
      <form>
        <div className="mb-3 mt-5">
          <input type="text" className="form-control input-keyword" />
        </div>
        <button onClick={search}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      {btnClicked && (
        <div className="container">
          <div className="col-sm">
            <img src={covidData.flag} alt="flags" width="36" />
          </div>
          <div className="col-sm">
            <h1>{covidData.country}</h1>
          </div>
          <div className="card w-50">
            <div className="card-body">
              <h5 className="card-title">Total Cases</h5>
              <p className="card-text">{covidData.confirmed}</p>
            </div>
          </div>
          <div className="card w-50">
            <div className="card-body">
              <h5 className="card-title">Active Cases</h5>
              <p className="card-text">{covidData.confirmed - covidData.recovered - covidData.deaths}</p>
            </div>
          </div>
          <div className="card w-50">
            <div className="card-body">
              <h5 className="card-title">Recovered</h5>
              <p className="card-text">{covidData.recovered}</p>
            </div>
          </div>
          <div className="card w-50">
            <div className="card-body">
              <h5 className="card-title">Deaths</h5>
              <p className="card-text">{covidData.deaths}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Search;