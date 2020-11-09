import styled from "styled-components";
import React from "react";
import axios from "axios";
import Logo from "../img/musica .png";


const Div = styled.div`
  color: white;
  color: #fb810e;
  text-align: end;
  padding: 40px 30px 0 0;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
   padding: 0;
  }
`;

const DivList = styled.div`
  display:none;

  @media (min-device-width: 320px) and (max-device-width: 420px) {
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 20px 0;
  }
`
const Img = styled.img`
   width: 20%;
   margin-right: 10px;
`

const H2 = styled.h2`
  font-family: "Lobster", cursive;
  font-size: 50px;
  text-shadow: 2px 2px 8px #fb810e;
  margin-left: 10px;

`

const P = styled.p`
  font-size: 33px;
  margin-bottom: 10px;
  font-family: 'Lobster', cursive;
  text-shadow: 2px 2px 8px #fb810e;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    text-align: center;
  }
`
const DivInput = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-device-width: 320px) and (max-device-width: 420px) {
   flex-direction: column;
   justify-content: center;
  }
`

const Input = styled.input`
color: #fb810e;
height: 26px;
width: 23em;
font-family: 'Oswald', sans-serif;
margin-right: 20px;
font-size: 15px;
background-color: black;
&:focus {
    outline: 0;
    background-color:rgb(168, 187, 198, 0.2);
} 
@media (min-device-width: 320px) and (max-device-width: 420px) {
  width: 15em;
  font-size: 19px;
  margin: 20px 0px;
  }
`
const Button = styled.button`
color: #fb810e;
background-color: black;
font-family: 'Oswald', sans-serif;
font-size: 15px;
height: 30px;
width: 15em;
&:hover{
  background-color:rgb(168, 187, 198, 0.1);
  cursor: pointer;
  }
&:focus {
    outline: 0;
}
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
        this.props.getAllPlaylist()
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
         <DivList>
            <Img src={Logo} />
            <H2>Labefy</H2>
          </DivList>
        <P>Crie uma nova playlist!</P>
        <DivInput>
        <Input
          placeholder={"Dê um nome para a nova Playlist"}
          value={this.state.namePlaylist}
          onChange={this.onChangeNamePlaylist}
        />
        <Button onClick={this.createPlaylist}>Criar Playlist</Button>
        </DivInput>
      </Div>
    );
  }
}

export default Navbar;
