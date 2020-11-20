import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constants/urls";
import { useProtectedPage } from "../hooks/useProtectedPage";
import NavBar from "../components/NavBar/Navbar";
import { Card } from "react-bootstrap";
import { StyledButton } from "../components/StyledButton";

const TripDetailsPage = () => {
  const [trip, setTrip] = useState({});
  const [applications, setApplications] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  useProtectedPage();

  const goBackAdmPage = () => {
    history.push("/admin");
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
      approve: boolean
    };

    axios
      .put(`${baseUrl}/trips/${id}/candidates/${applicationsId}/decide`, body, axiosConfig)
      .then(() => {
        if(boolean){
          alert("Approved Candidate")
        } else{
          alert("Failed Candidate")
        }
        getTripDetails()
      })
      .catch((err) => {
        console.log(err);
        alert("Failed")
      });
  };

  return (
    <div>
      <NavBar />
      <div>
        <h1>Applications for Missions</h1>
        <h3>{trip.name}</h3>
        {applications.lengh === 0 ? (
          <h5>No application for this mission</h5>
        ) : (applications.map(application => {
          return(<Card
            bg="dark"
            text="white"
            className="text-center"
            style={{ width: "30rem" }}
            key={application.id}
          >
            <Card.Header as="h5">{application.name}</Card.Header>
            <Card.Body>
              <Card.Title>
              {application.country}. {application.age} years old, {application.profession}. 
              </Card.Title>
              <Card.Text>{application.applicationText}</Card.Text>
              <StyledButton variant="primary" onClick={() => decideCandidate(true, application.id)}>Accept</StyledButton>
              <StyledButton variant="primary" onClick={() => decideCandidate(false, application.id)}>Reject</StyledButton>
            </Card.Body>
          </Card>)
        }))}
      </div>
      <StyledButton onClick={goBackAdmPage}>
        Voltar para Opções de Adm
      </StyledButton>
    </div>
  );
};

export default TripDetailsPage;
