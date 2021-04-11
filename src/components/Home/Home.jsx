import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import globalAction from "../../redux/actions/globalAction";

const Home = () => {
  const dispatch = useDispatch();
  const globalData = useSelector((state) => state.global);
  const regionData = useSelector((state) => state.region);

  useEffect(() => {
    dispatch(globalAction.fetchGlobalCases());
  }, []);

  return (
    <>
      {globalData.loaded && (
        <div className="container">
          <div className="col-sm">
            <h1>GLOBAL</h1>
            <h2>Affected countries: {globalData.affectedCountries}</h2>
          </div>
          <div className="col-sm col-lg-3 col-12">
            <div className="card w-50">
              <div className="card-body">
                <h5 className="card-title">Total Cases</h5>
                <p className="card-text">{globalData.cases.toLocaleString()}</p>
                <p>{globalData.casesPerM.toLocaleString()} per million</p>
              </div>
            </div>
          </div>
          <div className="col-sm col-lg-3 col-12">
            <div className="card w-50">
              <div className="card-body">
                <h5 className="card-title">Active Cases</h5>
                <p className="card-text">{globalData.active.toLocaleString()}</p>
                <p>{globalData.critical.toLocaleString()} in critical condition</p>
              </div>
            </div>
          </div>
          <div className="col-sm col-lg-3 col-12">
            <div className="card w-50">
              <div className="card-body">
                <h5 className="card-title">Recovered</h5>
                <p className="card-text">{globalData.recovered.toLocaleString()}</p>
                <p>{Math.round(globalData.recovered / globalData.cases * 100)}% recovered</p>
              </div>
            </div>
          </div>
          <div className="col-sm col-lg-3 col-12">
            <div className="card w-50">
              <div className="card-body">
                <h5 className="card-title">Deaths</h5>
                <p className="card-text">{globalData.deaths.toLocaleString()}</p>
                <p>{globalData.deathsPerM.toLocaleString()} per million</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home;