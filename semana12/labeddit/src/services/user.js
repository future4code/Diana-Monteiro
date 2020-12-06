import axios from "axios";
import { baseUrl } from "../constants/urls";
import { goToFeed } from "../routes/condinator";

export const login = (body, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${baseUrl}/login`, body)
    .then((response) => {
      setLoading(false);
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("username", response.data.user.username);
      goToFeed(history);
    })
    .catch((error) => {
      setLoading(false);
      alert("Email ou senha incorretos!");
      console.log(error);
    });
};

export const signUp = (body, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${baseUrl}/signup`, body)
    .then((response) => {
      setLoading(false);
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("username", response.data.user.username);
      alert("Usuário cadastrado com sucesso! Bem vindo ao Blueddit!");
      goToFeed(history);
    })
    .catch((error) => {
      setLoading(false);
      alert("Opa! Usuário e e-mail já está cadastrados, tente novamente!");
      console.log(error);
    });
};
