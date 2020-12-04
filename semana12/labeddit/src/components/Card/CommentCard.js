import React from "react";
import { Card, Button } from "react-bootstrap";
import {DivCard} from "./styled"

const CommentCard = (props) => {
  return (
    <DivCard className="col-md-11" bg="transparent">
      <Card.Header as="h5">{props.userName}</Card.Header>
      <Card.Body>
      </Card.Body>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </DivCard>
  );
};

export default CommentCard;
