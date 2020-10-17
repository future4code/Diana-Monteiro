import React, { Component } from 'react'
import './RedesSociais.css'

export class  RedesSociais extends Component {


    render() {
        return (
          <div className={"redes-sociais-container"}>
           <img src={this.props.redeSocial} alt="imagem-rede-social"/>
            <p>{this.props.nomeRedeSocial}</p>
            <button id={this.props.nomeRedeSocial} onClick= {this.props.aoCompartilhar}>Compartilhar</button>
          </div>
        );
      }

}