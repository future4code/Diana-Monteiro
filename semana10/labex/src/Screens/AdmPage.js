import React from "react";
import NavBar from "../components/NavBar/Navbar";
import { useHistory } from "react-router-dom";


const AdmPage = () => {

const history = useHistory(); 

    const goToCreate = () =>{
        history.push("/trips/create")
    }

    const goToAdmList = () =>{
        history.push("/trips/admlist")
    }

    
  return (
    <div>
    <NavBar/>
    <button onClick={goToCreate}>Criar Novas Missões</button>
    <button onClick={goToAdmList}>Lista de Missões</button>
    </div>
  );

};

export default AdmPage;