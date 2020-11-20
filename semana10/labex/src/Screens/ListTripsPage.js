import React from "react";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { baseUrl } from "../constants/urls";
import TripCard from "../components/TripCard";
import { CardColumns } from "react-bootstrap";
import NavBar from "../components/NavBar/Navbar";
import { TitleAdm, DivCards, DivTripsPage } from "./styled";

const ListTripPage = () => {

  const getTrips = useRequestData(
    `${baseUrl}/trips`, undefined);

  const history = useHistory();

  const goToApplication = (id) => {
    history.push(`/application-form/${id}`);
  };

  return (
    <DivTripsPage>
      <NavBar/>
      <hr/>
      <TitleAdm>Missions</TitleAdm>
      <hr/>
      <DivCards>
      {getTrips && getTrips.trips.map((trip, i) =>{
        return(
          <TripCard
          key={trip.id}
          image={`https://picsum.photos/400/200?a=${i}`}
          name = {trip.name}
          description={trip.description}
          duration={trip.durationInDays}
          planet={trip.planet}
          date={trip.date}
          goTo={goToApplication}
          id= {trip.id}
          nameButton = {"To apply"}
          />
        )
      })}
      </DivCards>
    </DivTripsPage>
  );
};

export default ListTripPage;
