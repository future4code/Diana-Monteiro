import styled from "styled-components";
import React from "react";

const Assignature = styled.a`
    text-decoration: none;
    color: white;
    display: flex;
    height: 6em;
    margin-top: 20px;
    padding-bottom: 10px;
    align-items: flex-end;
    justify-content: center;
    border: 1px solid white;
    border-right: none;
    border-left: none;
`

class Footer extends React.Component {
  render() {

    return (
      <footer>
          <Assignature href="https://github.com/DiaMont30" target="_blank">
            <small>
              <b>Copyright © Diana Monteiro 2020</b>
            </small>
          </Assignature>
      </footer>
    );
  }
}

export default Footer;
