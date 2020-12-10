import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Error from "../screens/ErrorPage/Error"
import Login from "../screens/LoginPage/Login"
import Feed from "../screens/FeedPage/Feed"
import Post from "../screens/PostPage/Post"
import SignUp from "../screens/SignUpPage/SignUp"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import {goToLogin, goToSignUp} from "../routes/condinator"


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          < Header title="Inscreva-se aqui!" goTo={goToSignUp} />
            <Login/>
            <Footer/>
        </Route>
        <Route exact path="/signup">
            <Header title="Voltar para Login" goTo={goToLogin} />
            <SignUp/>
            <Footer/>
        </Route>
        <Route exact path={['/feed', '/']}>
            <Header/>
            <Feed/>
            <Footer/>
        </Route>
        <Route exact path="/feed/:id">
            <Header/>
            <Post/>
            <Footer/>
        </Route>
        <Route>
          <Header title="Voltar para Login" goTo={goToLogin}/>
            <Error/>
            <Footer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router
