import React from "react";
import { StyledButton } from "../components/StyledButton";
import { Card } from "react-bootstrap";
import { DivTripCard, DivButton } from "../Screens/styled";

const TripCard = (props) => {
  return (
    <DivTripCard>
      <Card
        bg="transparent"
        text="dark"
        style={{ width: "23em" }}
        className="d-flex h-100"
      >
        <Card.Img variant="top" src={props.image} />
        <Card.Header as="h5" className="font-weight-bold">
          {props.name}
        </Card.Header>
        <Card.Body>
          <Card.Text>Description: {props.description}</Card.Text>
          <Card.Text>Date: {props.date}</Card.Text>
          <Card.Text>Planet: {props.planet}</Card.Text>
          <Card.Text>Duration in days: {props.duration}</Card.Text>

          <DivButton>
            <StyledButton
              variant="transparent"
              className=""
              block
              onClick={() => props.goTo(props.id)}
            >
              {props.nameButton}
            </StyledButton>
          </DivButton>
        </Card.Body>
      </Card>
    </DivTripCard>
  );
};

export default TripCard;
