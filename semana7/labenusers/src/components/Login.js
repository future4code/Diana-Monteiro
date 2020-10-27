import React from "react";
import styled from "styled-components";

const DivLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #1d3557;
    padding: 1em 1.5em 2.5em 1.5em;
    margin: 4em 32em;
    background-color: rgb(69, 123, 157, 0.3);
    border-radius: 5px;
`;

const InputLogin = styled.input`
    margin-bottom: 10px;
`;

const ButtonSave = styled.button`
    margin-top: 20px;
    padding: 5px 30px;
    color: white;
    background-color: rgb(69, 123, 157);
    border-radius: 5px;
`;

const Button = styled.button`
    margin: 20px;
    padding: 5px 30px;
    color: white;
    background-color: rgb(69, 123, 157);
    border-radius: 5px;
`;

class Login extends React.Component {
  render() {
    return (
        <div>
            <Button onClick={this.props.changePage}>Visualizar lista de Usuários</Button>
            <DivLogin>
                <h1>Crie seu Login:</h1>
                <InputLogin 
                placeholder={"Nome do Usuário"}
                value={this.props.nameUserValue}
                onChange={this.props.onChangeNameUserValue}
                />
                <InputLogin
                placeholder={"Digite um e-mail válido"}
                value={this.props.emailUserValue}
                onChange={this.props.onChangeEmailUserValue}
                />
                <ButtonSave onClick={this.props.buttonLogin}>Salvar</ButtonSave>
            </DivLogin>
        </div>
    );
  }
}

export default Login;