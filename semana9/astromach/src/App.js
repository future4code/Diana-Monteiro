import "./App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import InicialScreen from "./components/InicialScreen/InicialScreen";
import MatchSreen from "./components/MatchScreen/MatchScreen";

export const DivMain = styled.div`
  width: 400px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 7px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 5px;
`;

const urlBase =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diana-monteiro/";

function App(props) {
  const [currentScreen, setCurrentScreen] = useState(true);
  const [allProfiles, setAllProfiles] = useState({});

  // Pega todos os profiles do Banco de dados

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(`${urlBase}person`)
      .then((response) => {
        setAllProfiles(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const choosePerson = (response) => {
    const body = {
      id: allProfiles.id,
      choice: response,
    };

    axios
      .post(`${urlBase}choose-person`, body)
      .then((answer) => {
        getProfile();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Renderiza as telas, entre a tela inical para matchs.

  const goToMatchs = () => {
    setCurrentScreen(!currentScreen);
  };

  return (
    <DivMain>
      <NavBar currentScreen={currentScreen} renderScreen={goToMatchs} />
      {currentScreen ? (
        <InicialScreen getProfile={allProfiles} itsAMatch={choosePerson} />
      ) : (
        <MatchSreen />
      )};
    </DivMain>
  );
}

export default App;
