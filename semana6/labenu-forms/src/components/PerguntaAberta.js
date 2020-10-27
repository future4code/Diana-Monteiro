import React from "react";

class PerguntaAberta extends React.Component {
  state = {
    preenchido: ""
  }

  onChangePreenchido = (event) => {
    this.setState({ preenchido: event.target.value });
  };

  render() {
    const preenchaParaProsseguir = () => {
      if(this.state.preenchido === ""){
        alert("Preencha todos as perguntas da Etapa antes de prosseguir!")
      }
    }


    return (
      <div>
        <p>{this.props.pergunta}</p>
        <input value={this.state.preenchido}
        onChange={this.onChangePreenchido}
        />
      </div>
    );
  }
}

export default PerguntaAberta;
