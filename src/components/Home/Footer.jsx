import React from "react";

import styled from "styled-components";

const Footer = () => {
  const Footer1 = styled.footer`
    background-color: #f5f5f5;
    color: rgba(0, 0, 0, 0.87);
    align-items: center;
    position: absolute;
    width: 100%;
  `;

  const Footer2 = styled.div`
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
