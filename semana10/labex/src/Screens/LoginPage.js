import NavBar from "../components/NavBar/Navbar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useInput } from "../hooks/useInput";
import { StyledButton } from "../components/StyledButton";
import { baseUrl } from "../constants/urls";
import { DivLogin, TitleLogin, DivLoginHeigth } from "./styled";

const LoginPage = () => {
  const [email, handleEmail] = useInput();
  const [password, handlePassword] = useInput();
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) {
      history.push("/adm");
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
        history.push("/adm");
      })
      .catch((error) => {
        alert("Email ou senha incorretos");
      });
  };

  return (
    <DivLoginHeigth>
      <NavBar />
      <DivLogin>
        <TitleLogin>Login</TitleLogin>
        <Form style={{ width: "18rem" }} className="d-flex flex-column">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmail}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
          </Form.Group>
          <StyledButton onClick={login} variant="primary" type="submit">
            Submit
          </StyledButton>
        </Form>
      </DivLogin>
    </DivLoginHeigth>
  );
};

export default LoginPage;
