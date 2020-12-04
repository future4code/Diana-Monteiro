import axios from "axios"
import {baseUrl} from "../constants/urls"
import { goToFeed } from "../routes/condinator"

export const login = (body, history) => {
    axios
    .post(`${baseUrl}/login`, body)
    .then((response) => {
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("username", response.data.user.username);
      goToFeed(history);
    })
    .catch((error) => {
      alert("Email ou senha incorretos");
      console.log(error);
    });
}

export const signUp = (body,history) => {
    axios
    .post(`${baseUrl}/signup`, body)
    .then((response) => {
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("username", response.data.user.username);
      alert("usuário cadastrado com sucesso! Bem vindo ao Labeddit!")
      goToFeed(history);
    })
    .catch((error) => {
      alert("Alguma coisa deu errado, confira se seus dados estão corretos!");
      console.log(error);
    })
}