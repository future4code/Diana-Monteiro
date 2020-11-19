import React from "react";
import NavBar from "../components/NavBar/Navbar";

import {DivTextHome, TitleHome, TextHome, Div} from "./styled"

const HomePage = () => {

  return (
    <Div>
        <NavBar/>
        <DivTextHome>
        <TitleHome>LabeX: The Travel Revolution</TitleHome>
            <TextHome>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</TextHome>
        </DivTextHome>
    </Div>
  );
};

export default HomePage;