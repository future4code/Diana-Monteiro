import React from "react";
import styled from "styled-components";
import axios from "axios";
import UsersDetails from "./UsersDetails";
import Users from "./Users";

const DeleteButton = styled.span`
  color: red;
  margin-left: 15em;
  font-weight: bolder;
  &:hover {
    cursor: pointer;
  }
`;

const UserList = styled.p`
  display: flex;
  border: 1px solid black;
  border-top: none;
  border-left: none;
  border-right: none;
  margin: 0;
  padding-top: 10px;
  &:hover {
    background-color: rgb(69, 123, 157, 0.5);
  }
`;

const NameUser = styled.span`
  font-size: 18px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
  headers: {
    Authorization: "diana-monteiro-dumont",
  },
};

class RenderPage extends React.Component {
  state = {
    seeDetails: false,
    detailsUser: [],
    allUsers: [],
  };

  goToDetails = () => {
    this.setState({ seeDetails: !this.state.seeDetails });
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ allUsers: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deletUser = async (user) => {
    if (window.confirm("Tem certeza que deseja deletar o usuário?")) {
      try {
        const response = await axios.delete(
          `${baseUrl}/${user.id}`,
          axiosConfig
        );
        window.alert("Usuário deletado com sucesso!");
        this.getAllUsers();
      } catch (error) {
        console.log(error.message);
        window.alert("Usuário não pode ser deletado!");
      }
    }
  };

  getUsersByld = (user) => {
    this.goToDetails();

    axios
      .get(`${baseUrl}/${user}`, axiosConfig)
      .then((response) => {
        this.setState({ detailsUser: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const renderUsersList = this.state.allUsers.map((user) => {
      return (
        <UserList key={user.id}>
          <NameUser onClick={() => this.getUsersByld(user.id)}>
            {user.name}
          </NameUser>
          <DeleteButton onClick={() => this.deletUser(user)}>X</DeleteButton>
        </UserList>
      );
    });

    const renderScreen = () => {
      if (this.state.seeDetails) {
        return (
          <UsersDetails
            changePage={this.goToDetails}
            detailsUser={this.state.detailsUser}
            deletUser={this.deletUser}
            getAllUsers={this.getAllUsers}
          />
        );
      } else {
        return (
          <Users
            usersLists={renderUsersList}
            changePage={this.props.changePage}
          />
        );
      }
    };

    return <div>{renderScreen()}</div>;
  }
}

export default RenderPage;
