import React from "react";

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const MostAffected = () => {
  const mostAffected = useSelector((state) => state.most);
  const globalData = useSelector((state) => state.global);

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

  const Avatar1 = styled.img`
  height: 30px;
  min-width: 30px;
  width: 30px;
  margin-bottom: 8px;
  margin-right: 10px
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
`;

  return (
    <>
      <div className="display-2 font-weight-black text-uppercase text-center" style={{ fontSize: "2rem", fontWeight: "900", lineHeight: "3.125rem" }}>
        MOST AFFECTED COUNTRIES
      </div>
      <div className="row mb-5 mt-3 d-flex flex-wrap" style={{ marginTop: "12px", flexGrow: "1", flexShrink: "1", flexBasis: "auto", marginRight: "-12px", marginLeft: "-12px" }}>
        {mostAffected.loaded && mostAffected.data.map((data, index) => {
          return <Card className="col-sm-6 col-lg-3 col-12" key={index}>
            <CardChild className="card sheet theme-dark">
              <CardChild1 className="card-title justify-space-between" style={{ fontSize: "1.5rem" }}>
                <div className="mb-1 d-flex justify-content-between">
                  {data.country}
                  <div className="avatar mb-1" >
                    <Avatar1 src={data.countryInfo.flag} />
                  </div>
                </div>
              </CardChild1>
              <CardSub1 className="card-subtitle pb-2">
                Cases
                      <CardSub2 className="text-headline pb-1">
                  {data.cases.toLocaleString()}
                </CardSub2>
                <CardSub3 className="v-card__subtitle pt-0">
                  <span className="error-text">
                    {Math.round(data.cases / globalData.cases * 100)}% of world total cases
                  </span>
                </CardSub3>
              </CardSub1>
            </CardChild>
          </Card>
        })}
      </div>
    </>
  );
};

export default MostAffected;
