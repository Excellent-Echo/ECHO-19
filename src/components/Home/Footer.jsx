import React from "react";

import styled from "styled-components";

// import { Container, Navbar } from 'react-bootstrap'

const Footer = () => {

  const Footer1 = styled.footer`
    background-color: #f5f5f5;
    color: rgba(0,0,0,.87);
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
      <div className="container-fluid fixed-bottom" style={{ backgroundColor: "#343a40", padding: "10px", textAlign: "center" }}>
          2021 - &nbsp;
          <strong>
            Developed by &nbsp;
            <a href="https://github.com/Excellent-Echo/ECHO-19">Echo-19</a>
          </strong>
      </div>
    </>
  )
}
export default Footer;