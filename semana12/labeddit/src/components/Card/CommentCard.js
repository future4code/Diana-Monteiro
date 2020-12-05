import React from "react";
import { Card } from "react-bootstrap";
import {DivCard, User} from "./styled"
import user from "../../assests/user.svg"


const CommentCard = (props) => {
  return (
    <DivCard className="col-md-11" bg="transparent">
      <Card.Header as="h5">
      <User src={user}/>
        {props.userName}
        </Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </DivCard>
  );
};

export default CommentCard;
