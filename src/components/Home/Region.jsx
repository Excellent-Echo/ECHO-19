import React from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Region = () => {
  const regionData = useSelector((state) => state.region);

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
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: .0125em;
    line-height: 2rem;
    word-break: break-all;
    padding: 16px;
    @media (max-width: 480px) {
      font-size: 1.25rem;
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
      <div className="display-2 font-weight-black text-uppercase text-center" style={{ fontSize: "2rem", fontWeight: "900", lineHeight: "3.125rem" }}>
        REGIONS
      </div>
      <div className="row mt-3 d-flex flex-wrap" style={{ marginTop: "12px", flexGrow: "1", flexShrink: "1", flexBasis: "auto", marginRight: "-12px", marginLeft: "-12px" }}>
        {regionData.loaded && regionData.continents.map((data, index) => {
          return <Card className="col-sm-6 col-lg-3 col-12" key={index}>
            <CardChild className="card sheet theme-dark">
              <CardChild1 className="card-title" style={{textAlign: "center" }}>
                {data.continent}
              </CardChild1>
              <CardSub1 className="card-subtitle pb-2">
                Cases
                <CardSub2 className="text-headline pb-1">
                  <CountUp
                    start={0}
                    end={data.cases}
                    duration={2}
                    separator=","
                  />
                </CardSub2>
                <CardSub3 className="v-card__subtitle pt-0">
                  <span className="error-text">
                    <CountUp
                      start={0}
                      end={data.active}
                      duration={2}
                      separator=","
                    /> active&nbsp;-&nbsp;
                  </span>
                  <span>
                    <CountUp
                      start={0}
                      end={data.critical}
                      duration={2}
                      separator=","
                    /> critical
                  </span>
                </CardSub3>
              </CardSub1>
            </CardChild>
          </Card>
        })}
      </div>
    </>
  )
}

export default Region;