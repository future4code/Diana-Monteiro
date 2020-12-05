import React from "react";
import { Card } from "react-bootstrap";
import { DivCard, User } from "./styled"
import { StyledButtonUser } from "../Buttons/StyledButtonUser"
import user from "../../assests/user.svg"
 
const PostCard = (props) => {
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
  <StyledButtonUser onClick={props.goTo}>{props.buttonName}&nbsp;({props.commentsCount})</StyledButtonUser>
    </DivCard>
  );
};

export default PostCard;
