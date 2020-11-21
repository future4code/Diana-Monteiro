import React from "react";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { baseUrl } from "../constants/urls";
import TripCard from "../components/TripCard";
import NavBarAdm from "../components/NavBar/NavBarAdm";
import { TitleAdm, DivCards} from "./styled";
import { useProtectedPage } from '../hooks/useProtectedPage';


const AdmTripsPage = () => {
  const getTrips = useRequestData(`${baseUrl}/trips`, undefined);

  useProtectedPage();
  
  const history = useHistory();

  const goToDetails = (id) => {
    history.push(`/trips/details/${id}`);
  };

  return (
    <div>
      <NavBarAdm />
      <TitleAdm>Welcome administrator, these are all our missions:</TitleAdm>
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
          goTo = {goToDetails}
          id= {trip.id}
          nameButton = {"See Applications"}
          />
        )
      })}
        </DivCards>
    </div>
  );
};

export default AdmTripsPage;
