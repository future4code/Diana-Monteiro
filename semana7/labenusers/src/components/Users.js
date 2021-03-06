import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 20px;
  padding: 5px 30px;
  color: white;
  background-color: rgb(69, 123, 157);
  border-radius: 5px;
`;

const DivUsers = styled.div`
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

class Users extends React.Component {

  render() {
    return (
      <div>
        <Button onClick={this.props.changePage}>
          Voltar para página de Login
        </Button>
        <DivUsers>
          <h1>Usuários Cadastrados</h1>
          <div>{this.props.usersLists}</div>
        </DivUsers>
      </div>
    );
  }
}

export default Users;
