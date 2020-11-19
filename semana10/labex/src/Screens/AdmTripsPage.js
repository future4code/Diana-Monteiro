import React from "react";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { baseUrl } from "../constants/urls";
import { CardDeck} from "react-bootstrap";
import TripCard from "../components/TripCard";
import NavBar from "../components/NavBar/Navbar";
import {DivAdmTripsPage} from "./styled";

const AdmTripsPage = () => {
  const getTrips = useRequestData(`${baseUrl}/trips`, undefined);

  const history = useHistory();

  const goBackAdmPage = () => {
    history.push("/admin");
  };

  const goToDetails = (id) => {
    history.push(`/trips/details/${id}`);
  };

  return (
    <DivAdmTripsPage>
      <NavBar />
      <h1>Lista de missões</h1>
      <CardDeck>
      {getTrips && getTrips.trips.map((trip, i) =>{
        return(
          <TripCard
          key={trip.id}
          image={`https://picsum.photos/200/200?a=${i}`}
          name = {trip.name}
          description={trip.description}
          duration={trip.durationInDays}
          planet={trip.planet}
          date={trip.date}
          goTo = {goToDetails}
          id= {trip.id}
          nameButton = {"See Details"}
          />
        )
      })}
        </CardDeck>
      <button onClick={goBackAdmPage}>Voltar para Opções de Adm</button>
    </DivAdmTripsPage>
  );
};

export default AdmTripsPage;
