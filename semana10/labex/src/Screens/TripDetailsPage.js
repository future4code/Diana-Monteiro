import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constants/urls";
import { useProtectedPage } from "../hooks/useProtectedPage";
import NavBarAdm from "../components/NavBar/NavBarAdm";
import { ApplicationCard } from "../components/ApplicationCard";
import { DivDetailsCard, TitleAdm, TitleNoApply, DivNoApply } from "./styled";
import { StyledButton } from "../components/StyledButton";

const TripDetailsPage = () => {
  const [trip, setTrip] = useState({});
  const [applications, setApplications] = useState([]);
  const { id } = useParams();
  useProtectedPage();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    getTripDetails();
  }, []);

  const getTripDetails = () => {
    axios
      .get(`${baseUrl}/trip/${id}`, axiosConfig)
      .then((response) => {
        setTrip(response.data.trip);
        setApplications(response.data.trip.candidates);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const decideCandidate = (boolean, applicationsId) => {
    const body = {
      approve: boolean,
    };

    axios
      .put(
        `${baseUrl}/trips/${id}/candidates/${applicationsId}/decide`,
        body,
        axiosConfig
      )
      .then(() => {
        if (boolean) {
          alert("Approved Candidate");
        } else {
          alert("Failed Candidate");
        }
        getTripDetails();
      })
      .catch((err) => {
        console.log(err);
        alert("Failed");
      });
  };

  return (
    <div>
      <NavBarAdm />
      <TitleAdm>
        Applications for Mission: {trip.name}
        {}trip.
      </TitleAdm>
      <DivDetailsCard>
        {applications.length === 0 ? (
          <DivNoApply>
            <TitleNoApply>
              There are no applications for this mission.
            </TitleNoApply>
            <StyledButton variant="transparent" onClick={goBack}>
              Go Back
            </StyledButton>
          </DivNoApply>
        ) : (
          applications.map((application) => {
            return (
              <ApplicationCard
                id={application.id}
                name={application.name}
                country={application.country}
                age={application.age}
                profession={application.profession}
                applicationText={application.applicationText}
                decide={decideCandidate}
              />
            );
          })
        )}
      </DivDetailsCard>
    </div>
  );
};

export default TripDetailsPage;
