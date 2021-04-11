import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import detailAction from "../../redux/actions/detailAction";

const DetailCountry = () => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // JSON.parse(localStorage.getItem('country'));
  }, []);

  // useEffect(() => {
  //   const countryState = JSON.stringify(detail);
  //   localStorage.setItem('country', countryState);
  // }, [detail]);


  return (
    <>
      <div className="container">
        <div className="col-sm">
          <img src={detail.flag} alt="flag" width="100" />
        </div>
        <div className="col-sm">
          <h1>{detail.country}</h1>
        </div>
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">Total Cases</h5>
            <p className="card-text">{detail.cases}</p>
          </div>
        </div>
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">Active Cases</h5>
            <p className="card-text">{detail.active}</p>
          </div>
        </div>
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">Recovered</h5>
            <p className="card-text">{detail.recovered}</p>
          </div>
        </div>
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">Deaths</h5>
            <p className="card-text">{detail.deaths}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailCountry;