import styled from "styled-components";
import React from "react";
import Play from "../img/playlist.png";

const P = styled.p`
    color: white;
`
const Button = styled.button`
    color: white;
`

class Details extends React.Component {
  render() {
      const mapTracks = this.props.detailsPlaylist.map((track) => {
          return (<div>
            <P>Música: {track.name}  &nbsp; &nbsp;  Artista: {track.artist}</P>
            <audio src={track.url} controls/>
        </div>)
      })
    return (
        <div>
            <img src={Play}/>
            <P>Nome: {this.props.namePlaylist}</P>
            {mapTracks}
            <Button onClick={this.props.changePage}>Voltar</Button>
        </div>
    );
  }
}

export default Details;
