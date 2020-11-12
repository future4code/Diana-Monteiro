import heart from "../../img/coracao (2).svg";
import heartIn from "../../img/coracao (3).svg";
import remove from "../../img/remover.svg";
import removeIn from "../../img/removerIn.svg";


import {
  ImgPick,
  P,
  Name,
  Bio,
  ImgProfile,
  DivName,
  DivProfile,
  DivBack,
  DivInicial,
  DivButtom,
} from "./styled";

const InicialScreen = (props) => {


  return (
    <DivInicial>
      {props.getProfile ? (
        <DivProfile>
          <DivBack imgProfile={props.getProfile.photo} />
          <ImgProfile src={props.getProfile.photo} />
          <DivName>
            <Name>
              {props.getProfile.name}, {props.getProfile.age}
            </Name>
            <Bio>{props.getProfile.bio}</Bio>
          </DivName>
        </DivProfile>
      ) : (
        <P>Acabaram os matches, limpe sua lista de matches e atualize a página</P>
      )}
      <DivButtom>
        <ImgPick
          src={remove}
          onMouseOver={e => (e.currentTarget.src = removeIn)}
          onMouseOut={e => (e.currentTarget.src = remove)} 
          onClick={() => props.itsAMatch(false)}
        />
        <ImgPick 
          src={heart} 
          onMouseOver={e => (e.currentTarget.src = heartIn)}
          onMouseOut={e => (e.currentTarget.src = heart)}
          onClick={() => props.itsAMatch(true)} />
      </DivButtom>
    </DivInicial>
  );
};

export default InicialScreen;
