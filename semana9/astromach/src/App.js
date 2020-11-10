import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import InicialScreen from "./components/InicialScreen";
import MatchSreen from "./components/MatchScreen";

const DivMain = styled.div`
  width: 400px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 5px;
`;

function App(props) {
  const [currentScreen, setCurrentScreen] = useState(true);
  const [allProfiles, setAllProfiles] = useState([])

  // Pega todos os profiles do Banco de dados

  useEffect (() => {
      axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diana/person").then ((response) => {
        setAllProfiles(response.data.profile)
      })
      console.log("oi", allProfiles)
    }, [])

  //Renderiza as telas, entre a tela inical para matchs.

  const goToMatchs = () => {
    setCurrentScreen(!currentScreen);
  };

  let renderedScreen = ""
  if (currentScreen) {
      renderedScreen = <InicialScreen 
      getProfile = {allProfiles}
      /> 
  } else{
      renderedScreen = <MatchSreen/>
  }

  return (
    <DivMain>
      <NavBar currentScreen={currentScreen} renderScreen={goToMatchs}/>
      {renderedScreen}

    </DivMain>
  );
}

export default App;
