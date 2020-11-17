import React from "react";
import { useHistory } from "react-router-dom";


const ListTripPage = () => {
    const history = useHistory(); 

    const goBackAdmPage = () =>{
        history.push("/admin")
    }

    const goToApplication = () =>{
        history.push("/application-form/")
    }

    const goToDetails = () =>{
        history.push("/trips/details")
    }

  return (
  <div>
      <h1>Lista de missões</h1>
    <button onClick={goBackAdmPage}>Voltar para Opções de Adm</button>
    <button onClick={goToApplication}>Aplicar</button>
    <button onClick={goToDetails}>Detalhe da Missão</button>
  </div>
  );
};

export default ListTripPage;