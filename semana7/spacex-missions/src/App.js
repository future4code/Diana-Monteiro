import React from "react";
import "./App.css";
import styled from "styled-components";
import MissionDetails from "./components/MissionDetails"
import axios from "axios";
import logo from "./logo.jpg";

const Div = styled.div`
  background-color: #375c7c;
  height: 56vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: 'Staatliches', cursive;
`
const Mission = styled.p`
  text-align: center;
  font-size: 23px;
  &:hover {
    color:#24252e;
    cursor: pointer;
  }
`
const P = styled.p`
  color: #24252e;
  margin: 20px 0;
  font-size: 20px;
`
const H2 = styled.p`
  font-size: 23px;
  margin:0;
  font-weight: 0;
  margin-top: 5px;
`

export default class App extends React.Component {
  state = {
    allMissions: [],
    missionDetails: [],
    seeDetails: true
  };

  componentDidMount() {
    this.getAllMissions();
  }

  getAllMissions = () => {
    axios.get("https://api.spacexdata.com/v3/missions").then((response) => {
      this.setState({ allMissions: response.data });
    })
    .catch(err => {
      console.log(err);
    });
  };

  getOneMission = (mission) => {
    this.seeAllDetails()

    axios.get(`https://api.spacexdata.com/v3/missions/${mission}`).then((response) => {
      this.setState({ missionDetails: response.data });
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  seeAllDetails = () => {
    this.setState({seeDetails: !this.state.seeDetails})
  }

  render() {
    const list = this.state.allMissions.map((mission) => {
      return <Mission key={mission.mission_id} onClick={() => this.getOneMission (mission.mission_id)}>{mission.mission_name}</Mission>;
    });

    return (
      <Div>
      <img src={logo}/>
      <H2>MISSIONS</H2>
      {this.state.seeDetails ?
      <div>
          <P>Clique em uma missão e veja mais sobre ela!</P>
          <div>{list}</div>
      </div>
      :
      <MissionDetails goBack={this.seeAllDetails} missionDetails={this.state.missionDetails} />
      }
      </Div>
    );
  }
}
