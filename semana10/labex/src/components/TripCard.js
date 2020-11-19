import React from "react";
import { StyledButton } from "../components/StyledButton";
import { Card } from "react-bootstrap";
import styled from 'styled-components';


const DivCard = styled.div`
  margin: 0 auto;
`

const TripCard = (props) => {
  return (
    <DivCard>
      <Card bg="transparent" text="white" style={{ width: "18rem" }}>
      <Card.Header as="h5">{props.name}</Card.Header>
        <Card.Body>
          <Card.Text>Description: {props.description}</Card.Text>
          <Card.Text>Date: {props.date}</Card.Text>
          <Card.Text>Planet: {props.planet}</Card.Text>
          <Card.Text>Duration in days: {props.duration}</Card.Text>
          <StyledButton variant="primary" onClick={() => props.goTo(props.id)}>{props.nameButton}</StyledButton>
          <br />
        </Card.Body>
      </Card>
    </DivCard>
  );
};

export default TripCard;
