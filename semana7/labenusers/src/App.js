import React from "react";
import Login from "./components/Login";
import RenderPage from "./components/RenderPage";

class App extends React.Component {
  state = {
    goingTo: false,
  };

  goToPage = () => {
    this.setState({ goingTo: !this.state.goingTo });
  };

  render() {
    const renderScreen = () => {
      if (this.state.goingTo) {
        return <RenderPage changePage={this.goToPage}/>;
      } else {
        return <Login changePage={this.goToPage} />;
      }
    };

    return <div className="App">{renderScreen()}</div>;
  }
}

export default App;
