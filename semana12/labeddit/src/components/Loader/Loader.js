import React from "react";
import styled, {keyframes} from "styled-components"

const spin = keyframes`
    to {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #3cefff;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: ${spin} 1s linear infinite;
  margin: 5em auto;
`

const Loader = () => {
  return (
    <Loading></Loading>
  );
};

export default Loader;
