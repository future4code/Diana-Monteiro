import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { NavLink, Logo } from "./styled";
import logo from "../../assets/logo2.png";
import { StyledButtonNavBar } from "./StyledButtonNavBar";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const NavBar = () => {
  const history = useHistory();
  useProtectedPage();

  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  const goToHomePage = () => {
    history.push("/");
  };

  const scrollToContacts = () => {
    window.scrollTo(0, 500);
  };

  const goToCreate = () => {
    history.push("/trips/create");
  };

  const goBackAdmPage = () => {
    history.push("/adm");
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
        <Form inline>
          <StyledButtonNavBar variant="outline-primary" onClick={goToCreate}>
            Create Missions
          </StyledButtonNavBar>
          <StyledButtonNavBar onClick={goBackAdmPage}>
            Go to Missions
          </StyledButtonNavBar>
          <StyledButtonNavBar variant="outline-primary" onClick={logout}>
            Logout
          </StyledButtonNavBar>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
