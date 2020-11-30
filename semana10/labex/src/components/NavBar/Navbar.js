import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { NavLink, Logo } from "./styled";
import logo from "../../assets/logo2.png";
import { StyledButtonNavBar } from "./StyledButtonNavBar";

const NavBar = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };

  const goToList = () => {
    history.push("/trips/list");
  };

  const goToHomePage = () => {
    history.push("/");
  };

  const scrollToContacts = () => {
    window.scrollTo(0, 1500);
  };

  return (
    <Navbar className="p-4" bg="transparent" variant="dark" expand="lg">
      <Logo
        src={logo}
        width="250"
        className="d-inline-block align-top"
        alt="Labex logo"
        onClick={goToHomePage}
      />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <NavLink className="mr-auto">
          <Nav.Link onClick={goToHomePage}>Home</Nav.Link>
          <Nav.Link onClick={scrollToContacts}>Contacts</Nav.Link>
          <Nav.Link href="https://www.flickr.com/photos/spacex" target="_blank">
            Gallery
          </Nav.Link>
        </NavLink>
        <Form>
          <StyledButtonNavBar variant="outline-primary" onClick={goToList}>
            Missions
          </StyledButtonNavBar>
          <StyledButtonNavBar variant="outline-primary" onClick={goToLogin}>
            Login
          </StyledButtonNavBar>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
