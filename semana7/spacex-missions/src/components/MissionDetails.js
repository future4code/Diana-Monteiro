import React from "react";
import styled from "styled-components";
import axios from "axios";

class MissionDetails extends React.Component {
  render() {
    console.log(this.props.missionDetais)
    return (
      <div>
      <p>Nome da Missão:{this.props.missionDetails.mission_name}</p>
      <p>Descrição:{this.props.missionDetails.description}</p>
      <p>Fabricantes:{this.props.missionDetails.manufactures}</p>
      <p>Wikipédia:<a href={this.props.missionDetails.wikipedia} target="_blank">{this.props.missionDetails.wikipedia}</a></p>
      <p>Website:<a href={this.props.missionDetails.website} target="_blank">{this.props.missionDetails.website}</a></p>
      <button onClick={this.props.goBack}>Voltar</button>
      </div>
    );
  }
}

export default MissionDetails;
