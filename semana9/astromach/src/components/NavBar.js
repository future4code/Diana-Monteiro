import styled from "styled-components"
import React from "react";
import pickMore from "../img/desfile-de-identificacao.svg"
import posts from "../img/balao-de-fala.svg"

const Div = styled.div`
    height: 50px;
    border-bottom: 1px solid lightgray;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
`
const ImgInicial = styled.img`
    width: 10%;
`
const ImgMatch = styled.img`
    width: 10%;
`

const NavBar = (props) => {
    const buttonInicial = (
        <ImgInicial onClick={props.renderScreen} src={pickMore}/>
    );

    const buttonMatch = (
        <ImgMatch onClick={props.renderScreen} src={posts}/>
    );


    return(
      <Div>
        {!props.currentScreen ? buttonInicial : null}
        <h1>Astromatch</h1>
        {props.currentScreen ? buttonMatch : null}

      </Div>
    )
}

export default NavBar