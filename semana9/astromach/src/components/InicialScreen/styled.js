import styled from "styled-components";

export const Name = styled.p`
  font-family: 'Fredoka One', cursive;
  text-shadow:0px 1px 0px black;
  font-size: 1.7em;
`
export const P = styled.p`
  font-family: 'Fredoka One', cursive;
  font-size: 1.2em;
  text-align: center;
  margin: 9.5em auto;
`

export const Bio = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  text-shadow:0px 1px 0px black;
`

export const DivInicial = styled.div`
  display: flex;
  padding: 20px 20px 0px;
  flex-direction: column;
  justify-content: flex-end;
`;

export const DivButtom = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 20px;
`;

export const ImgPick = styled.img`
  width: 16%;
  cursor: pointer;
  &:hover{
    transform: scale(1.15);
    transition: all 0.2s ease 0s;
  }
`;

export const DivProfile = styled.div`
  position: relative;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgb(136,136,136);
  overflow: hidden;
  transition: all 0.5s ease 0s;
  height: 26.9em;
  /* animation: 0.5s ease 0s 1 normal forwards running none; */
  display: flex;
  align-items: center;
`;

export const DivBack = styled.div`
  background-image: url(${(props) => props.imgProfile});
  position: absolute;
  filter: blur(30px);
  height: 100%;
  width: 100%;
`;

export const ImgProfile = styled.img`
  width: 100%;
  display: block;
  z-index: 1;
`;

export const DivName = styled.div`
  height: 30%;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px 15px 20px 15px;
  z-index: 2;
`;