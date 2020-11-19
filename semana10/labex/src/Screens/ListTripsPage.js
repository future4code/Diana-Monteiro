import React from "react";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { baseUrl } from "../constants/urls";
import TripCard from "../components/TripCard";
import { CardDeck } from "react-bootstrap";
import NavBar from "../components/NavBar/Navbar"


const ListTripPage = () => {

  const getTrips = useRequestData(
    `${baseUrl}/trips`, undefined);

  const history = useHistory();

  const goToApplication = (id) => {
    history.push(`/application-form/${id}`);
  };

  return (
    <div>
      <NavBar/>
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
          goTo={goToApplication}
          id= {trip.id}
          nameButton = {"To apply"}
          />
        )
      })}
      </CardDeck>
    </div>
  );
};

export default ListTripPage;
