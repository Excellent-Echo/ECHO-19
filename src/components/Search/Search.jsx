import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import covidAction from "../../redux/actions/covidAction";
import styled from "styled-components";

import DetailCountry from "./DetailCountry";
import { GlobalStyles } from "../../styles/globalStyle";
import globe from "../../assets/planet-earth.png";

const Search = () => {
  const covidData = useSelector((state) => state.covid);
  const dispatch = useDispatch();
  const [btnClicked, setBtnClicked] = useState(false);
  const [searchCountries, setSearchCountries] = useState("");

  useEffect(() => {
    dispatch(covidAction.fetchCountryList());
  }, []);

  const filterCountry = covidData.filter(item => {
    return searchCountries !== ""
      ? item.country.includes(searchCountries)
      : "";
  });

  const search = (e) => {
    setSearchCountries(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  };

  const Card = styled.div`
  margin-top: 25px;
  @media (max-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
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
      <GlobalStyles />
      <div className="content-wrap">
        <div className="container mt-5">
          <div>
            <div className="text-center">
              <div className="display-3 font-weight-black">
                SEARCH
              </div>
            </div>
            <div>
              <form>
                {!btnClicked && (
                  <div className="container mb-3 mt-5">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <div className="input-group">
                          <input onChange={search} list="country" type="text" className="input form-control form-control-lg keyword" placeholder="Search country" />
                          <button type="submit" className="btn btn-primary btn-lg">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
            {searchCountries === "" && (
              <div className="text-center grey mt-5">
                <img src={globe} aria-hidden="true" className="v-icon notranslate fas fa-globe-americas theme--dark grey--text" style={{ width: "100px" }} alt="Flag Country" />
                <div className="headline mt-6" style={{ marginTop: "24px", fontSize: "1.5rem", fontWeight: "400" }}>Search for a country</div>
              </div>
            )}
            <div className="row mb-5 mt-3 d-flex flex-wrap" style={{ marginTop: "12px", flexGrow: "1", flexShrink: "1", flexBasis: "auto", marginRight: "-12px", marginLeft: "-12px" }}>
              {filterCountry && filterCountry.map((list, index) => {
                return <Card className="col-sm-6 col-lg-3 col-12 mb-5" key={index}>
                  <Link to={`/detail/${list.countryInfo.iso2}`}>
                  <CardChild className="card sheet theme-dark">
                    <CardChild1 className="card-title justify-space-between" style={{ fontSize: "1.5rem" }}>
                      <div className="mb-1 d-flex justify-content-between">
                        {list.country}
                        <div className="avatar mb-1" >
                          <Avatar1 src={list.countryInfo.flag} />
                        </div>
                      </div>
                    </CardChild1>
                    <CardSub1 className="card-subtitle pb-2">
                      Cases
                    <CardSub2 className="text-headline pb-1">
                        {list.cases.toLocaleString()}
                      </CardSub2>
                    </CardSub1>
                  </CardChild>
                  </Link>
                </Card>
              })}
            </div>
          </div>
        </div>
      </div>
      {btnClicked && (
        <DetailCountry />
      )}
    </>
  )
}

export default Search;