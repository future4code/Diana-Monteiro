import NavBar from "../components/NavBar/Navbar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useEffect} from "react";
import {Form} from "react-bootstrap";
import { useInput } from "../hooks/useInput";
import { StyledButton } from "../components/StyledButton";
import { baseUrl } from "../constants/urls";

const LoginPage = () => {
  const [email, handleEmail] = useInput();
  const [password, handlePassword] = useInput();
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) {
      history.push("/admin");
    }
  }, [history]);

  const login = (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    axios
      .post(`${baseUrl}/login`, body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        history.push("/admin");
      })
      .catch((err) => {
        alert("Email ou senha incorretos");
      });
  };

  return (
    <div>
      <NavBar />
      <p>Login</p>
      <Form style={{ width: "18rem" }} className={"d-flex justify-content-center flex-column"} >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmail}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword}/>
        </Form.Group>
        <StyledButton onClick={login} variant="primary" type="submit">
          Submit
        </StyledButton>
      </Form>
    </div>
  );
};

export default LoginPage;
