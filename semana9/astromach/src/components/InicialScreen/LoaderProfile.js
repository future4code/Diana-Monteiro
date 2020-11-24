import React from "react";
import styled, { keyframes, css } from "styled-components";

const animation = keyframes`
  to { transform: scale(1.3); }
`;

const DivLoader = styled.div`
  margin: 10em auto;
`;

const Heart = styled.div`
  font-size: 70px;
  color: #6ed9e7;
  transform-origin: center;
  animation: ${(props) => {
    if (!props.loaded) {
      return css`
        ${animation} 0.35s infinite alternate `;
    }
  }};

`;

const LoaderProfile = () => (
  <DivLoader>
    <Heart>&#x2665;</Heart>
  </DivLoader>
);

export default LoaderProfile;
