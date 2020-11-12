import {DivNav, ImgBack, Logo} from "./styled"
import React from "react";
import logo from "../../img/logo2 (1).png"
import posts from "../../img/comece.svg"
import back from "../../img/foguete (1).png"

const NavBar = (props) => {
    const buttonInicial = (
        <ImgBack onClick={props.renderScreen} src={back}/>
    );

    const buttonMatch = (
        <ImgBack onClick={props.renderScreen} src={posts}/>
    );

    return(
      <DivNav>
        <Logo src={logo}/>
        {!props.currentScreen ? buttonInicial : buttonMatch}
      </DivNav>
    )
}

export default NavBar