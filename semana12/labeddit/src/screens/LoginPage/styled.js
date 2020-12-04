import styled from "styled-components";
import { Form } from "react-bootstrap";

export const DivLogin = styled.div`
    display: flex;
    justify-content: center;
    background: white;
    padding-bottom: 2.25em;
    align-items: center;
    font-family: 'Varela Round', sans-serif;
`;
export const Title = styled.h1`
  font-weight: bold;
  margin: 40px 0;
`;
export const FormLogin = styled(Form)`
  border: 2px solid black;
  border-radius: 5px;
  padding: 0 40px;
  height: 23.5em;
  background-image: radial-gradient(circle at 50% -20.71%, #ade5ff 0, #7dcefb 25%, #3cb5f2 50%, #009ce9 75%, #0085e0 100%);
`;
export const Text = styled.small`
  font-weight: bold;
  :hover {
    cursor: pointer;
    color: #03045e;
  }
`;

