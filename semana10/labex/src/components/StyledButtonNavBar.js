import styled from "styled-components";

export const StyledButtonNavBar = styled.button`
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  font-family: 'Bebas Neue', cursive;
  font-size: 1.5em;
  padding: 0.2em 1.1em;
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  margin: 0 20px;
  transition: color 0.4s ease-in-out;

::before {
  content: '';
  z-index: -1;
  position: absolute;
  bottom: 100%;
  left: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border-radius: 3px;
  background-color: #75b8c8;
  transform-origin: center;
  transform: translate3d(-50%, 50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

:hover {
  cursor: pointer;
  color: whitesmoke;
}

:hover::before {
  transform: translate3d(-50%, 50%, 0) scale3d(15, 15, 15);
}

:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 
`