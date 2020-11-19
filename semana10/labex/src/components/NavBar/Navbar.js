import React from "react";
import {Navbar, Nav, Button, Form} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import {NavLink} from "./styled";
import logo from "../../assets/logo2.png";

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
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </NavLink>
    <Form inline>
      <Button variant="outline-primary"onClick={goToList}>Missões</Button>
      <Button variant="outline-primary" onClick={goToLogin}>Login</Button>

    </Form>
  </Navbar>
  );
};

export default NavBar;