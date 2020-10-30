import styled from "styled-components";
import React from "react";
import axios from "axios";

const Div = styled.div`
  color: white;
`;

const Input = styled.input`
color: white;
`

class Navbar extends React.Component {
  state = {
    namePlaylist: "",
  };

  createPlaylist = () => {
    const body = {
      name: this.state.namePlaylist,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "diana-monteiro-dumont",
          },
        }
      )
      .then((answer) => {
        this.setState({ namePlaylist: " " });
        window.alert("Playlist criada!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangeNamePlaylist = (event) => {
    this.setState({ namePlaylist: event.target.value });
  };

  render() {
    return (
      <Div>
        <p>Crie uma nova play list</p>
        <Input
          placeholder={"Nome da Playlist"}
          value={this.state.namePlaylist}
          onChange={this.onChangeNamePlaylist}
        />
        <button onClick={this.createPlaylist}>Criar</button>
      </Div>
    );
  }
}

export default Navbar;
