import React from "react";
import { StyledButton } from "../components/StyledButton";
import { Card } from "react-bootstrap";

const TripCard = (props) => {
  return (
    <div>
      <Card bg="dark" text="white" style={{ width: "15rem" }}>
        <Card.Img variant="top" src={props.image} alt="imagem aleatória" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>{props.date}</Card.Text>
          <Card.Text>{props.planet}</Card.Text>
          <Card.Text>{props.duration}</Card.Text>
          <StyledButton variant="primary" onClick={() => props.goTo(props.id)}>Go somewhere</StyledButton>
          <br />
        </Card.Body>
      </Card>
    </div>
  );
};

export default TripCard;
