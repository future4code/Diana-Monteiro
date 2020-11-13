import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const animation = keyframes`
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }

`

const DivLoader = styled.div`
  margin: 12em auto;
  transform: rotate(45deg);
`

const Heart = styled.div`
  margin: 0 auto;
  width: 26px;
  height: 26px;
  background: #6ED9E7;
  animation: ${props => { 
    if (!props.loaded){return css`${animation} 1.2s`}
  }};
  
  ::before {
    left: -17px;
    border-radius: 50% 0 0 50%;
  }
  
  ::after {
    top: -17px;
    border-radius: 50% 50% 0 0;
  }
  
  :after, :before {
    content: " ";
    position: absolute;
    display: block;
    width: 26px;
    height: 26px;
    background:#6ED9E7;
  }
`

const Loader = () => (
  <DivLoader>
    <Heart/>
  </DivLoader>
)

export default Loader