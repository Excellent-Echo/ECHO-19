import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import detailAction from "../../redux/actions/detailAction";

const DetailCountry = () => {
  let detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(detailAction.fetchDetailCases());
    detail.loaded = true;
  }, []);

  return (
    <>
      {detail.loaded && (
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
              <p className="card-text">{detail.cases.toLocaleString()}</p>
              <p className="card-text">{detail.casesPerM.toLocaleString()} per million</p>
            </div>
          </div>
          <div className="card w-50">
            <div className="card-body">
              <h5 className="card-title">Active Cases</h5>
              <p className="card-text">{detail.active.toLocaleString()}</p>
              <p className="card-text">{detail.critical.toLocaleString()} in critical condition</p>
            </div>
          </div>
          <div className="card w-50">
            <div className="card-body">
              <h5 className="card-title">Recovered</h5>
              <p className="card-text">{detail.recovered.toLocaleString()}</p>
              <p className="card-text">{Math.round(detail.recovered / detail.cases * 100)}% recovered</p>
            </div>
          </div>
          <div className="card w-50">
            <div className="card-body">
              <h5 className="card-title">Deaths</h5>
              <p className="card-text">{detail.deaths.toLocaleString()}</p>
              <p className="card-text">{detail.deathsPerM.toLocaleString()} per million</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DetailCountry;