import React from "react";
import styled from "styled-components";
import "./styles.css";
import { JsxEmit } from "typescript";

const TarefaList = styled.ul`
  padding: 0;
  width: 20em;
  display:flex;
  flex-direction:column;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const DivTarefas = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`
const BotaoOrdenar = styled.button`
  margin: 0 5px 20px 5px;
`
const DivBotoes = styled.div`
  display:flex;
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    localStorage.setItem("tarefa", JSON.stringify(this.state.tarefas))
  }

  componentDidMount() {
    if(localStorage.getItem("tarefa")){
      this.setState ({tarefas: JSON.parse(localStorage.getItem("tarefa"))})
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaListaTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: novaListaTarefas})
    this.setState({inputValue: ""})
  };

  selectTarefa = (id) => {
    const listaTarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id){
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
      return novaTarefa
    } else {
      return tarefa
    }
    })

    this.setState({tarefas: listaTarefas})
  };

  ordenarCrescente = () => {
    const ordemCrescente = this.state.tarefas.sort((a,b) => {
      return (a.texto > b.texto) ? 1 : ((b.texto > a.texto) ? -1 : 0)
    })
    this.setState({tarefas: ordemCrescente})
  }

  
  ordenarDecrescente = () => {
    const ordemDecrescente = this.state.tarefas.reverse((a,b) => {
      return (a.texto > b.texto) ? 1 : ((b.texto > a.texto) ? -1 : 0)
    })
    this.setState({tarefas: ordemDecrescente})
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  removerTarefa = (id) => {
    const listaDeTarefas = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    })

    this.setState({tarefas: listaDeTarefas})
  }

  limparLista = () => {
    this.setState({tarefas: []})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App" key={this.state.tarefa}>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <DivTarefas>
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
              <button onClick={() => this.removerTarefa(tarefa.id)}>remover</button>
              </DivTarefas>
            );
          })}
        </TarefaList>
        <DivBotoes> 
        <BotaoOrdenar onClick={this.ordenarCrescente}> Ordem Crescente </BotaoOrdenar>
        <BotaoOrdenar onClick={this.ordenarDecrescente}> Ordem Decrescente </BotaoOrdenar>
        </DivBotoes>
        <button onClick={this.limparLista}>Limpar Lista</button>
      </div>
    );
  }
}

export default App;
