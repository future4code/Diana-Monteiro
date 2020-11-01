import styled from "styled-components";
import React from "react";
import Axios from "axios";

const Button = styled.button`
  color: #fb810e;
  font-family: 'Oswald', sans-serif;
  height: 28px;
  width: 17em;
  font-size: 16px;
  margin: 20px 0 0 20px;
  background-color: black;
  &:hover{
    background-color:rgb(168, 187, 198, 0.2);
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }

  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 15em;
    height: 37px;
    margin: 40px 0 0 0;
    font-size: 20px;
  }
`;

const Input = styled.input`
  color: #fb810e;
  font-family: 'Oswald', sans-serif;
  background-color: black;
  height: 2em;
  width: 30em;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 19em;
    font-size: 19px;
    }
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

class Details extends React.Component {
  state = {
    nameValue: "",
    artistValue: "",
    urlValue: "",
  };

  onChangeNameValue = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  onChangeArtistValue = (event) => {
    this.setState({ artistValue: event.target.value });
  };

  onChangeUrlValue = (event) => {
    this.setState({ urlValue: event.target.value });
  };

  addTrackToPLaylist = (id) => {
    const body = {
      name: this.state.nameValue,
      artist: this.state.artistValue,
      url: this.state.urlValue,
    };

    Axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
      body,
      {
        headers: {
          Authorization: "diana-monteiro-dumont",
        },
      }
    )
      .then(() => {
        this.setState({ nameValue: "", artistValue: "", urlValue: "" })
        this.props.closeAdd()
        window.alert("Música Adicionada!");
        this.props.getPlaylistTracks()
      })
      .catch((error) => {
        console.log(error.message);
        window.alert("Ops! Algo errado com os dados inseridos!");
      });
  };

  goToDetails = () => {
    this.setState({ add: !this.state.add });
  };

  render() {
    return (
      <Div>
        <Input
          placeholder="Nome da música"
          value={this.state.nameValue}
          onChange={this.onChangeNameValue}
        />
        <Input
          placeholder="Artista"
          value={this.state.artistValue}
          onChange={this.onChangeArtistValue}
        />
        <Input
          placeholder="URL da música"
          value={this.state.urlValue}
          onChange={this.onChangeUrlValue}
        />

        <Button onClick={() => this.addTrackToPLaylist(this.props.playlistId)}>
          Adicionar
        </Button>
      </Div>
    );
  }
}

export default Details;
