import React from "react";
import NavBar from "../components/NavBar/Navbar";

import {DivTextHome, TitleHome, TextHome, Div} from "./styled"

const HomePage = () => {

  return (
    <Div>
        <NavBar/>
        <DivTextHome>
        <TitleHome>LabeX: The Travel Revolution</TitleHome>
            <TextHome>Welcome to Labex, we are a company that makes space dreams come true. Our company was created, in 1988, from a dream, the freedom to travel wherever your personal universe allows. We brought the travel revolution to planet Earth, and we took you to revolutionize space. Here at Labex you don't have to be a multi millionaire to be a crew member on a mission, you just need to be a human being who makes a difference in the world. On this platform you will find the missions available at the moment and you can apply as a future astronaut, write to us and show us who you are and where you want to go. You are an important being for the universe, be good to everything inside him and he will give back. Come and be a revolutionary astronaut of dreams and reach the stars with us.</TextHome>
        </DivTextHome>
    </Div>
  );
};

export default HomePage;