import styled from "styled-components"
import {Form} from "react-bootstrap"

export const DivSignup = styled.div`
    display: flex;
    justify-content: center;
    background: white;
    padding: 3em;
    font-family: 'Varela Round', sans-serif;
    @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
        padding: 2em 10px;
    }
`
export const Title = styled.h1`
    font-weight: bold; 
    text-align: center;
    margin: 40px 0;
`
export const FormSignup = styled(Form)`
  border: 2px solid black;
  font-weight: bold; 
  background-image: radial-gradient(circle at 50% -20.71%, #ade5ff 0, #7dcefb 25%, #3cb5f2 50%, #009ce9 75%, #0085e0 100%);
  border-radius: 5px;
  height: 34em;
  padding: 0 40px;
`
export const Text = styled.p`
    font-weight: bold; 
    text-align: center;
    padding-top: 15px;
    :hover {
        cursor: pointer;
        color: #03045e;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
        display: none;
  }

`