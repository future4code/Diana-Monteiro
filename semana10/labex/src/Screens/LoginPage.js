import NavBar from "../components/NavBar/Navbar";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../constants/urls";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== null) {
      history.push("/admin");
    }
    
  }, [history]);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        `${baseUrl}/login`,
        body
      )
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        history.push("/admin");
      })
      .catch((err) => {
        alert("Email ou senha incorretos")
      });
  };

  return (
    <div>
      <NavBar />
      <p>Login</p>
      <input value={email} onChange={handleEmail} />
      <input value={password} onChange={handlePassword} />
      <button onClick={login}>Fazer login</button>
    </div>
  );
};

export default LoginPage;
