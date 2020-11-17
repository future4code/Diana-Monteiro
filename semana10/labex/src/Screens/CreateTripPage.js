import React from "react";
import { useHistory } from "react-router-dom";


const CreateTripPage = () => {
    const history = useHistory(); 

    const goBackAdmPage = () =>{
        history.push("/admin")
    }

    const goToHomePage = () =>{
        history.push("/")
    }
  return (

  <div>
      <h1>Página de Criar Novas de Missões</h1>
      <button onClick={goBackAdmPage}>Voltar para Opções de Adm</button>
        <button onClick={goToHomePage}>LogOut</button>
</div>
  );
};

export default CreateTripPage;