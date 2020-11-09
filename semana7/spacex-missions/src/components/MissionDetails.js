import React from "react";
import styled from "styled-components";

const Div = styled.div`
  border: 1px solid #24252e;
  width: 50vw;
  margin: 30px 0;
`
const P = styled.p`
  margin: 30px;
`
const Button = styled.button`
  background-color: #64849c;
  margin-bottom: 25px;
  margin-left: 34em;
  color: #24252e;
  width: 200px;
  height: 30px;
  font-family: 'Staatliches', cursive;
`

class MissionDetails extends React.Component {
  render() {
    console.log(this.props.missionDetais)
    return (
      <Div>
      <P>Nome da Missão: {this.props.missionDetails.mission_name}</P>
      <P>Descrição: {this.props.missionDetails.description}</P>
      <P>Fabricantes: {this.props.missionDetails.manufacturers}</P>
      <P>Wikipédia: <a href={this.props.missionDetails.wikipedia} target="_blank">{this.props.missionDetails.wikipedia}</a></P>
      <P>Website: <a href={this.props.missionDetails.website} target="_blank">{this.props.missionDetails.website}</a></P>
      <Button onClick={this.props.goBack}>Voltar</Button>
      </Div>
    );
  }
}

export default MissionDetails;
