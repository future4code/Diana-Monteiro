import React from "react";
import { StyledButton } from "../components/StyledButton";
import NavBar from "../components/NavBar/Navbar";
import { useHistory } from "react-router-dom";
import { DivAdmPage, DivButton} from "./styled";
import { useProtectedPage } from '../hooks/useProtectedPage';


const AdmPage = () => {
  const history = useHistory();
  useProtectedPage()

  const goToCreate = () => {
    history.push("/trips/create");
  };

  const goToAdmList = () => {
    history.push("/trips/admlist");
  };

  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <DivAdmPage>
        <NavBar />
        <DivButton>
          <StyledButton onClick={goToCreate}>Criar Novas Missões</StyledButton>
          <StyledButton onClick={goToAdmList}>Lista de Missões</StyledButton>
          <StyledButton onClick={logout}>Logout</StyledButton>
        </DivButton>
    </DivAdmPage>
  );
};

export default AdmPage;
