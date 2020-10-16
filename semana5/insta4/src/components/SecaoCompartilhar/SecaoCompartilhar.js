import React, { Component } from "react";
import "../RedesSociais/RedesSociais";
import "./SecaoCompartilhar.css";
import { RedesSociais } from "../RedesSociais/RedesSociais";
import iconeFacebook from "../../img/facebook.svg";
import iconeTwitter from '../../img/twitter.svg';
import iconeInstagram from '../../img/instagram.svg'

export class SecaoCompartilhar extends Component {
  state = {
    valorId: " ",
    componenteMensagem: " "
  };

  onChangeMensagem = (event) => {
	  this.setState({ componenteMensagem: event.target.value })
  }

  onclickSelecionarRede = (event) => {
    this.setState({ valorId: event.target.id })
    console.log(`Post compartilhado no ${event.target.id} com a mensagem: ${this.state.componenteMensagem}`)
  };

  render() {

    return (
      <div className={"compartilhar-container"}>
        <RedesSociais
          redeSocial={iconeFacebook}
          nomeRedeSocial= {"Facebook"}
          aoCompartilhar = {this.onclickSelecionarRede}
        />

        <RedesSociais
          redeSocial={iconeTwitter}
          nomeRedeSocial={"Twitter"}
          aoCompartilhar= {this.onclickSelecionarRede}
        />

        <RedesSociais
          redeSocial={iconeInstagram}
          nomeRedeSocial={"Instagram"}
          aoCompartilhar={this.onclickSelecionarRede}
        />

        <div className={"mensagem-compartilhar"}>
        <label>{"Escreva uma mensagem aqui:"}</label>
        <input 
        className={"input-mensagem"}
        placeholder={"Mensagem"}
        value={this.state.componenteMensagem}
        onChange={this.onChangeMensagem} 
        />
        </div>
      </div>
    );
  }
}
