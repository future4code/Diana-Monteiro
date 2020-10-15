import React, { Component } from "react";
import "../RedesSociais/RedesSociais";
import "./SecaoCompartilhar.css";
import { RedesSociais } from "../RedesSociais/RedesSociais";
import iconeFacebook from "../../img/facebook.svg";
import iconeTwitter from '../../img/twitter.svg';
import iconeInstagram from '../../img/instagram.svg'

export class SecaoCompartilhar extends Component {

  onclickSelecionarRede = () => {
    console.log("este é um teste");
  };

  render() {
    return (
      <div className={"compartilhar-container"}>
        <RedesSociais
          redeSocial={iconeFacebook}
          nomeRedeSocial= {"Facebook"}
          aoEnviar ={this.onclickSelecionarRede()}
        />

        <RedesSociais
          redeSocial={iconeTwitter}
          nomeRedeSocial={"Twitter"}
          aoEnviar={this.onclickSelecionarRede()}
        />

        <RedesSociais
          redeSocial={iconeInstagram}
          nomeRedeSocial={"Instagram"}
          aoEnviar={this.onclickSelecionarRede()}
        />
      </div>
    );
  }
}
