import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyles } from "../../styles/globalStyle";
import detailAction from "../../redux/actions/detailAction";
import services from "./services";

const DetailCountry = () => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { countryCode } = useParams();

  useEffect(() => {
    if (countryCode && countryCode !== "") {
      dispatch(detailAction.fetchDetailCases(countryCode));
    }

    services.saveSearched(countryCode);

    return () => {
      dispatch(detailAction.removeDetailCases());
    }
  }, [countryCode]);

  function minutes() {
    let diff = Math.abs(new Date(detail.updated) - new Date());
    const minutes = Math.floor(diff / 1000 / 60);
    return minutes;
  }

  const Avatar = styled.div`
    height: 70px;
    min-width: 70px;
    width: 70px;
    margin-bottom: 8px;
    margin-right: 4px
    align-items: center;
    border-radius: 50%;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
  `;

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
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  `;

  const CardSub1 = styled.div`
  margin-top: -16px;
  padding: 16px;
  `;

  const CardSub2 = styled.div`
    padding-bottom: 4px!important;
    line-height: 2rem;
    font-size: 1.75rem;
    font-weight: 400;
    letter-spacing: normal!important;
    width: 100%;
    @media (max-width: 480px) {
      font-size: 1.25rem;
    }
  `;

  const CardSub3 = styled.div`
    margin-top: 5px;
    color: #ff5252 !important;
    caret-color: #ff5252 !important;
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  `;

  return (
    <>
      <GlobalStyles />
      {Object.keys(detail).length === 0 ? (
        <div className="d-flex justify-content-center" style={{ marginTop: "200px" }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>) : (
        <div className="content-wrap">
          <div className="container mt-5">
            <div>
              <div className="text-center">
                <div className="display-2 font-weight-black text-uppercase" style={{ fontSize: "4rem", fontWeight: "900", lineHeight: "3.125rem" }}>
                  <Avatar className="avatar mb-2 mr-4">
                    <img src={detail.flag} alt="flag" />
                  </Avatar>
                  {detail.country}
                </div>
                <div className="title grey--text font-weight-bold text-uppercase mt-4 mb-4" style={{ fontSize: "2rem" }}>
                  POPULATION:&nbsp;
                  <CountUp
                    start={0}
                    end={detail.population}
                    duration={2}
                    separator=","
                  />
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
                        <CountUp
                          start={0}
                          end={detail.cases}
                          duration={2}
                          separator=","
                        />
                      </CardSub2>
                      <CardSub3 className="v-card__subtitle pt-0">
                        <span className="error-text">
                          <CountUp
                            start={0}
                            end={detail.casesPerM}
                            duration={2}
                            separator=","
                          /> per million
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
                        <CountUp
                          start={0}
                          end={detail.active}
                          duration={2}
                          separator=","
                        />
                      </CardSub2>
                      <CardSub3 className="v-card__subtitle pt-0">
                        <span className="error-text">
                          <CountUp
                            start={0}
                            end={detail.critical}
                            duration={2}
                            separator=","
                          /> in critical condition
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
                        <CountUp
                          start={0}
                          end={detail.recovered}
                          duration={2}
                          separator=","
                        />
                      </CardSub2>
                      <CardSub3 className="v-card__subtitle pt-0">
                        <span className="error-text">
                          <CountUp
                            start={0}
                            end={Math.round(detail.recovered / detail.cases * 100)}
                            duration={2}
                            separator=","
                          />% recovered
                          </span>
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
                        <CountUp
                          start={0}
                          end={detail.deaths}
                          duration={2}
                          separator=","
                        />
                      </CardSub2>
                      <CardSub3 className="v-card__subtitle pt-0">
                        <span className="error-text">
                          <CountUp
                            start={0}
                            end={detail.deathsPerM}
                            duration={2}
                            separator=","
                          /> per million
                        </span>
                      </CardSub3>
                    </CardSub1>
                  </CardChild>
                </Card>
              </div>
            </div>
            <div className="text-center mt-4 mb-8" style={{ marginBottom: "32px", marginTop: "16px", }}>
              <div className="primary-text mb-1" style={{ color: "#2196f3", caretColor: "#2196f3", marginBottom: "4px", fontSize: "20px" }}>
                Last updated {minutes()} minutes ago
                  <div style={{ color: "#9e9e9e" }}>
                  {new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'full' }).format(detail.updated)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DetailCountry;