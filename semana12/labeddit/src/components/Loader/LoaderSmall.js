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
  width: 1.5em;
  height: 1.5em;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`

const LoaderSmall = () => {
  return (
    <Loading></Loading>
  );
};

export default LoaderSmall;