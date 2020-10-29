import React from "react";
import styled from "styled-components";
import axios from "axios";

const DivLogin = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #1d3557;
  margin: 4em auto;
  padding: 1em 0 2.5em 0;
  width: 30vw;
  background-color: rgb(69, 123, 157, 0.3);
  border-radius: 5px;
`;

const InputLogin = styled.input`
  margin-bottom: 10px;
  width: 16em;
`;

const ButtonSave = styled.button`
  margin-top: 20px;
  padding: 5px 30px;
  color: white;
  background-color: rgb(69, 123, 157);
  border-radius: 5px;
  width: 16em;
  &:hover {
    cursor: pointer;
  }
`;

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

class Login extends React.Component {
  state = {
    nameValue: "",
    emailValue: "",
  };

  createUser = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "diana-monteiro-dumont",
          },
        }
      )
      .then((answer) => {
        this.setState({ nameValue: "", emailValue: "" });
        window.alert("Usuário cadastrado com sucesso!");
      })
      .catch((error) => {
        console.log(error.message);
        window.alert("Algo está errado! Insira um email válido!");
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
          Visualizar lista de Usuários
        </Button>
        <DivLogin>
          <h1>Crie seu Login:</h1>
          <InputLogin
            placeholder={"Nome do Usuário"}
            value={this.state.nameValue}
            onChange={this.onChangeNameValue}
          />
          <InputLogin
            placeholder={"Digite um e-mail válido"}
            value={this.state.emailValue}
            onChange={this.onChangeEmailValue}
          />
          <ButtonSave onClick={this.createUser}>Salvar</ButtonSave>
        </DivLogin>
      </div>
    );
  }
}

export default Login;
