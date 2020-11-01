import styled from "styled-components";
import React from "react";

const Assignature = styled.a`
    text-decoration: none;
    color: #fb810e;
    display: flex;
    height: 2.8em;
    font-family: "Lobster", cursive;
    padding-bottom: 20px;
    align-items: flex-end;
    justify-content: center;
    border: 4px double #fb810e;
    border-right: none;
    border-left: none;
    border-bottom: none;
    background-color: black;
    @media (min-device-width: 320px) and (max-device-width: 420px) {
    font-size: 20px;
  }
`

class Footer extends React.Component {
  render() {

    return (
      <footer>
          <Assignature href="https://github.com/DiaMont30" target="_blank">
             Copyright © Diana Monteiro 2020
          </Assignature>
      </footer>
    );
  }
}

export default Footer;
