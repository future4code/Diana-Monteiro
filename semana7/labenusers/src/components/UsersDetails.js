import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 20px;
  padding: 5px 30px;
  color: white;
  background-color: rgb(69, 123, 157);
  border-radius: 5px;
`;

const DivDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #1d3557;
  margin: 4em auto;
  padding: 1em 0.5em 2em 0.5em;
  width: 30vw;
  background-color: rgb(69, 123, 157, 0.3);
  border-radius: 5px;
`;

const Infos = styled.p`
  font-size: 18px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

class UsersDetails extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.changePage}>
          Voltar para Lista de Usuários
        </Button>
        <DivDetails>
          <h1>Detalhes do Usuário</h1>
          <Infos>Nome: {this.props.detailsUser.name}</Infos>
          <Infos>Email: {this.props.detailsUser.email}</Infos>
          <Infos>Id: {this.props.detailsUser.email}</Infos>
          <Button onClick={this.props.deleteUser}>Deletar Usuário</Button>
        </DivDetails>
      </div>
    );
  }
}

export default UsersDetails;
