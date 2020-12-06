import styled from "styled-components"

export const ToTop = styled.button`
  position: fixed;
  right: 30px;
  bottom: 20px;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  border: none;
  font-size: 2em;
  z-index: 1;
  box-shadow: 5px 10px 10px grey;
  background-image: radial-gradient(circle at 50% -20.71%, #ade5ff 0, #7dcefb 25%, #3cb5f2 50%, #009ce9 75%, #0085e0 100%); 
  :hover {
    cursor: pointer;
    height: 65px;
    width: 65px;
  }
  :focus {
    border: none;
    outline: none;
  }
`;