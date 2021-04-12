import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import covidAction from "../../redux/actions/covidAction";
import detailAction from "../../redux/actions/detailAction";

import DetailCountry from "./DetailCountry";
import { GlobalStyles } from "../../styles/globalStyle";
import globe from "../../assets/planet-earth.png";

const Search = () => {
  const covidData = useSelector((state) => state.covid);
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const history = useHistory();
  const [btnClicked, setBtnClicked] = useState(false);

  useEffect(() => {
    dispatch(covidAction.fetchCountryList());
    // const countryState = JSON.stringify(detail);
    // localStorage.setItem('country', countryState);
  }, []);

  const search = (e) => {
    e.preventDefault();
    setBtnClicked(true);
    dispatch(detailAction.fetchDetailCases());

    history.push("/detail");
  };

  return (
    <>
      <GlobalStyles />
      <div className="content-wrap">
        <div className="container mt-4">
          <div>
            <div className="text-center">
              <div className="display-3 font-weight-black">SEARCH</div>
            </div>
            <div>
              <form onSubmit={search}>
                {!btnClicked && (
                  <div className="mb-3 mt-5">
                    <input
                      list="country"
                      type="text"
                      className="input form-control input-keyword"
                      placeholder="Search country"
                    />
                    <datalist id="country">
                      {covidData &&
                        covidData.map((country, index) => {
                          return <option key={index} value={country} />;
                        })}
                    </datalist>
                  </div>
                )}
              </form>
            </div>
            <div className="text-center grey mt-5">
              <img
                src={globe}
                aria-hidden="true"
                class="v-icon notranslate fas fa-globe-americas theme--dark grey--text"
                alt="flag-image"
                style={{ width: "100px" }}
              />
              <div
                class="headline mt-6"
                style={{
                  marginTop: "24px",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                }}
              >
                Search for a country
              </div>
            </div>
          </div>
        </div>
      </div>
      {btnClicked && <DetailCountry />}
    </>
  );
};

export default Search;
