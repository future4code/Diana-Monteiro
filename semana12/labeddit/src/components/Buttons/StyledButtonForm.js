import styled from "styled-components";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)`
  z-index: 1;
  position: relative;
  font-family: "Varela Round", sans-serif;
  font-weight: bold;
  font-size: 1.2em;
  padding: 0.5em 2em;
  outline: none;
  border: 2px solid black;
  border-radius: 5px;
  background-image: linear-gradient(95deg, #ade5ff 0, #7dcefb 25%, #3cb5f2 50%, #009ce9 75%, #0085e0 100%);  
  margin: 30px 0 20px 0;

  ::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(265deg, #ade5ff 0, #7dcefb 25%, #3cb5f2 50%, #009ce9 75%, #0085e0 100%);
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }

  :hover {
    cursor: pointer;
  }

  :hover::before {
    transform-origin: center left;
    transform: scaleX(1);
  }

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
