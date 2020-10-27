import React from "react";

class PerguntaOpcoes extends React.Component {
  render() {
    const opcoes = this.props.opcoes.map((opcao) => {
        return <option value={this.props.valorOption}>{opcao}</option>
    })

    return (
      <div>
        <p>{this.props.pergunta}</p>
        <select>{opcoes}</select>
      </div>
    );
  }
}

export default PerguntaOpcoes;
