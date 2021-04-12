import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import covidAction from "../../redux/actions/covidAction";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import globalAction from "../../redux/actions/globalAction";

const MostAffected = () => {
  const dispatch = useDispatch();
  const globalData = useSelector((state) => state.global);

  useEffect(() => {
    dispatch(globalAction.fetchGlobalCases());
  }, []);

  return (
    <>
      <div className="container">
        <div className="col-sm">
          <h2>REGIONS</h2>
        </div>
      </div>
    </>
  );
};

export default MostAffected;
