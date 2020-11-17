import React from "react";
import { useHistory } from "react-router-dom";


const ListApplicationsPage = () => {
    const history = useHistory(); 

    const goBackAdmPage = () =>{
        history.push("/admin")
    }

  return (
  <div>
      <h1>Lista de Aplicações</h1>
    <button onClick={goBackAdmPage}>Voltar para Opções de Adm</button>
    <button>Aprovar candidato</button>
  </div>
  );
};

export default ListApplicationsPage;