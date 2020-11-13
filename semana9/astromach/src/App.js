import "./App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import InicialScreen from "./components/InicialScreen/InicialScreen";
import MatchSreen from "./components/MatchScreen/MatchScreen";

const DivMain = styled.div`
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

const Signature = styled.p`
  position: fixed;
  bottom: 5em;
  right: 15em;
  font-size: 1.5em;
  transform:rotate(90deg);
  font-family: 'Dancing Script', cursive;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    transform:rotate(0);
    right: 4em;
    bottom: 1em;
  }
  @media (min-device-width: 421px) and (max-device-width: 800px) {
    transform:rotate(0);
    right: 4em;
    bottom: 1em;
  }

`

const urlBase =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diana-monteiro/";

function App() {
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

//Função de escolher profile, match or don't.

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
    <div>
    <DivMain>
      <NavBar currentScreen={currentScreen} renderScreen={goToMatchs} />
      {currentScreen ? (
        <InicialScreen getProfile={allProfiles} itsAMatch={choosePerson} />
      ) : (
        <MatchSreen />
      )}
    </DivMain>
    <Signature>Diana Monteiro ©2020</Signature>
    </div>
  );
}

export default App;
