import React from "react";
import styled from "styled-components";
import MissionsList from "./components/MissionsList"
import axios from "axios";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>SpaceX</h1>
        <h3>MISSIONS</h3>
        <MissionsList/>
      </div>
    );
  }
}
