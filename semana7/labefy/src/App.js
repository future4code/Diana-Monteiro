import './App.css';
import axios from "axios";
import styled from "styled-components";
import React from "react";
import PlayLists from "./components/PlayLists"
import Footer from "./components/Footer"

export default class App extends React.Component {
  render () {

  return (
    <div className="App">
      <PlayLists/>
      <Footer/>
    </div>
  );
}
}

