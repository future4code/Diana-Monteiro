import heart from "../img/heart.svg";
import styled from "styled-components";
import remove from "../img/remover.svg";

const Img = styled.img`
  width: 15%;
`;

const ImgProfile = styled.img`
  width: 100%;
  display: block;
`

const DivName = styled.div`
  height: 30%;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  color: white;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 15px;
  z-index: 2;
`

const DivProfile = styled.div`
  display: inline-block;
  position: relative;
`

const DivInicial = styled.div`
  display: flex;
  padding: 20px 20px 0px;
  flex-direction: column;
  flex: 1 1 0%;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;
const DivButtom = styled.div`
  display: flex;
  justify-content: space-evenly;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px 0px;
`;

const InicialScreen = (props) => {
  return (
    <DivInicial>
      <DivProfile>
      <ImgProfile src={props.getProfile.photo} />
      <DivName>
      <p>{props.getProfile.name}, {props.getProfile.age}</p>
      <p>{props.getProfile.bio}</p>
      </DivName>
      </DivProfile>
      <DivButtom>
        <Img src={remove} onClick={props.itsAMatch}/>
        <Img src={heart} onClick={props.itsAMatch} />
      </DivButtom>
    </DivInicial>
  );
};

export default InicialScreen;
