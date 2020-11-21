import React from "react";
import { Card } from "react-bootstrap";
import { StyledButton } from "../components/StyledButton";
import { DivApplicationCard } from "../Screens/styled";

export const ApplicationCard = (props) => {
  return (
    <DivApplicationCard>
      <Card
        bg="transparent"
        text="dark"
        className="text-center h-100"
        style={{ width: "30rem"}}
        key={props.id}
      >
        <Card.Header as="h5" className="font-weight-bold">
          {props.name}
        </Card.Header>
        <Card.Body>
          <Card.Title className="font-weight-bold">
            {props.country}. {props.age} years old, {props.profession}.
          </Card.Title>
          <Card.Text>{props.applicationText}</Card.Text>
          <StyledButton
            variant="primary"
            onClick={() => props.decide(true, props.id)}
          >
            Accept
          </StyledButton>
          <StyledButton
            variant="primary"
            onClick={() => props.decide(false, props.id)}
          >
            Reject
          </StyledButton>
        </Card.Body>
      </Card>
    </DivApplicationCard>
  );
};
