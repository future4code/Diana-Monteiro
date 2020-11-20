import React from "react";
import {Navbar, Nav, Form} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import {NavLink, Logo} from "./styled";
import logo from "../../assets/logo2.png";
import {StyledButtonNavBar} from "../StyledButtonNavBar"

const NavBar = () => {

    const history = useHistory(); 

    const goToLogin = () =>{
        history.push("/login")
    }

    const goToList = () => {
        history.push("/trips/list")
    }

    const goToHomePage = () => {
      history.push("/")
    }

    const scrollToContacts = () => {
      window.scrollTo(0, 500);
    };

  return (
    <Navbar bg="transparent" variant="dark">
       <img
        src={logo}
        width="250"
        className="d-inline-block align-top"
        alt="Labex logo"
      />
    <NavLink className="mr-auto" text="white" >
      <Nav.Link onClick={goToHomePage}>Home</Nav.Link>
      <Nav.Link onClick={scrollToContacts}>Contacts</Nav.Link>
      <Nav.Link href="https://www.flickr.com/photos/spacex" target="_blank">Gallery</Nav.Link>
    </NavLink>
    <Form inline>
      <StyledButtonNavBar variant="outline-primary"onClick={goToList}>Missões</StyledButtonNavBar>
      <StyledButtonNavBar variant="outline-primary" onClick={goToLogin}>Login</StyledButtonNavBar>

    </Form>
  </Navbar>
  );
};

export default NavBar;