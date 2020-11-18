import React from "react";
import NavBar from "../components/NavBar/Navbar";
import { useHistory } from "react-router-dom";


const TripDetailsPage = () => {
    const history = useHistory(); 

    const goBackAdmPage = () =>{
        history.push("/admin")
    }

    
  return (
    <div>
    <NavBar />
    <button onClick={goBackAdmPage}>Voltar para Opções de Adm</button>
    </div>
  );
};

export default TripDetailsPage;