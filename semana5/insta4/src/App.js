import React from "react";
import Post from "./components/Post/Post";
import styled from 'styled-components';

const DivAppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const DivInput = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  background-color: #dcdcdc;
`
const BotaoAdicionar = styled.button`
  width: 210px;
  color: black;
  padding: 5px;
  margin: 10px 0 20px 0;
  background-color: #a9a9a9;
`
const InputPost = styled.input`
  width: 200px;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
`

const ImagemTopo = styled.img`
  width: 70%;
  margin: 40px 0 20px 0;
`

class App extends React.Component {
  state = {
    arrayDePosts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/191",
      },
      {
        nomeUsuario: "gabriel",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/192",
      },
      {
        nomeUsuario: "mariana",
        fotoUsuario: "https://picsum.photos/50/53",
        fotoPost: "https://picsum.photos/200/193",
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
    <DivAppContainer>
    <DivInput>
    <ImagemTopo src="https://fontmeme.com/permalink/201017/7efd27975a92b739f96e935bd41c409e.png" alt={'Imagem do Labegram'}/>
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
    </DivAppContainer>
    );
  
  }
}

export default App;
