import React from "react";

import styled from "styled-components";

const Footer = () => {
  const Footer1 = styled.footer`
    background-color: #f5f5f5;
    color: rgba(0, 0, 0, 0.87);
    align-items: center;
    display: flex;
    flex-grow: 0 !important;
    flex-shrink: 1 !important;
    flex-basis: auto !important;
    flex-wrap: wrap;
    position: absolute;
    width: 100%;
    bottom: 0;
  `;

  const Footer2 = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    padding: 12px;
  `;

  return (
    <>
      <Footer1
        className="footer font-weight-medium"
        data-booted="true"
        style={{ fontWeight: "500" }}
      >
        <Footer2 className="text-center col col-12">
          2021 - &nbsp;
          <strong>
            Developed by &nbsp;
            <a href="https://github.com/Excellent-Echo/ECHO-19">Echo-19</a>
          </strong>
        </Footer2>
      </Footer1>
    </>
  );
};

export default Footer;
