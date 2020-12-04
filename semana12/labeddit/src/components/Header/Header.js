import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Nav, Navbar, Form } from "react-bootstrap";

import logotype from "../../assests/logotipo-removebg.png"

import { logout, goToFeed } from "../../routes/condinator";

import { NavBar, Logo } from "./styled";
import { StyledButton } from "../Buttons/StyledButton"

const Header = (props) => {
  const history = useHistory();
  const token = window.localStorage.getItem("token");
  const userName = window.localStorage.getItem("username");

  if (token) {
    return (
      <NavBar expand="lg">
        <Navbar.Brand>
          <Logo src={logotype} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#pricing">{`Olá de novo, ${userName}! Que bom que está de volta!`}</Nav.Link>
          </Nav>
          <Form inline>
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
      <NavBar>
        <Navbar.Brand>
          <Logo src={logotype} />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <StyledButton variant="outline-light" onClick={() => props.goTo(history)}>
            {props.title}
          </StyledButton>
        </Nav>
      </NavBar>
    );
  }
};

export default Header;
