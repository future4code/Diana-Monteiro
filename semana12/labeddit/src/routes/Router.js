import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Error from "../screens/ErrorPage/Error"
import Login from "../screens/LoginPage/Login"
import Feed from "../screens/FeedPage/Feed"
import Post from "../screens/PostPage/Post"
import SignUp from "../screens/SignUpPage/SignUp"

import Header from "../components/Header/Header"

import {goToLogin, goToSignUp} from "../routes/condinator"


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          < Header title="Inscreva-se aqui!" goTo={goToSignUp} />
            <Login/>
        </Route>
        <Route exact path="/signup">
            <Header title="Voltar para Login" goTo={goToLogin} />
            <SignUp/>
        </Route>
        <Route exact path="/">
            <Header/>
            <Feed/>
        </Route>
        <Route exact path="/feed/:id">
            <Header/>
            <Post/>
        </Route>
        <Route>
          <Header/>
            <Error/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router
