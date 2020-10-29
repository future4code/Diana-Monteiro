import React from "react";
import styled from "styled-components";
import MissionDetails from "./MissionDetails"
import axios from "axios";

class MissionsList extends React.Component {
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
      return <p key={mission.mission_id} onClick={() => this.getOneMission (mission.mission_id)}>{mission.mission_name}</p>;
    });

    return (
      <div>
      {this.state.seeDetails ?
      <div>
          <p>Clique em uma missão e veja mais sobre ela!</p>
          <div>{list}</div>
      </div>
      :
      <MissionDetails goBack={this.seeAllDetails} missionDetails={this.state.missionDetails} />
      }
      </div>
    );
  }
}

export default MissionsList