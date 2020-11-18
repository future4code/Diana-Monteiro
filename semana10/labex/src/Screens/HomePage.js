import React from "react";
import NavBar from "../components/NavBar/Navbar";
import styled from "styled-components"

const TextHome = styled.p`
  font-family: 'Julius Sans One', sans-serif;
`
const DivText = styled.div`
  text-align: center;
  margin: 90px 30px;
  padding: 30px 100px;
  font-family: 'Bebas Neue', cursive;
  color: whitesmoke;
  background-color: rgb(202, 204, 206, 0.5);
`
const Title = styled.h1`
  font-size: 6em;
`

const HomePage = () => {

  return (
    <div>
        <NavBar/>
        <DivText>
        <Title>LabeX: The Travel Revolution</Title>
            <TextHome>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</TextHome>
        </DivText>
    </div>
  );
};

export default HomePage;