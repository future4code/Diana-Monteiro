import React from "react";
import styled from "styled-components";

import { IconeComContador } from "../IconeComContador/IconeComContador";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import { SecaoCompartilhar } from "../SecaoCompartilhar/SecaoCompartilhar";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import iconeSalvarPreto from "../../img/bookmark-black.svg";
import inconeSalvarBranco from "../../img/bookmark-white.svg";
import iconeCompartilhar from "../../img/send-24px.svg";

const DivPostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;
const DivPostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const DivPostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;
const ImgUsePhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;
const ImgPostPhoto = styled.img`
  width: 100%;
`;

const DivComentario = styled.div`
  margin-left: 15px;
`;
const DivListaComentarios = styled.div`
  display: flex;
  align-items: center;
`;

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhar: false,
    arrayComentarios: [],
  };

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    });

    if (!this.state.curtido) {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas + 1 });
    } else {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas - 1 });
    }
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvo,
    });
  };

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar,
    });
  };

  aoEnviarComentario = (comentario) => {
    const novoComentario = comentario;

    const novoArrayComentarios = [
      ...this.state.arrayComentarios,
      novoComentario,
    ];

    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      arrayComentarios: novoArrayComentarios,
    });
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let iconeSalvar;

    if (this.state.salvo) {
      iconeSalvar = iconeSalvarPreto;
    } else {
      iconeSalvar = inconeSalvarBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    let componenteCompartilhar;

    if (this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhar />;
    }

    const listaDeComentarios = this.state.arrayComentarios.map(
      (comentario, id) => {
        return (
          <DivListaComentarios key={id}>
            <ImgUsePhoto
              src={this.props.fotoUsuario}
              alt={"Imagem do usuario"}
            />
            <p> {comentario}</p>
          </DivListaComentarios>
        );
      }
    );

    return (
      <DivPostContainer>
        <DivPostHeader>
          <ImgUsePhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
          <p>{this.props.nomeUsuario}</p>
        </DivPostHeader>

        <ImgPostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />

        <DivPostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />

          <IconeComContador
            icone={iconeCompartilhar}
            onClickIcone={this.onClickCompartilhar}
          />

          <IconeComContador
            icone={iconeSalvar}
            onClickIcone={this.onClickSalvar}
          />
        </DivPostFooter>
        {componenteComentario}
        {componenteCompartilhar}

        <DivComentario>{listaDeComentarios}</DivComentario>
      </DivPostContainer>
    );
  }
}

export default Post;
