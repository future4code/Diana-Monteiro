import "./App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import InicialScreen from "./components/InicialScreen/InicialScreen";
import MatchSreen from "./components/MatchScreen/MatchScreen";
import logo from "./img/Diana Monteiro Logotipo.png"

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

const Logo = styled.img`
  width: 15%;
  bottom: 0px;
  position: fixed;
  right: 0px;
  z-index: -1;
`

const urlBase =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diana-monteiro/";

function App() {
  const [currentScreen, setCurrentScreen] = useState(true);
  const [allProfiles, setAllProfiles] = useState({});
  const [slideRigth, setSlideRigth] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);
  const [loaded, setLoaded] = useState(false);


  // Pega todos os profiles do Banco de dados

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    setLoaded(false)
    axios
      .get(`${urlBase}person`)
      .then((response) => {
        setAllProfiles(response.data.profile);
        setLoaded(true)
      })
      .catch((err) => {
        console.log(err);
        setLoaded(true)
      });

  };

//Função de escolher profile, match or don't.

  const choosePerson = (boolean) => {  
    {boolean ? setSlideRigth(true) : setSlideLeft(true)}

    const body = {
      id: allProfiles.id,
      choice: boolean
    };
    axios
      .post(`${urlBase}choose-person`, body)
      .then(() => {
        getProfile();
        setSlideRigth(false)
        setSlideLeft(false)
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
        <InicialScreen getProfile={allProfiles} itsAMatch={choosePerson} slideRigth={slideRigth} slideLeft={slideLeft} loaded={loaded}/>
      ) : (
        <MatchSreen />
      )}
    </DivMain>
    <a href="https://github.com/DiaMont30" target="_blank"><Logo src={logo}/></a>
    </div>
  );
}

export default App;
