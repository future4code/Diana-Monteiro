import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import styled from 'styled-components';

const DivInput = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`
const BotaoAdicionar = styled.button`
  width: 210px;
  color: black;
  padding: 5px;
  margin: 10px 0 20px 0;
`
const InputPost = styled.input`
  width: 200px;
  padding: 5px;
  margin: 10px;
`

const ImagemTopo = styled.img`
  width: 70%;
  margin-top: 20px;
`

class App extends React.Component {
  state = {
    arrayDePosts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151",
      },
      {
        nomeUsuario: "gabriel",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152",
      },
      {
        nomeUsuario: "mariana",
        fotoUsuario: "https://picsum.photos/50/53",
        fotoPost: "https://picsum.photos/200/153",
      }
    ],

    valorInputNomeUsuario:"",
    valorInputFotoUsuario:"",
    valorInputFotoPost:""
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };

    const novosPosts = [novoPost, ...this.state.arrayDePosts];
    this.setState({arrayDePosts: novosPosts});
    this.setState({valorInputNomeUsuario: ""})
    this.setState({valorInputFotoUsuario: ""})
    this.setState({valorInputFotoPost: ""})
  };
 
  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value});
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value});
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value});
  };


  render() {
    const listaDePost = this.state.arrayDePosts.map((post, id) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
          key={id}
        />
      );
    });

    return(
    <div className={"app-container"}>
    <DivInput>
    <ImagemTopo src="https://fontmeme.com/temporary/9e8b8908b3ebf184ad2263d4869c08c1.png" alt={'Imagem do Labegram'}/>
    <InputPost
      value={this.state.valorInputNomeUsuario}
      onChange={this.onChangeInputNomeUsuario}
      placeholder={"Digite seu usuário"}
    />
    <InputPost
      value={this.state.valorInputFotoUsuario}
      onChange={this.onChangeInputFotoUsuario}
      placeholder={"Coloque uma foto sua aqui!"}
    /> 
    <InputPost
      value={this.state.valorInputFotoPost}
      onChange={this.onChangeInputFotoPost}
      placeholder={"Agora post uma foto!"}
    />
    <BotaoAdicionar onClick={this.adicionaPost}>Adicionar</BotaoAdicionar>
    </DivInput>
    <div>{listaDePost}</div>
    </div>
    );
  
  }
}

export default App;
