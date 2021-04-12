import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import globalAction from "../../redux/actions/globalAction";

const Home = () => {
  const dispatch = useDispatch();
  const globalData = useSelector((state) => state.global);

  useEffect(() => {
    dispatch(globalAction.fetchGlobalCases());
  }, []);

  const Card = styled.div`
  margin-top: 25px;
  @media (max-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  `;

  const CardChild = styled.div`
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    min-height: 100%;
    border-top: 4px solid rgb(33, 150, 243);
    border-radius: 4px;
    display: block;
    max-width: 100%;
    outline: none;
    text-decoration: none;
    transition-property: box-shadow,opacity,-webkit-box-shadow;
    overflow-wrap: break-word;
    position: relative;
    white-space: normal;
    transition: box-shadow .28s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);
    will-change: box-shadow;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
  `;

  const CardChild1 = styled.div`
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: .0125em;
    line-height: 2rem;
    word-break: break-all;
    padding: 16px;
  `;

  const CardSub1 = styled.div`
    margin-top: -16px;
    padding: 16px;
  `;

  const CardSub2 = styled.div`
    padding-bottom: 4px!important;
    line-height: 2rem;
    font-size: 1.75rem!important;
    font-weight: 400;
    letter-spacing: normal!important;
    width: 100%;
  `;

  const CardSub3 = styled.div`
    margin-top: 5px;
    color: #ff5252 !important;
    caret-color: #ff5252 !important;
  `;

  return (
    <>
      {globalData.loaded && (
        <div className="content-wrap">
          <div className="container mt-5">
            <div>
              <div className="text-center">
                <div className="display-2 font-weight-black text-uppercase" style={{ fontSize: "4rem", fontWeight: "900", lineHeight: "3.125rem" }}>
                  GLOBAL
              </div>
                <div className="title error--text mt-4" style={{ fontSize: "1.5rem", letterSpacing: "0.125rem" }}>
                  Affected countries: {globalData.affectedCountries}
                </div>
              </div>
              <div className="row mt-3 d-flex flex-wrap" style={{ marginTop: "12px", flexGrow: "1", flexShrink: "1", flexBasis: "auto", marginRight: "-12px", marginLeft: "-12px" }}>
                <Card className="col-sm-6 col-lg-3 col-12">
                  <CardChild className="card sheet theme-dark">
                    <CardChild1 className="card-title d-flex justify-space-between">
                      Total cases
                    </CardChild1>
                    <CardSub1 className="card-subtitle pb-2">
                      <CardSub2 className="text-headline pb-1">
                        {globalData.cases.toLocaleString()}
                      </CardSub2>
                      <CardSub3 className="v-card__subtitle pt-0">
                        <span className="error-text">
                          {globalData.casesPerM.toLocaleString()} per million
                         </span>
                      </CardSub3>
                    </CardSub1>
                  </CardChild>
                </Card>
                <Card className="col-sm-6 col-lg-3 col-12">
                  <CardChild className="card sheet theme-dark">
                    <CardChild1 className="card-title d-flex justify-space-between">
                      Active cases
                    </CardChild1>
                    <CardSub1 className="card-subtitle pb-2">
                      <CardSub2 className="text-headline pb-1">
                        {globalData.active.toLocaleString()}
                      </CardSub2>
                      <CardSub3 className="v-card__subtitle pt-0">
                        <span className="error-text">
                          {globalData.critical.toLocaleString()} in critical condition
                        </span>
                      </CardSub3>
                    </CardSub1>
                  </CardChild>
                </Card>
                <Card className="col-sm-6 col-lg-3 col-12">
                  <CardChild className="card sheet theme-dark">
                    <CardChild1 className="card-title d-flex justify-space-between">
                      Recovered
                    </CardChild1>
                    <CardSub1 className="card-subtitle pb-2">
                      <CardSub2 className="text-headline pb-1">
                        {globalData.recovered.toLocaleString()}
                      </CardSub2>
                      <CardSub3 className="v-card__subtitle pt-0">
                        <span className="error-text">
                          {Math.round(globalData.recovered / globalData.cases * 100)}% recovered                        </span>
                      </CardSub3>
                    </CardSub1>
                  </CardChild>
                </Card>
                <Card className="col-sm-6 col-lg-3 col-12">
                  <CardChild className="card sheet theme-dark">
                    <CardChild1 className="card-title d-flex justify-space-between">
                      Deaths
                    </CardChild1>
                    <CardSub1 className="card-subtitle pb-2">
                      <CardSub2 className="text-headline pb-1">
                        {globalData.deaths.toLocaleString()}                    </CardSub2>
                      <CardSub3 className="v-card__subtitle pt-0">
                        <span className="error-text">
                          {globalData.deathsPerM.toLocaleString()} per million                    </span>
                      </CardSub3>
                    </CardSub1>
                  </CardChild>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home;