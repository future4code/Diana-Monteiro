import React from "react";
import NavBar from "../components/Navbar";
import { useHistory } from "react-router-dom";


const AdmPage = () => {

const history = useHistory(); 

    const goToApplications = () =>{
        history.push("/trips/applications")
    }

    const goToCreate = () =>{
        history.push("/trips/create")
    }

    const goToList = () =>{
        history.push("/trips/list")
    }

    
  return (
    <div>
    <NavBar/>
    <button onClick={goToApplications}>Lista de Inscrições</button>
    <button onClick={goToCreate}>Criar Novas Missões</button>
    <button onClick={goToList}>Lista de Missões</button>
    </div>
  );

};

export default AdmPage;