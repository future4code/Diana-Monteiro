import React from "react";
import {Navbar, Nav, Button, Form} from 'react-bootstrap'
import { useHistory } from "react-router-dom";

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
    <Navbar bg="transparent" variant="light">
    <Navbar.Brand href="#home">LabeX</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link onClick={goToHomePage}>Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-primary"onClick={goToList}>Missões</Button>
      <Button variant="outline-primary" onClick={goToLogin}>Login</Button>
      <Button variant="outline-primary" onClick={goToHomePage}>Logout</Button>

    </Form>
  </Navbar>
  );
};

export default NavBar;