import axios from "axios";
import styled from "styled-components";
import React from "react";
import NavBar from "./NavBar";
import Play from "../img/cd.svg";
import Details from "../components/Details";
import Logo from "../img/musica .png";

const List = styled.p`
  color: #353d42;
  padding: 10px 0 15px 30px;
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  text-shadow: 2px 2px 4px #353d42;

  &:hover {
    background-color: #0a0a0a;
    cursor: pointer;
  }
`;

const YourList = styled.p`
  color: #353d42;
  padding: 10px 0 15px 30px;
  font-family: 'Lobster', cursive;
  font-size: 25px;
  text-shadow: 2px 2px 4px #353d42;
`;

const Card = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const H2 = styled.h2`
  color: #fb810e;
  font-family: "Lobster", cursive;
  font-size: 50px;
  text-shadow: 2px 2px 4px #fb810e;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
`;

const DivList = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 40px 0;
`;

const Section20 = styled.section`
  width: 20%;
  background-color: black;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
   display: none;
  }

`;

const Section80 = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: black;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 100%;
  }

`;

const DivCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border: 4px double #fb810e;
  border-right: none;
  border-left: none;
  border-bottom: none;
  padding: 30px 0;
  margin-top: 20px;
  font-family: 'Lobster', cursive;
  background-color:#0a0a0a;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const P = styled.div`
  color: #353d42;
  margin: 20px;
  font-size: 18px;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    font-size: 22px;
  }
`;

const Button = styled.button`
  color: #fb810e;
  font-family: 'Oswald', sans-serif;
  height: 28px;
  width: 13em;
  background-color: black;
  &:hover {
    cursor: pointer;
    background-color: rgb(53, 61, 66, 0.2);
  }
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    font-size: 15px;
  }
`;

const Img = styled.img`
  width: 23%;
  margin: 20px;
`;

const ImgCard = styled.img`
  width: 40%;
  margin-top: 30px;
  &:hover {
    cursor: pointer;
  }
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 50%;
  }
`;

class Playlists extends React.Component {
  state = {
    allPlaylists: [],
    detailsPlaylist: [],
    seeDetails: false,
    playlistName: "",
    playlistId: "",
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
        this.setState({ playlistId: id });
        this.getAllPlaylists();
      })
      .catch((error) => {
        console.log(error.message);
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
        <Card>
          <ImgCard
            src={Play}
            onClick={() => this.getPlaylistTracks(playlist.id, playlist.name)}
          />
          <P key={playlist.id}>{playlist.name}</P>
          <Button onClick={() => this.deletPlaylist(playlist)}>
            Deletar Playlist
          </Button>
        </Card>
      );
    });

    const renderScreen = () => {
      if (this.state.seeDetails) {
        return (
          <Details
            changePage={this.goToDetails}
            detailsPlaylist={this.state.detailsPlaylist}
            namePlaylist={this.state.playlistName}
            getPlaylistTracks={this.getPlaylistTracks}
            playlistId={this.state.playlistId}
          />
        );
      } else {
        return (
          <Section80>
            <div>
              <NavBar getAllPlaylist={this.getAllPlaylists} />
            </div>
            <DivCard> {renderPlaylistCard}</DivCard>
          </Section80>
        );
      }
    };

    return (
      <Div>
        <Section20>
          <DivList>
            <Img src={Logo} />
            <H2>Labefy</H2>
          </DivList>
          <YourList>Suas Playlists:</YourList>
          {renderPlaylist}
        </Section20>
        {renderScreen()}
      </Div>
    );
  }
}

export default Playlists;
