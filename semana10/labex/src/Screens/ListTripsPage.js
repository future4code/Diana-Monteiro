import React from "react";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { baseUrl } from "../constants/urls";
import TripCard from "../components/TripCard";
import NavBar from "../components/NavBar/Navbar";
import { TitleList, DivCards} from "./styled";

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
      <div>
      <TitleList>Check the Missions, Let's go to space!</TitleList>
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
    </div>
    </div>
  );
};

export default ListTripPage;
