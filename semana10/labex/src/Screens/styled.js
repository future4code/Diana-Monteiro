import styled from "styled-components";
import { Card } from "react-bootstrap";

//Styled HomePage

export const TextHome = styled.p`
  font-family: "Julius Sans One", sans-serif;
  text-align: justify;
  color: #012a4a;
  font-weight: bolder;
  font-size: 1em;
`;
export const DivTextHome = styled.div`
  text-align: center;
  margin: 90px 30px;
  padding: 30px 100px;
  font-family: "Bebas Neue", cursive;
  color: whitesmoke;
  background-color: rgb(202, 204, 206, 0.5);
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding: 30px;
    margin: 0px;
  }
`;
export const TitleHome = styled.h1`
  font-size: 6em;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    font-size: 5em;
  }
`;
export const DivHome = styled.div`
  padding-bottom: 2em;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding-bottom: 0px;
  }
`;
//Styled Login

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 5em;
  width: 24em;
  height: 20em;
  background-color: rgb(202, 204, 206, 0.5);
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    margin-top: 4em;
  }
`;
export const DivLoginHeigth = styled.div`
  height: 35em;
`;
export const TitleLogin = styled.h1`
  font-family: "Julius Sans One", sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 3em;
  padding-bottom: 30px;
  color: white;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding-bottom: 20px;
  }
`;
//Styled AdmPage

export const DivCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: rgb(202, 204, 206, 0.5);
  font-weight: bold;
  font-family: "Julius Sans One", sans-serif;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    grid-template-columns: 1fr;
    padding: 20px 0;
  }
  @media (min-device-width: 421px) and (max-device-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const TitleAdm = styled.h1`
  font-family: "Julius Sans One", sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  border: 0.5px solid gray;
  border-right: none;
  border-left: none;
  margin: 0px;
  padding: 60px 0 30px 0;
  color: white;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding: 40px 0;
  }
`;

//Styled TripCard
export const DivTripCard = styled.div`
  margin: 10px auto;
  padding: 30px;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding: 0;
  }
`;

//Styled TripList
export const TitleList = styled.h1`
  font-family: "Julius Sans One", sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 2.5em;
  border: 0.5px solid gray;
  border-right: none;
  border-left: none;
  margin: 0px;
  padding: 60px 0 30px 0;
  color: white;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding: 30px 0;
  }
`;
//Styled ApplicationCard
export const DivApplicationCard = styled.div`
  margin: 10px auto;
  padding: 30px;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding: 0px;
  }
`;
export const CardApplication = styled(Card)`
  width: 38rem;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 24rem;
  }
`;

//Styled ApplicationFormPage
export const DivForm = styled.div`
  background-color: rgb(202, 204, 206, 0.5);
  font-family: "Julius Sans One", sans-serif;
  font-weight: bold;
  padding-bottom: 50px;
`;

//Styled DetailsPage
export const DivDetailsCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(202, 204, 206, 0.5);
  font-weight: bold;
  font-family: "Julius Sans One", sans-serif;
`;
export const TitleNoApply = styled.h5`
  text-align: center;
  font-weight: bold;
  padding-right: 20px;
`;
export const DivNoApply = styled.div`
  display: flex;
  margin: 3em auto;
  align-items: center;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
  }
`;
export const DivButton = styled.div`
  position: absolute;
  left: 5%;
  bottom: 20px;
  width: 90%;
`;
