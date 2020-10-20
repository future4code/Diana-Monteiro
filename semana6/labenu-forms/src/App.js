import React from 'react';
import './App.css';
import Form1 from "./components/Form1"
import Form2 from "./components/Form2"
import Form3 from "./components/Form3"
import Final from './components/Final'
import styled from 'styled-components';

const DivFormulario = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
`
const Botao = styled.button`
margin: 40px;
`

class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizarPagina = () => {
    switch (this.state.etapa) {
      case 1 :
      return <Form1/>;
      case 2 :
      return <Form2/>;
      case 3 :  
      return <Form3/>;
      case 4 :  
      return <Final/>;
      default:
      return <div></div>;
    }
  }

  onClickProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1})
  }

  render(){
    return(
      <DivFormulario>
        {this.renderizarPagina()}
        {this.state.etapa !== 4 &&
        <Botao onClick={this.onClickProximaEtapa}>{"Próxima etapa"}</Botao>}
      </DivFormulario>
    );
  }
}

export default App;

