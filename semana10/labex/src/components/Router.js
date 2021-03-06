import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApplicationFormPage from "../Screens/ApplicationFormPage";
import CreateTripPage from "../Screens/CreateTripPage";
import HomePage from "../Screens/HomePage";
import ListTripsPage from "../Screens/ListTripsPage";
import TripDetailsPage from "../Screens/TripDetailsPage";
import LoginPage from "../Screens/LoginPage";
import AdmPage from "../Screens/AdmPage";
import AdmTripsPage from "../Screens/AdmPage.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/adm">
          <AdmTripsPage />
        </Route>
        <Route exact path="/application-form/:id">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/details/:id">
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
