import React from "react";
import Login from "./components/Login";
import Users from "./components/Users";
import styled from "styled-components";
import axios from "axios";

const UserList = styled.div`
  display: flex;
  margin-bottom: 10px;
  border: 1px solid black;
  border-top: none;
  border-left: none;
  border-right: none;
`;
const Button = styled.p`
  padding: 0 5px;
  color: red;
  margin-left: 15em;
  font-weight: bolder;
  &:hover {
    cursor: pointer;
  }
`;

class App extends React.Component {
  state = {
    goingTo: false,
    allUsers: [],
    nameValue: "",
    emailValue: "",
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  componentDidUpdate = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "diana-monteiro-dumont",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        this.setState({ allUsers: resp.data });
      })
      .catch((error) => {
        console.log("oi", error.message);
      });
  };

  createUser = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue,
    };

    axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "diana-monteiro-dumont",
          },
        }
      )
      .then((resp) => {
        this.setState({ nameValue: "" });
        this.setState({ emailValue: "" });
        window.alert("Usuário cadastrado com sucesso!");
      })
      .catch((error) => {
        console.log(error.message);
        window.alert("Algo está errado! Não esqueça do @ e .com no seu email!");
      });
  };

  deletUser = (user) => {
    if(window.confirm("Tem certeza que deseja deletar o usuário?")){
    return axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
        {
          headers: {
            Authorization: "diana-monteiro-dumont",
          },
        }
      )
      .then((resp) => {
        window.alert("Usuário deletado com sucesso!");
      })
      .catch((error) => {
        console.log(error.message);
        window.alert("Usuário não pode ser deletado!");
      });
    } else {
      alert("Deleção cancelada!")
    }
  };

  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value });
  };

  onChangeNameValue = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  GoToUsers = () => {
    this.setState({ goingTo: true });
  };

  GoToLogin = () => {
    this.setState({ goingTo: false });
  };

  render() {
    const renderUsersList = this.state.allUsers.map((user) => {
      return (
        <UserList>
          <p key={user.id}>{user.name}</p>
          <Button onClick={() => this.deletUser(user)}>X</Button>
        </UserList>
      );
    });

    const renderScreen = () => {
      if (this.state.goingTo) {
        return (
          <Users changePage={this.GoToLogin} usersList={renderUsersList} />
        );
      } else {
        return (
          <Login
            nameUserValue={this.state.nameValue}
            onChangeNameUserValue={this.onChangeNameValue}
            emailUserValue={this.state.emailValue}
            onChangeEmailUserValue={this.onChangeEmailValue}
            buttonLogin={this.createUser}
            changePage={this.GoToUsers}
          />
        );
      }
    };

    return <div className="App">{renderScreen()}</div>;
  }
}

export default App;
