import axios from "axios";
import styled from "styled-components";
import React from "react";
import NavBar from "./NavBar";
import Play from "../img/playlist.png";
import Details from "../components/Details";

const List = styled.p`
  color: white;
`;
const H2 = styled.h2`
  color: white;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
`;

const Section20 = styled.section`
  width: 20%;
`;
const Section80 = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const DivCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
const P = styled.div`
  color: white;
`;

const Button = styled.button`
    color: white;
`

class Playlists extends React.Component {
  state = {
    allPlaylists: [],
    detailsPlaylist: [],
    seeDetails: false,
    playlistName: "",
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "diana-monteiro-dumont",
          },
        }
      )
      .then((response) => {
        this.setState({ allPlaylists: response.data.result.list });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deletPlaylist = async (playlist) => {
    if (window.confirm("Tem certeza que deseja deletar essa playlist?")) {
      try {
        const response = await axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`,
          {
            headers: {
              Authorization: "diana-monteiro-dumont",
            },
          }
        );
        window.alert("Playlist deletada!");
        this.getAllPlaylists();
      } catch (error) {
        console.log(error.message);
        window.alert("Playlist não pode ser deletada!");
      }
    }
  };

  goToDetails = () => {
    this.setState({ seeDetails: !this.state.seeDetails });
  };

  getPlaylistTracks = (id, name) => {
    this.goToDetails();

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
          headers: {
            Authorization: "diana-monteiro-dumont",
          },
        }
      )
      .then((response) => {
        this.setState({ detailsPlaylist: response.data.result.tracks });
        this.setState({ playlistName: name });
        console.log(response.data.result.tracks);
        console.log(this.state.playlistName);
      })
      .catch((error) => {
        console.log(error.message);
        alert("Não funfô!");
      });
  };

  render() {
    const renderPlaylist = this.state.allPlaylists.map((playlist) => {
      return (
        <List
          key={playlist.id}
          onClick={() => this.getPlaylistTracks(playlist.id, playlist.name)}
        >
          {playlist.name}
        </List>
      );
    });

    const renderPlaylistCard = this.state.allPlaylists.map((playlist) => {
      return (
        <div>
          <img
            src={Play}
            onClick={() => this.getPlaylistTracks(playlist.id, playlist.name)}
          />
          <P key={playlist.id}>{playlist.name}</P>;
          <Button onClick={() => this.deletPlaylist(playlist)}>
            Deletar Playlist
          </Button>
        </div>
      );
    });

    const renderScreen = () => {
      if (this.state.seeDetails) {
        return (
          <Details
            changePage={this.goToDetails}
            detailsPlaylist={this.state.detailsPlaylist}
            namePlaylist = {this.state.playlistName}
          />
        );
      } else {
        return (
          <Section80>
            <div>
              <NavBar />
            </div>
            <DivCard> {renderPlaylistCard}</DivCard>
          </Section80>
        );
      }
    };

    return (
      <Div className="App">
        <Section20>
          <H2>Labefy</H2>
          {renderPlaylist}
        </Section20>
        {renderScreen()}
      </Div>
    );
  }
}

export default Playlists;
