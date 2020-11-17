import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApplicationFormPage from "../Screens/ApplicationFormPage";
import CreateTripPage from "../Screens/CreateTripPage";
import HomePage from "../Screens/HomePage";
import ListApplicationsPage from '../Screens/ListApplicationsPage'
import ListTripsPage from"../Screens/ListTripsPage";
import TripDetailsPage from "../Screens/TripDetailsPage";
import LoginPage from "../Screens/LoginPage";
import AdmPage from "../Screens/AdmPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
            <LoginPage/>
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/admin">
          <AdmPage/>
        </Route>
        <Route exact path="/application-form/">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage/>
        </Route>
        <Route exact path="/trips/applications">
          <ListApplicationsPage/>
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage/>
        </Route>
        <Route exact path="/trips/details">
          <TripDetailsPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;