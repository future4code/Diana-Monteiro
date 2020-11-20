import React from "react";
import { StyledButton } from "../components/StyledButton";
import { Card } from "react-bootstrap";

const TripCard = (props) => {
  return (
    <div>
      <Card bg="transparent" text="white" style={{ width: '25em' }}>
      <Card.Img variant="top" src={props.image} />
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
    </div>
  );
};

export default TripCard;
