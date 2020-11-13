import styled from "styled-components";

export const ButtonClear = styled.button`
  position: fixed;
  right: 10px;
  bottom: 10px;
  border: 1px solid #25692a;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Fredoka One', cursive;
  font-size: 15px;
  padding: 6px 15px;
  border-color: #46a7f5;
  background: linear-gradient(to bottom, #6ed9e7 5%, #9670f3 100%);
  text-shadow:0px 1px 0px #528009;
  box-shadow: inset 0px 1px 0px 0px #d7ecfd;
  color: #fff;
&:hover {
  background: linear-gradient(to bottom, #9670f3 5%, #6ed9e7 100%);
}
`;
export const DivMatch = styled.div`
  position: relative;
  height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  :hover {
    background: rgb(150, 112, 243, 0.1);
  }
`;
export const DivMatches = styled.div`
  margin: 1em 0.7em;
  overflow-y: auto;
  height: 480px;
`;

export const ImgMatch = styled.img`
  height: 100%;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const Message = styled.p`
  font-family: 'Fredoka One', cursive;
  font-size: 1.2em;
  text-align: center;
  margin: 9.5em auto;
  color: #9670f3;
`

export const Name = styled.p`
font-family: 'Roboto', sans-serif;
`;