import './App.css';
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

