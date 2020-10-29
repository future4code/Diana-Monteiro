import React from "react";
import styled from "styled-components";
import axios from "axios";

const Button = styled.button`
  margin: 20px;
  padding: 5px 30px;
  color: white;
  background-color: rgb(69, 123, 157);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const DivDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #1d3557;
  margin: 4em auto;
  padding: 1em 0.5em 2em 0.5em;
  width: 50vw;
  background-color: rgb(69, 123, 157, 0.3);
  border-radius: 5px;
`;

const Infos = styled.p`
  font-size: 18px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  height: 20px;
`;

class UsersDetails extends React.Component {
  state = {
    inputIsVisible: false,
    
    buttonEdit: true,
    buttonEdit: true,
    emailValue: "",
    nameValue: "",
  };

  editUser = (user) => {
    this.inputVisibility();

    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue,
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
        body,
        {
          headers: {
            Authorization: "diana-monteiro-dumont",
          },
        }
      )
      .then((answer) => {
        window.alert("Edições salvas com sucesso!");
      })
      .catch((error) => {
        console.log(error.message);
        window.alert("Algo está errado!");
      });
  };

  inputVisibility = () => {
    this.setState({
      inputIsVisible: !this.state.inputIsVisible,
      buttonEdit: !this.state.buttonEdit,
    });
  };

  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value });
  };

  onChangeNameValue = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  render() {
    return (
      <div>
        <Button onClick={this.props.changePage}>
          Voltar para Lista de Usuários
        </Button>

        <DivDetails>
          <h1>Detalhes do Usuário</h1>

          <Div>
            <Infos>Nome: {this.props.detailsUser.name}</Infos>

            {this.state.inputIsVisible && (
              <Input
                value={this.state.nameValue}
                onChange={this.onChangeNameValue}
              />
            )}
          </Div>

          <Div>
            <Infos>Email: {this.props.detailsUser.email}</Infos>

            {this.state.inputIsVisible && (
              <Input
                value={this.state.emailValue}
                onChange={this.onChangeEmailValue}
              />
            )}

          </Div>

          <Infos>Id: {this.props.detailsUser.id}</Infos>

          {this.state.buttonEdit ? (
              <Button onClick={this.inputVisibility}>Editar</Button>
            ) : (
              <Button onClick={() => this.editUser(this.props.detailsUser)}>Salvar</Button>
            )}

          <Button onClick={() => this.props.deletUser(this.props.detailsUser)}>
            Deletar Usuário
          </Button>

        </DivDetails>
      </div>
    );
  }
}

export default UsersDetails;
