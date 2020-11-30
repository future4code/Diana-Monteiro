import React from "react";
import { Card } from "react-bootstrap";
import { StyledButton } from "../components/StyledButton";
import {
  DivApplicationCard,
  DivButton,
  CardApplication,
} from "../Screens/styled";

export const ApplicationCard = (props) => {
  return (
    <DivApplicationCard>
      <CardApplication
        bg="transparent"
        text="dark"
        className="text-center h-100 pb-5"
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
          <DivButton>
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
          </DivButton>
        </Card.Body>
      </CardApplication>
    </DivApplicationCard>
  );
};
