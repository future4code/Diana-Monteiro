import styled from "styled-components";
import React from "react";
import Play from "../img/cd.svg";
import AddTrack from "./AddTrack";

const Div = styled.div`
  height: 100%;
  width: 80%;
  padding: 4em 0;
  background-color:#0a0a0a;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 100%;
  }
`;

const DivImg = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 3em;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
  }
`;

const DivTrack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  text-align: justify;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
  }
`

const P = styled.p`
  color: #353d42;
  width: 32vw;
  font-family: 'Oswald', sans-serif;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 80vw;
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

const H3 = styled.h3`
  font-size: 40px;
  color: #fb810e;
  font-family: "Lobster", cursive;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    font-size: 30px;
    margin-top: 30px;
  }
`;

const Button = styled.button`
  color: #fb810e;
  background-color: black;
  font-family: 'Oswald', sans-serif;
  height: 28px;
  width: 15em;
  margin: 30px 0 0 50px;
  font-size: 16px;
  &:hover{
    background-color:rgb(168, 187, 198, 0.2);
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    font-size: 20px;
    height: 35px;
    margin: 20px 0 0 0;
  }
`;

const DivButtom = styled.div`
  text-align: center;
`

const Img = styled.img`
  width: 18%;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 50%;
  }
`;

const Audio = styled.audio`
  height: 30px;
  width: 25vw;
  &::-webkit-media-controls-panel {
    background-color: rgb(254, 125, 1, 0.7);
  }
  &::-webkit-media-controls-current-time-display,
  ::-webkit-media-controls-time-remaining-display {
    font-family: 'Oswald', sans-serif;
  }
  &::-webkit-media-controls-enclosure {
    border-radius: 5px;
  }
  &:focus {
    outline: 0;
} 
@media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 80vw;
    height: 50px;
  }
`;

class Details extends React.Component {
  state = {
    add: false,
  };

  goToAddTrack = () => {
    this.setState({ add: !this.state.add });
  };

  render() {
    const mapTracks = this.props.detailsPlaylist.map((track) => {
      return (
        <DivTrack key={track.id}>
          <P>
            Música: {track.name} &nbsp; :: &nbsp; Artista: {track.artist}
          </P>
          <Audio src={track.url} controls />
        </DivTrack>
      );
    });
    return (
      <Div>
        <DivImg>
          <Img src={Play} />
          <H3>{this.props.namePlaylist}</H3>
          </DivImg>
          <DivButtom>
          {mapTracks}
          {this.state.add ? (
            <AddTrack
              getPlaylistTracks={this.props.getPlaylistTracks}
              playlistId={this.props.playlistId}
              closeAdd={this.goToAddTrack}
            />
          ) : (
            <Button onClick={this.goToAddTrack}>Adicionar música</Button>
          )}
          <Button onClick={this.props.changePage}>Voltar</Button>
        </DivButtom>
      </Div>
    );
  }
}

export default Details;
