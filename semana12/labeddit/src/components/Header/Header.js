import React from "react";
import { useHistory } from "react-router-dom";

import { Nav, Navbar, Form } from "react-bootstrap";

import logotype from "../../assests/Bluedditlogo.png"

import { logout, goToFeed } from "../../routes/condinator";

import { NavBar, Logo, NavText} from "./styled";
import { StyledButton } from "../Buttons/StyledButton"

const Header = (props) => {
  const history = useHistory();
  const token = window.localStorage.getItem("token");
  const userName = window.localStorage.getItem("username");

  if (token) {
    return (
      <NavBar expand="lg">
        <Logo src={logotype} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <NavText className="offset-md-2">
            <Nav.Link>{`Olá de novo, ${userName}! Que bom que está de volta!`}</Nav.Link>
          </NavText>
          <Navbar.Collapse>
          <Form inline className="ml-auto">
            <StyledButton onClick={() => goToFeed(history)}>
              Feed
            </StyledButton>
            <StyledButton onClick={() => logout(history)}>
              Logout
            </StyledButton>
          </Form>
        </Navbar.Collapse>
      </NavBar>
    );
  } else {
    return (
      <NavBar expand="lg">
        <Logo src={logotype} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
        <Nav className="ml-auto">
          <StyledButton variant="outline-light" onClick={() => props.goTo(history)}>
            {props.title}
          </StyledButton>
        </Nav>
        </Navbar.Collapse>
      </NavBar>
    );
  }
};

export default Header;
